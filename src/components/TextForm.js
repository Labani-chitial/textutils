import React, { useState } from "react";

function TextForm(props) {

    const handleUpperClick = () => {
        // console.log("Upper case was cicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerClick = () => {
        // console.log("Upper case was cicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" placeholder="Type text here" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperClick}> Convert to Uppercase </button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}> Convert to Lowercase </button>
        </div>
        <div className="container my-3">
            <h1>Your text Summery</h1>
            <p>{text.split(" ").length} Word and {text.length} Character</p>
            <p>{0.010 * text.split("").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm;