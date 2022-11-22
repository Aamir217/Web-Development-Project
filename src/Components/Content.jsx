import React from "react";
import ReactDom from "react-dom";
import Bimage from "../Images/Pic1.jpg";
import SignIn from "./SignIn.jsx";


function Content()
{
   
    function handleClick(){
        ReactDom.render(
            <SignIn />,
            document.getElementById("root")
          );
    }
    return (
        <div>
            <img className="Bimage" src={Bimage} alt="Background" />
            <h2 className="Subheading">CSS GENERATOR</h2>
            <p className="Mtext">
            Button Generator is a free online tool that allows you to create cross browser HTML and CSS button styles.<br />
             HTML element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality. 
            </p>
            <button className="btn" onClick={handleClick}>Lets Go!</button>
        </div>
    );
}


export default Content;