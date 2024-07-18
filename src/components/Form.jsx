import React, { useState } from "react";
function Form(props) {
    const [text, setText] = useState("Enter text here");
    const [textColor, setTextColor] = useState ("black");
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        setTextColor("red");
    };
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        setTextColor("black");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const textClear = () => {
        setText("");
    }

    const textCopy = () => {
        let selectText = document.getElementById("textArea")
        selectText.select();
        navigator.clipboard.writeText(selectText.value);
    }
    return (
        <>
            <div className={`container my-4" text-${props.mode==='dark'?'light':'dark'}`}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Enter text below
                    </label>
                    <textarea
                        className="form-control"
                        id="textArea"
                        rows="10"
                        value={text}
                        onChange={handleOnChange}
                        style={{color: textColor }}
                    ></textarea>
                </div>
                <div className="container">
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={toUpperCase}
                    >
                        UPPERCASE
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={toLowerCase}
                    >
                        lowercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={textClear}
                    >
                        Clear
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={textCopy}
                    >
                        Copy
                    </button>
                </div>
            </div>
            <div className={`container my-4" text-${props.mode==='dark'?'light':'dark'}`}>
                <h3>Character & words length</h3>
                <p className="m-0">Text length: {text.length}</p>
                <p>Words length: {text.split(" ").length - 1}</p>
            </div>
        </>
    );
}

export default Form;
