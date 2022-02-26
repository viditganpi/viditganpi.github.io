import React from "react";

class About extends React.Component{
    render(){
        return(
            <div id="fh5co-about" className="animate-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="info">
                                <li><span className="first-block">Full Name:</span><span className="second-block">Vidit Mathur</span></li>
                                <li><span className="first-block">Phone:</span><span className="second-block">+91 9990842481, 9315924201</span></li>
                                <li><span className="first-block">Email:</span><span className="second-block">viditganpi10@gmail.com</span></li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <h2>Hello There!</h2>
                            <p>This site is a sneek peek into who I am what I love doing and what I have been doing in the past few years, the software and technnologies I have worked on the blogs I have put out.</p>
                            <p>
                                I am a generalist software engineer, with a love for and focus on backend technnologies. In the past few years of my professional experience I have been
                                working on a wide range of technologies, from web engineering to platform engineering, and I have worked on a wide range of projects, from small to large scale.
                                I have decent experience working on ecommerce services, infrastructure, and cloud services. I enjoy the process of engineering and designing software, which can 
                                have positive impact on the target audience. I have been fortunate enough to work on a really varied stack of technologies including Nodejs, Python, Java, Ruby, Golang.
                                I am a self-motivated individual, who is always looking for new challenges, learnings and opportunities.
                            </p>
                            <p>
                                When I am not working on a project, I am usually binging some new series, movie, anime or just reading a book in a quiet corner.
                                I love reading books and mangas and I particularly enjoy genres like productivity, business, self growth, tech and science fiction. I would also like
                                to travel the world and this is something on my bucket list.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;