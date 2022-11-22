import React from "react";

function Intro(props)
{
    return(
        <h1 className="Intro">Hello {props.firstName} {props.secondName}</h1>
    );
}


export default Intro;