function Projects() {
    return (
       
        <div  className="about-section">
            <h1 className="about">Projects</h1>
            <div className="strum">
            <div className="design-develope-container">
            <h2 className="about-text" >01</h2>
            <h1 className="project-text" >  Designing, creating and developing the web page for ceramic studio <a href="https://strum.com.pl/">strum</a></h1>
            <h2 className="projects-text" >https://strum.com.pl/</h2>
            <h2 className="projects-text" >Tools: Wordpress, Elementor</h2>
            <h2 className="projects-text" >Ilustrations: Photoshop</h2>
            </div>
            <div className="projects-images"><img 
                height={2000}
                src={require("./images/strum.jpeg")}
            ></img>
            </div>
            <div className="projects-image"><img 
                height={2000}
                src={require("./images/strum.iPhone1.jpg")}
            ></img>
            </div>
            </div>
            <div className="cloudmine">
            <div className="design-develope-container">
            <h2 className="about-text" >02</h2>
            <h1 className="project-text" > Developing the web page for online shop <a href="https://cloudmine.com.pl/">cloudmine</a></h1>
            <h2 className="projects-text" >https://cloudmine.com.pl/</h2>
            <h2 className="projects-text" >Tools: Wordpress, Elementor</h2>
            </div>
            </div>
    </div>
    );
};

export default Projects;
