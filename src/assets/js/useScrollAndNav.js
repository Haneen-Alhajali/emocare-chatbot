import { useEffect } from "react";

const useScrollAndNav = () => {
  useEffect(() => {
    /**
     * Apply .scrolled class to the home as the page is scrolled down
     */
    const toggleScrolled = () => {
      const selectHome = document.querySelector(".home");
      const selectHeader = document.querySelector("#header");
      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;
      window.scrollY > 100
        ? selectHome.classList.add("scrolled")
        : selectHome.classList.remove("scrolled");
    };

    window.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

    const mobileNavToggle = () => {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    };

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToggle();
        }
      });
    });

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");

    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    };

    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    window.addEventListener("load", toggleScrollTop);
    window.addEventListener("scroll", toggleScrollTop);

    /**
     * Navmenu Scrollspy
     */
    const navmenulinks = document.querySelectorAll(".navmenu a");

    const navmenuScrollspy = () => {
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll(".navmenu a.active")
            .forEach((link) => link.classList.remove("active"));
          navmenulink.classList.add("active");
        } else {
          navmenulink.classList.remove("active");
        }
      });
    };

    window.addEventListener("load", navmenuScrollspy);
    window.addEventListener("scroll", navmenuScrollspy);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", mobileNavToggle);
      }
      document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        navmenu.removeEventListener("click", mobileNavToggle);
      });
      if (scrollTop) {
        scrollTop.removeEventListener("click", toggleScrollTop);
      }
      window.removeEventListener("load", toggleScrollTop);
      window.removeEventListener("scroll", toggleScrollTop);
      window.removeEventListener("load", navmenuScrollspy);
      window.removeEventListener("scroll", navmenuScrollspy);
    };
  }, []);
};

export default useScrollAndNav;