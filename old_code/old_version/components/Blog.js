import React from "react";

class Blog extends React.Component{
    render(){
        return(
            <div id="fh5co-blog">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Blog</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="justify-content-center col-md-4">
                            <div className="fh5co-blog animate-box">
                                <a href="https://medium.com/gojekengineering/how-we-reduced-skyrocketing-cpu-usage-5d9d07a3ff6e" className="blog-bg" style={{backgroundImage: "url(images/processors.jpeg)"}}></a>
                                <div className="blog-text">
                                    <span className="posted_on">Jan. 5th 2021</span>
                                    <h3>Reducing skyrocketing CPU usage</h3>
                                    <p>Debugging and resolving high CPU usage in applications that use Python 2 multiprocessing.</p>
                                    <ul className="stuff">
                                        <li><a href="https://medium.com/gojekengineering/how-we-reduced-skyrocketing-cpu-usage-5d9d07a3ff6e">Read More<i className="icon-arrow-right22"></i></a></li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Blog;