import React from "react";

function FinalButton(props){
    return (
        <button style={{
            height: props.height + 'px',
            width: props.width + 'px',
            backgroundColor:props.backgroundColor,
            color:props.textColor,
            fontStyle:props.style,
            borderRadius:props.radius + 'px',
            borderStyle:'solid',
            borderWidth:props.borderWidth +'px',
            borderColor:props.borderColor,
            padding:props.padding+ 'px',
        }}
        >{props.text}</button>
    );
}


export default FinalButton;