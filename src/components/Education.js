import React from 'react';
const data = require('../data/data.json');

class Education extends React.Component{
    render(){
        let count = 0;
        const eduList = data.education.map((edu) => {
            const collapseClass = `collapse-${count}`;
            const areaLabel = `heading-${count}`;
            const collapseDivClass = count==0? "panel-collapse collapse in" : " panel-collapse collapse";
            let eduTag = <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href={`#${collapseClass}`} aria-expanded="false" aria-controls={collapseClass}>
                {edu.title}
            </a>;
            if(count==0){
                eduTag = <a data-toggle="collapse" data-parent="#accordion" href={`#${collapseClass}`} aria-expanded="true"     aria-controls={collapseClass}>
                    {edu.title}
                </a>;
            }
            count++;
            return(
                <div className="panel panel-default" key={edu.title}>
                    <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                            {eduTag}
                        </h4>
                    </div>
                    <div id={collapseClass} className={collapseDivClass} role="tabpanel" aria-labelledby={areaLabel}>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>
                                        {edu.institution}
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <section className="colorlib-education" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Education</span>
                            <h2 className="colorlib-heading animate-box">Education</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <div className="fancy-collapse-panel">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    {eduList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Education;