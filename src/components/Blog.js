import React from "react";
const data = require("../data/data.json");
class Blog extends React.Component{
    render(){
        const blogList = data.blogs.map((blog) => {
            return(
                <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft" key={blog.title}>
                    <div className="blog-entry">
                        <a href={blog.link} target="_blank" className="blog-img"><img src={blog.src} className="img-responsive" alt={blog.description}/></a>
                        <div className="desc">
                            <span><small>{blog.date} </small> | <small> {blog.title} </small></span>
                            <h3><a href={blog.link} target="_blank">{blog.title}</a></h3>
                            <p>
                                {blog.description}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <section className="colorlib-blog" data-section="blog">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Read</span>
                            <h2 className="colorlib-heading">Recent Blog</h2>
                        </div>
                    </div>
                    <div className="row">
                        {blogList}
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box">
                            <p><a href="#" data-nav-section="blog" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload"></i></a></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;