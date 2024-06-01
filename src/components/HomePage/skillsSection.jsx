import ProgressBar from "../progressbar";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>skills</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">React.js</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <ProgressBar value={95} />
                    </div>
                    <h3>95%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">Angular</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <ProgressBar value={90} />
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">Vue.js</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <ProgressBar value={90} />
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">Javascript</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <ProgressBar value={95} />
                    </div>
                    <h3>95%</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">html 5</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <ProgressBar value={90} />
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">css 3</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <ProgressBar value={90} />
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">typescript</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <ProgressBar value={90} />
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">Three.js</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <ProgressBar value={80} />
                    </div>
                    <h3>80%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;
