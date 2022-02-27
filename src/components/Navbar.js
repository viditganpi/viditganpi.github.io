import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
           <div>
               <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
				<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
					<div className="text-center">
						<div className="author-img" style={{backgroundImage: "url(images/profimage.jpeg)"}}></div>
						<h1 id="colorlib-logo"><a href="index.html">Vidit Mathur</a></h1>
						<span className="position"><a href="#">Software Engineer</a></span>
					</div>
					<nav id="colorlib-main-menu" role="navigation" className="navbar">
						<div id="navbar" className="collapse">
							<ul>
								<li className="active"><a href="#" data-nav-section="home">Home</a></li>
								<li><a href="#" data-nav-section="about">About</a></li>
								{/* <li><a href="#" data-nav-section="services">Services</a></li> */}
								<li><a href="#" data-nav-section="skills">Skills</a></li>
								<li><a href="#" data-nav-section="education">Education</a></li>
								<li><a href="#" data-nav-section="experience">Experience</a></li>
								{/* <li><a href="#" data-nav-section="work">Work</a></li> */}
								<li><a href="#" data-nav-section="blog">Blog</a></li>
								<li><a href="#" data-nav-section="contact">Contact</a></li>
							</ul>
						</div>
					</nav>

					<div className="colorlib-footer">
						<p>
                            <small>&copy; 
                            Copyright 
                            <script>
                                {document.write(new Date().getFullYear())}
                            </script> 
                            All rights reserved. 
                            <br/>Made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </small>
                            <ul>
                                <li><a href="https://twitter.com/vidit_m100" target="_blank"><i className="icon-twitter2"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/mathurvidit/" target="_blank"><i className="icon-linkedin2"></i></a></li>
                                <li><a href="https://github.com/viditganpi" target="_blank" style={{color: "black"}}><i className="icon-github"></i></a></li>
                            </ul>
                        </p>
						
					</div>
				</aside>
           </div>
        );
    }
}

export default NavBar;