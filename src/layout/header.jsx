import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={handleNavCollapse}>
                {isNavCollapsed ? <i className="fa fa-bars"></i> : <i className="fa fa-times"></i>}
              </button>
              <Link className="navbar-brand" to="/">Milan Solesa</Link>
            </div>
            <div className={`collapse navbar-collapse menu-ui-design ${!isNavCollapsed ? 'mobile-menu' : ''}`} id="navbar-menu">
              <ScrollspyNav
                scrollTargetIds={["education", "skills", "experience", "profiles", "portfolio", /*"clients",*/ "contact"]}
                offset={0}
                activeNavClass="active"
                scrollDuration="600"
                headerBackground="true"
              >
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className=" smooth-menu active"></li>
                  <li className=" smooth-menu"><a href="#education">education</a></li>
                  <li className="smooth-menu"><a href="#skills">skills</a></li>
                  <li className="smooth-menu"><a href="#experience">experience</a></li>
                  <li className="smooth-menu"><a href="#profiles">profile</a></li>
                  <li className="smooth-menu"><a href="#portfolio">portfolio</a></li>
                  {/* <li className="smooth-menu"><a href="#clients">clients</a></li> */}
                  <li className="smooth-menu"><a href="#contact">contact</a></li>
                </ul>
              </ScrollspyNav>
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  )
}

export default Header;
