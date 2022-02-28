import React from 'react';
const data = require('../data/data.json');

class Skills extends React.Component{
    render(){
        const skillList = data.skills.map((skill) => {
            return(
                <div className="col-md-3 col-sm-6 col-xs-12" key={skill.src} style={{alignItems: "center"}}>
                    {/* <div className='chart img-circle' style={{background:`url(${skill.src})`}}></div> */}
                    <img className="chart img-circle" style={{
                        overflow: "hidden", 
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"}}src={skill.src} alt={skill.description}/>
                </div>
            );
        });
        return(
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box">My Skills</h2>
                        </div>
                    </div>
                    <div className="row row-pb-md">
                        {skillList}
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;