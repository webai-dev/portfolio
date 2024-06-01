import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        {/* <div className="hm-footer-copyright text-center">
          <p>
            &copy; copyright yourname. design and developed by <a href="https://www.themesine.com/">themesine</a>
          </p>
        </div> */}
      </div>
      <div id="scroll-Top">
        <div className="return-to-top" style={{ display: isVisible ? 'block' : 'none' }} onClick={scrollToTop}>
          <i className="fa fa-angle-up " id="scroll-top"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
