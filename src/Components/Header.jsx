import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import AboutMe from "./AboutMe";
import MainApp from "./MainApp";

function Header()
{
    function handleClick1(){
        ReactDom.render(
           <App/>,
            document.getElementById("root")
          );
    }
    function handleClick2(){
        ReactDom.render(
            <AboutMe/>,
            document.getElementById("root")
        );
    }
    function handleClick3(){
        ReactDom.render(
            <MainApp firstName="Anonymous"/>,
            document.getElementById("root")
          );
    }
    return (
        <header>
            <h1 onClick={handleClick1}>
                CHGEN
            </h1>
            <div className="Link">
            <a className="Linker" onClick={handleClick1}>HOME</a>
            <a className="Linker" onClick={handleClick2}>ABOUT ME</a>
            <a className="Linker" onClick={handleClick3}>GENERATOR</a>
            </div>
        </header>
    );
}

export default Header;