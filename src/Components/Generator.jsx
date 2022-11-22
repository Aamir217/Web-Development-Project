import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FinalButton from "./FinalButton";
function Generator() {
    const [buText, setText] = React.useState("Sample Button");
    const [buHeight, setHeight] = React.useState("80");
    const [Bcolor, setBColor] = React.useState("#45818e");
    const [Tcolor, setTColor] = React.useState("#ffffff");
    const [buWidth, setWidth] = React.useState("140");
    const [Bstyle, setStyle] = React.useState("normal");
    const [Bradius, setRadius] = React.useState("1");
    const [Bpadding, setPadding] = React.useState("1");
    const [Bocolor, setBocolor] = React.useState("#black");
    const [Bowidth, setBowidth] = React.useState("1");
    const [state, setState] = React.useState(false);

    function changeBoWidth(event) {
        setBowidth(event.target.value);
    }
    function changeBoColor(event) {
        setBocolor(event.target.value);
    }
    function changePadding(event) {
        setPadding(event.target.value);
    }

    function changeRadius(event) {
        setRadius(event.target.value);
    }
    function changeStyle(event) {
        setStyle(event.target.value);
    }

    function changeWidth(event) {
        setWidth(event.target.value);
    }

    function changeTColor(event) {
        setTColor(event.target.value);
    }

    function changeText(event) {
        setText(event.target.value);
    }

    function changeHeight(event) {
        setHeight(event.target.value);
    }

    function changeBColor(event) {
        setBColor(event.target.value);
    }

    function changeStateToTrue() {
        setState(true)
    }

    setTimeout(() => {
        changeStateToFalse();
    }, 2000);
    function changeStateToFalse(){
        setState(false)
    }


    return (
        <div>
            <table>
                <tr>
                    <th>
                        <div className="container left-box-middle">
                            <label for="Btext">Button Text</label>
                            <input className="Ginput" onChange={changeText} type="text" name="Btext" placeholder="Enter Your Text" value={buText} /><br />
                            <label for="Fstyle">Font Style :</label>
                            <select id="Fstyle" onChange={changeStyle} name="Fstyle" value={Bstyle}>
                                <option value="normal">normal</option>
                                <option value="italic">italic</option>
                                <option value="oblique">oblique</option>
                            </select><br /><br />
                            <label for="Bowidth">Border Width</label>
                            <input className="Ginput" onChange={changeBoWidth} type="number" name="Bowidth" min="1" max="10" value={Bowidth} /><br />
                            <label for="BHeight">Button Height</label>
                            <input className="Ginput" onChange={changeHeight} type="number" name="BHeight" min="1" max="200" value={buHeight} /><br />
                            <label for="BWidth">Button Width</label>
                            <input className="Ginput" onChange={changeWidth} type="number" name="BWidth" min="1" max="200" value={buWidth} /><br />
                        </div>
                    </th>
                    <th>
                        <div className="middle-box">
                            <h2>PREVIEW :</h2><br />
                            <FinalButton height={buHeight} width={buWidth} backgroundColor={Bcolor} text={buText} textColor={Tcolor} style={Bstyle} radius={Bradius} padding={Bpadding} borderColor={Bocolor} borderWidth={Bowidth} />
                        </div>
                    </th>
                    <th>
                        <div className="container left-box-middle">
                            <label for="Bcolor">Background Color</label>
                            <input className="Ginput" onChange={changeBColor} type="color" name="Bcolor" value={Bcolor} /><br />
                            <label for="Tcolor">Text Color</label>
                            <input className="Ginput" onChange={changeTColor} type="color" name="Tcolor" value={Tcolor} /><br />
                            <label for="Bocolor">Border Color</label>
                            <input className="Ginput" onChange={changeBoColor} type="color" name="Bocolor" value={Bocolor} /><br />
                            <label for="BRadius">Border Radius</label>
                            <input className="Ginput" type="number" onChange={changeRadius} name="BRadius" min="1" max="50" value={Bradius} /><br />
                            <label for="BPadding">Padding</label>
                            <input className="Ginput" type="number" onChange={changePadding} name="BPadding" min="1" max="50" value={Bpadding} /><br />
                        </div>
                    </th>
                </tr>
            </table>
            <div className="note2">
                <h1 className="result">CSS Code :({buText})</h1>
                <br />
                <p className="Overp" id="copyContent">
                    background-color:    {Bcolor};<br />
                    border-style:  solid;<br />
                    border-radius: {Bradius}px;<br />
                    border-width:  {Bowidth}px;<br />
                    border-color:  {Bocolor};<br />
                    padding:       {Bpadding}px;<br />
                    color:         {Tcolor};<br />
                    display:       inline-block;<br />
                    height:        {buHeight}px;<br />
                    width:         {buWidth}px;<br />
                    font-style:    {Bstyle};<br />
                    text-align:    center;<br />
                </p>
            </div>
            <CopyToClipboard onCopy={changeStateToTrue} text={'background-color:    ' + Bcolor + ';\n'
                + 'border-style:  solid;\n'
                + 'border-radius: ' + Bradius + 'px;\n'
                + 'border-width:  ' + Bowidth + 'px;\n'
                + 'border-color:  ' + Bocolor + ';\n'
                + 'padding:       ' + Bpadding + 'px;\n'
                + 'color:         ' + Tcolor + ';\n'
                + 'display:       inline-block;\n'
                + 'height:        ' + buHeight + 'px;\n'
                + 'width:         ' + buWidth + 'px;\n'
                + 'font-style:    ' + Bstyle + ';\n'
                + 'text-align:    center;\n'}>
                <table>
                    <tr>
                    <th>
                    <button onClick={setTimeout} className="Copybutton">Hit To Copy---</button>
                    </th>
                    <th>
                    <section className="section">
                            {state ? <span style={{ color:'#50a3a2',marginLeft:'5px' }}>Copied.</span> : null}
                        </section>
                    </th>
                    </tr>
                </table>
            </CopyToClipboard>

        </div>
    );
}


export default Generator;