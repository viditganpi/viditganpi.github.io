import React from 'react';

class Home extends React.Component{
    

    render(){
        return(
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
				<div className="flexslider js-fullheight">
					<ul className="slides">
				   	<li style={{backgroundImage: "url(images/compbackground.png)"}}>
				   		<div className="overlay"></div>
				   		<div className="container-fluid">
				   			<div className="row">
					   			<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div className="slider-text-inner js-fullheight">
					   					<div className="desc">
						   					<h1 style={{color:"#fff"}}>Hi There! <br/>I'm Vidit</h1>
						   					<h2 style={{color:"#fff"}}>I am a software engineer</h2>
												{/* <p><a className="btn btn-primary btn-learn">Download CV <i className="icon-download4"></i></a></p> */}
											</div>
					   				</div>
					   			</div>
                             
					   		</div>
				   		</div>
				   	</li>
				  	</ul>
			  	</div>
			</section>
        );
    }
}

export default Home;