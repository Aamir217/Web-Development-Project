import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import Generator from "./Generator";

function MainApp(props)
{
    return (
        <div>
            <Header />
            <Intro firstName={props.firstName} secondName={props.secondName} />
            <Generator />
            <Footer />
        </div>
        );
}


export default MainApp;