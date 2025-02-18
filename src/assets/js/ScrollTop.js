import React, { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
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

    return () => {
      if (scrollTop) {
        scrollTop.removeEventListener("click", toggleScrollTop);
      }
      window.removeEventListener("load", toggleScrollTop);
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  return (
    <a href="#top" className="scroll-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTop;