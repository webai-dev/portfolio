import PortFolioImage1 from "../../assets/images/portfolio/blog-1.png";
import PortFolioImage2 from "../../assets/images/portfolio/blog-2.png";
import PortFolioImage3 from "../../assets/images/portfolio/blog-3.png";
import PortFolioImage4 from "../../assets/images/portfolio/blog-4.png";
import PortFolioImage5 from "../../assets/images/portfolio/blog-5.png";
import PortFolioImage6 from "../../assets/images/portfolio/blog-6.png";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-details">
        <div className="section-heading text-center">
          <h2>portfolio</h2>
        </div>
        <div className="container">
          <div className="portfolio-content">
            <div className="isotope">
              <div className="row">

                <div className="col-sm-4">
                  <a href="https://www.getorbital.com" target="_blank">
                    <div className="item">
                      <img src={PortFolioImage1} alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://www.getorbital.com" target="_blank">
                          Get Orbital
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.cubs.dk" target="_blank">
                    <div className="item">
                      <img src={PortFolioImage2} alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://www.cubs.dk" target="_blank">
                          CUBS
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-4">
                  <a href="https://www.dentacloud.ai" target="_blank">
                    <div className="item">
                      <img src={PortFolioImage3} alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://www.dentacloud.ai" target="_blank">
                          Dentacloud
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.ramsoft.com/products/blume" target="_blank">
                    <div className="item">
                      <img src={PortFolioImage4} alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://www.ramsoft.com/products/blume" target="_blank">
                          Blume
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-4">
                  <a href="https://www.ramsoft.com/products/omegaai" target="_blank">
                    <div className="item">
                      <img src={PortFolioImage5} alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://www.ramsoft.com/products/omegaai" target="_blank">
                          OmegaAI
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.ramsoft.com/products/powerserver" target="_blank">
                    <div className="item">
                      <img src={PortFolioImage6} alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="https://www.ramsoft.com/products/powerserver" target="_blank">
                          Power Server
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection;
