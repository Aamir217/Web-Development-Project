import React from "react";
import Header from "./Header";

function AboutMe(){
    return (
        <div>
            <Header/>
            <div className="note2">
                    <h1 className="result">About Me !!!</h1>
                    <br />
                    <p className="Overp">
                        Name: Mohd Aamir<br/>
                        Phone-Number: +91-9169120779<br/>
                        Branch: Computer Science(B Tech)<br/>
                        College: Pranveer Singh Institute of Technology<br/>
                        Year: 2nd Year(3rd semester)<br/>
                    </p>
                </div>
        </div>
    );
}

export default AboutMe;