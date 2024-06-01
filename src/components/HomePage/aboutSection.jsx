import ProfileImage from "../../assets/images/about/profile_image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>about me</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                  I am a professional frontend web developer
                </h3>
                <p>
                  With over 10 years of hands-on experience in Web Development, I've honed my skills across the entire software development lifecycle. From conceptualization and design to deployment and maintenance, I thrive in dynamic, fast-paced environments where innovation is paramount.
                  With a fervent dedication to web development, I specialize in creating robust, user-centric applications that harness the power of cutting-edge technologies.
                </p>
                <div className="row">
                  <div className="col-sm-5">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>milansolesa@outlook.com</p>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="single-about-add-info">
                      <h3>address</h3>
                      <p>Đorđa Čutukovića 21-1, Beograd, Serbia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                {/* <img src={ProfileImage} alt="profile_image" /> */}
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/milan-solesa-1863b52ab" target="_blank">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/webai-dev" target="_blank">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
