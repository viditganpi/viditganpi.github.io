import React from 'react';

class About extends React.Component{
    render(){
        return(
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p>This site is a sneek peek into who I am what I love doing
                                            I am a generalist software engineer, with a love for and focus on <strong>backend development</strong> . I have worked on a wide range of technologies, from web engineering to platform engineering, and I have worked on a wide range of projects, from small to large scale.
                                        </p>
                                        <br/>
                                        <p>
                                            When I am not working on a project, I am usually binging some new series, movie, anime or just reading a book in a quiet corner.
                                            I love reading books and mangas and I particularly enjoy genres like productivity, business, self growth, tech and science fiction. I would also like
                                            to travel the world and this is something on my bucket list.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="services color-1">
                                        <span className="icon2"><i className="icon-bulb"></i></span>
                                        <h3>Backend Dev</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2"><i className="icon-globe-outline"></i></span>
                                        <h3>System Design</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                    <div className="services color-3">
                                        <span className="icon2"><i className="icon-data"></i></span>
                                        <h3>Databases</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                    <div className="services color-4">
                                        <span className="icon2"><i className="icon-phone3"></i></span>
                                        <h3>Scalablity</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
