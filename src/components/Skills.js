import React from "react";
const data = require('../data/data.json');
class Skills extends React.Component{
    render(){
        const skillList = data.skills.map((skill) => {
            return(
                <div className="col-md-3 col-sm-6 col-xs-12" key={skill.src}>
                    <img className="chart rounded" src={skill.src} alt={skill.description}/>
                </div>
            );
        });
        return(
            <div id="fh5co-skills" className="animate-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div className="row row-pb-md">
                        {skillList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;