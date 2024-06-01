import OwlCarousel from "react-owl-carousel";

import Client1Image from "../../assets/images/clients/c1.png"
import Client2Image from "../../assets/images/clients/c2.png"
import Client3Image from "../../assets/images/clients/c3.png"
import Client4Image from "../../assets/images/clients/c4.png"
import Client5Image from "../../assets/images/clients/c5.png"
import Client6Image from "../../assets/images/clients/c6.png"
import Client7Image from "../../assets/images/clients/c7.png"

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ClientSection = () => {
  return (
    <section id="clients" className="clients">
      <div className="section-heading text-center">
        <h2>clients</h2>
      </div>
      <div className="clients-area">
        <div className="container">
          <OwlCarousel
            className="owl-carousel owl-theme"
            id="client"
            loop
            smartSpeed={1000}
            autoplay
            dots={false}
            autoplayHoverPause
            responsive={{
              0: { items: 2 },
              600: { items: 4 },
              1199: { items: 4 },
              1200: { items: 7 }
            }}
          >
            <div className="item"><a href="#"><img src={Client1Image} alt="brand-image" /></a></div>
            <div className="item"><a href="#"><img src={Client2Image} alt="brand-image" /></a></div>
            <div className="item"><a href="#"><img src={Client3Image} alt="brand-image" /></a></div>
            <div className="item"><a href="#"><img src={Client4Image} alt="brand-image" /></a></div>
            <div className="item"><a href="#"><img src={Client5Image} alt="brand-image" /></a></div>
            <div className="item"><a href="#"><img src={Client6Image} alt="brand-image" /></a></div>
            <div className="item"><a href="#"><img src={Client7Image} alt="brand-image" /></a></div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  )
}

export default ClientSection;
