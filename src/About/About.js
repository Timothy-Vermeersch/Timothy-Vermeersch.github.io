import React from "react";
import Headshot from "../Images/CasualClean.jpg";
import "./About.css";

function About() {
    return (
        <div className="About">
            <h1 id="About-Title">About Me</h1>
            <hr />
            <img id="Headshot" src={Headshot} />
            <h2 id="About-Sectiontitle">Who Am I?</h2>
            <div className="About-Subsection">
                <p>
                    First and for most I would clasify I love all things that involve creativity, design, and building. It's a bit cliche but 
                    my favorite toy growing up as a kid, and still as an adult, would be Legos. The opportunity to build anything only limited 
                    by your own creativey is what pushed me into the field of engineering and software development. The enthusiam I have towards
                    programming is authentic and that authentecity is because of that factor of being able to create something from nothing.
                    The same reason I love working on my car or fixing things around the house is why I love software development. It's the 
                    satisfaction of finishing the job, and knowing that you just accomplished something because its right there, before your 
                    very own eyes.<br/>
                </p>
                <p>
                <br/>
                    Another important part of my identity is being a student. Education has played a huge role in my life defining my personality.
                    I absolutlety love learning, regardless of the topic. There's is something calming about working through a problem or text and 
                    trying to fully understand the depth of knowledge being provided through it. The satisfaction of having your knowledge
                    reaffirmed through examination is just a plus. What is the ultimate reward of education in my opinion, are the instances where
                    a piece of knowledge can be applied to a real life situation and help to arrive at a solution.
                </p>
            </div>
        </div>
    );
}

export default About;