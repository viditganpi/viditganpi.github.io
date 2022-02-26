import React from "react";

class WorkExperience extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
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
                                <li className="animate-box timeline-unverted">
                                    <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">Software Development Engineer 2</h3>
                                            <span className="company">Microsoft - 2021 - Present</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>
                                                Started working with the tech stack of Typescript, Node.js, React, C# on the 1JS effort to bring in various office clients under umbrella of one mega repository.
                                                Working on different aspects of tooling enabling the build and deployment of the code. Working on constantly improving and
                                                enhanicing this tooling, to handle repositories handing repo sizes of around 30 GBs and continuously growing.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted animate-box">
                                    <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">Software Development Engineer 2</h3>
                                            <span className="company">Gojek - 2019 - 2021</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>
                                                Worked on Restful microsoervices to enhance developer productivity and standarize infrastructure provisioning.
                                                Worked on services based on Ruby on Rails, Golang, Python using data layer in Postgres. These services enabled canary deployments
                                                for kubernetes based workloads, reducing MTD for the services. Designed and implemented microservices for the Gojek platform to standarize
                                                the VM and cluster provisioning. Also worked on services enabling VM deployment and an interesting project involved working on multiple services
                                                enabling ephimeral infrastructure and doing major cost savings.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="animate-box timeline-unverted">
                                    <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">Software Engineer</h3>
                                            <span className="company">Paytm - 2018 - 2019</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>
                                                Built the insurance platform for the Paytm ecosystem from scratch. Worked on designing and implementing a few Restful
                                                microservices for the platform. These servicees were implemented on Nodejs and Java stacks, with a data layer based on mysql, redis
                                                and elastic search. Integrated multiple insurance providers into the system, rolling out product offerings like two wheeler. four wheeler, 
                                                life and health insurance.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted animate-box">
                                    <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">Software Development Engineer</h3>
                                            <span className="company">Ola - 2017 - 2018</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>
                                                Got introduced to the real world programming projects and got to work on the parterner onboarding service based on Nodejs
                                                using MongoDB, redis as the data layer. Implemented various flows for the onboarding process, including onboarding for auto drivers,
                                                international partners. Added self serve flows for the driver partners like modification of contact details etc.
                                            </p>
                                        </div>
                                    </div>
                                </li>
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