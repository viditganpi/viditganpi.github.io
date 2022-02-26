import React from "react";
const data = require('../data/data.json');
class WorkExperience extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let classes = ["timeline-inverted", "timeline-unverted"];
        let count = 0;

        const workExperienceList = data.workExperiences.map((workExperience) => {
            let panelClass = count%2==0?`animate-box ${classes[0]}`:`animate-box ${classes[1]}`;
            count++;
            return(
                <li className={panelClass} key={workExperience.company}>
                    <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h3 className="timeline-title">{workExperience.title}</h3>
                            <span className="company">{workExperience.company}</span>
                        </div>
                        <div className="timeline-body">
                            <p>
                                {workExperience.description}
                            </p>
                        </div>
                    </div>
                </li>
            );
        });
        
        return(
            <div id="fh5co-resume" className="fh5co-bg-color">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>My Journey</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0">
                            <ul className="timeline">
                                <li className="timeline-heading text-center animate-box">
                                    <div><h3>Work Experience</h3></div>
                                </li>
                                {workExperienceList}
                                <br/>
                                <li className="timeline-heading text-center animate-box">
                                    <div><h3>Education</h3></div>
                                </li>
                                <li className="timeline-inverted animate-box">
                                    <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">B.Tech</h3>
                                            <span className="company">Jaypee Institute of information technology - 2013 - 2017</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>Graduated in computer science and engineering with a 9.1 GPA</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExperience;