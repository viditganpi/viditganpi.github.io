import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-google-plus"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="#">viditganpi10@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-map"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p>Ghaziabad, Uttar Pradesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;