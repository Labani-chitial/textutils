// import React, { useState } from "react";
import React from "react";

function About(props) {
     
    let myStyle = {
        color: props.mode === "dark" ? "white" : "rgb(18 72 115",
        backgroundColor: props.mode === "dark" ? "rgb(18 72 115": "white",
        border: "1px solid",
        borderColor: props.mode === "dark" ? "white" : "rgb(18 72 115"
    }



    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    


    return (
        <div className="container my-3 " style={myStyle}>
            <h1 className="about">About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item text-light">
                    <h2 className="accordion-header">
                        <button className="accordion-button text-light" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show text-light" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            <strong>Textutils gives you a way to analyze your text quickly and efficiently.</strong> Be it word count and Character count.
                    </div>
                </div>
                <div className="accordion-item text-light">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-light" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse text-light" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            <strong>Texutils is a free character tool.</strong>That provides instant character count nd word count statistics for a given text.Texutils gives the report of the word and characters. Thus it is suitable for writing text with word/ character limit</div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item text-light">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-light" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            <strong>This word counter software works in any web browsers such as chrome.</strong> Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary" >{btntext}</button>
            </div> */}
        </div>
    )
}

export default About;