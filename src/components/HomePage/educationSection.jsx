const EducationSection = () => {
  return (
    <section id="education" className="education">
      <div className="section-heading text-center">
        <h2>education</h2>
      </div>
      <div className="container">
        <div className="education-horizontal-timeline">
          <div className="row">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2008 - 2011</h2>
                  <h3>Highschool Diploma</h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">
                      Belgrade Code School
                    </h4>
                    <h5>Belgrade, Serbia</h5>
                    {/* <p className="description">
                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2011 - 2015</h2>
                  <h3>Bachelor <span>of </span> computer science</h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">
                      University of Belgrade
                    </h4>
                    <h5>Belgrade, Serbia</h5>
                    {/* <p className="description">
                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2004 - 2008</h2>
                  <h3>bachelor <span>of </span> creative design</h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal spacial-horizontal-line"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">
                      university of bolton
                    </h4>
                    <h5>bolton, united kingdome</h5>
                    <p className="description">
                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection;
