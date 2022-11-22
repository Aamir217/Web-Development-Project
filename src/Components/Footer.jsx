import React from "react";

function Footer()
{
    const date = new Date().getFullYear();
    return (
        <footer>
            <p>
                MOHD AAMIR <br />
                Copyright ⓒ {date}
            </p>
        </footer>
    );
}

export default Footer;