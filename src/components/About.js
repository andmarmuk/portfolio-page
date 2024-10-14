function About() {
    return (
        <div className="about-section">
            <h1 className="about">About me</h1>
            <div className="grid">
            <div>
                <h1 className="about-text">I am a passionate individual with a wide range of hobbies and a strong desire to continuously develop my skills.</h1>
                <h1 className="about-text">Whether in my personal interests or professional journey, I am always eager to learn, grow, and explore new possibilities.</h1>
                </div>
                <div className="hobbies-container">
                <div className="hobbies"><img 
                height={230}
                src={require("./images/Capture.JPG")}
                ></img>
                <h1 className="description">Digital painting</h1>
                </div>
                <div className="hobbies"><img 
                height={230}
                src={require("./images/figma.jpg")}
                ></img>
                <h1 className="description">Prototyping</h1>
                </div>
                <div className="hobbies"><img 
                height={230}
                src={require("./images/Marharyta-Mukhina-Plansza02__compressed.jpg")}
                ></img>
                <h1 className="description">Architecture</h1>
                </div>
                <div className="hobbies"><img 
                height={230}
                src={require("./images/Instagram post - 1.gif")}
                ></img>
                <h1 className="description">3D modeling</h1>
                </div>
                </div>
                </div>
        </div>
    );
};

export default About;