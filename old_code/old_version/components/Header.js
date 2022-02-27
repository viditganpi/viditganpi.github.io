import React from 'react';
import options from '../../data/particleConfig';
import Particles from "react-tsparticles";

class Header extends React.Component {
    particlesInit(main){
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    particlesLoaded(container){
        console.log(container);
    };
    
    render() {
      return(
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: "url(images/cover_bg_3.jpg)"}} data-stellar-background-ratio="0.5">
            {/* <div className="overlay"></div> */}
            <Particles
                id="tsparticles"
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                options={options}
                />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                <div className="profile-thumb" style= {{background: "url(images/profimage.jpeg)"}}></div>
                                <h1><span>Vidit Mathur</span></h1>
                                <h3><span>Software Engineer</span></h3>
                                <p>
                                    <ul className="fh5co-social-icons">
                                        <li><a href="https://twitter.com/vidit_m100"><i className="icon-twitter2"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/mathurvidit/"><i className="icon-linkedin2"></i></a></li>
                                        <li><a href="https://github.com/viditganpi"><i className="icon-github2"></i></a></li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      );
    }
}

export default Header;