import React from "react";
const data = require("../data/data.json");

class WorkExperience extends React.Component{
    render(){
        let count=0;
        const workList = data.workExperiences.map((work) => {
            count++;
            const colorClass = `timeline-icon color-${count}`;
            
            return(
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft" key={work.company}>
                    <div className="timeline-entry-inner">

                    <div className={colorClass}>
                        <i className="icon-pen2"></i>
                    </div>

                    <div className="timeline-label">
                        <h2><a href="#">{work.title}</a> <span>{work.company}</span></h2>
                        <p>{work.description}</p>
                    </div>
                    </div>
                </article>
            );
        });
        return(
            <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Experience</span>
                            <h2 className="colorlib-heading animate-box">Work Experience</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="timeline-centered">
                           {workList}
                            <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                <div className="timeline-entry-inner">
                                <div className="timeline-icon color-none">
                                </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default WorkExperience;