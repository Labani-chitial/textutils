import React, { useState } from "react";

function TextForm(props) {

    const handleUpperClick = () => {
        // console.log("Upper case was cicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

     const handleClearClick = (event) => {
       setText(event.target.value)
       props.showAlert("Clear Text", "success");
     }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
        
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy Text", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Space", "success");
    }

    const [text, setText] = useState(" ");
    return (
        <>
        <div className="container" style={{ color : props.mode === "dark" ? "white" : "#042743"}}>
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color : props.mode === "dark" ? "white" : "black"}} 
                id="myBox" placeholder="Type text here" rows="10"></textarea>
            </div>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2 my-1" onClick={handleUpperClick}> Convert to Uppercase </button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}> Convert to Lowercase </button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2 my-1" onClick={handleClearClick}> Clear Text </button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}> Copy Text </button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}> Remove Extra Space </button>

        </div>
        <div className="container my-3" style={{ color : props.mode === "dark" ? "white" : "#042743"}}>
            <h1>Your text Summery</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Word and {text.length} Character</p>
            <p>{0.01 * text.split("").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the Text Box to Preview it here"}</p>
        </div>
        </>
    )
}

export default TextForm;