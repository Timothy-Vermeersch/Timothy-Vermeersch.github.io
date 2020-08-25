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
                <h2 id="About-Subtitle">A Maker</h2>
                <p>
                    I love all things that involve creativity, design, and building. It's a bit cliche but my favorite toy growing up as a
                    kid, and still as an adult, would be Legos. The opportunity to build anything only limited by your own creativey is what
                    pushed me into the field of engineering and software development. The enthusiam I have towards programming is authentic
                    and this is because of that factor of being able to create something with your own hands. The same reason I love working
                    on my car or fixing things around the house is why I love software development. It's the satisfaction of finishing
                    the job, and knowing that you just accomplished something because its right before your eyes.
                </p>
            </div>
            <div className="About-Subsection">
                <h2 id="About-Subtitle">A Student</h2>
                <p>
                    I have been attending the University of California Santa Cruz since Fall 2019. My proposed major is computer science.
                    I love learning and try my hardest to succeed and to help my fellow students. Education is an important part of my
                    identity and enjoy applying and discussing the information obtained throught my coursework.
                </p>
            </div>
        </div>
    );
}

export default About;