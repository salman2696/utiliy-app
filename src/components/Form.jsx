import React, { useState, useEffect } from "react";

function Form(props) {
    const [text, setText] = useState(localStorage.getItem("text") || "Enter text here");
    const [textColor, setTextColor] = useState(localStorage.getItem("textColor") || "black");

    useEffect(() => {
        localStorage.setItem("text", text);
        localStorage.setItem("textColor", textColor);
    }, [text, textColor]);

    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleColorChange = (event) => {
        setTextColor(event.target.value);
    };

    const textClear = () => {
        setText("");
    };

    const textCopy = () => {
        let selectText = document.getElementById("textArea");
        selectText.select();
        navigator.clipboard.writeText(selectText.value);
    };

    return (
        <>
            <div
                className={`container my-4 text-${props.mode === "dark" ? "light" : "dark"
                    }`}
            >
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label my-4"
                    >
                        Enter text below
                    </label>
                    <textarea
                        className="form-control"
                        id="textArea"
                        rows="10"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#2d2733" : "white",
                            color: textColor,
                        }}
                    ></textarea>
                </div>
                <div className="container col-md-6">
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
                    <input
                        type="color"
                        value={textColor}
                        onChange={handleColorChange}
                        className="mx-2"
                    />
                </div>
            </div>
            <div
                className={`container my-4 text-${props.mode === "dark" ? "light" : "dark"
                    }`}
            >
                <h3>Character & words length</h3>
                <p className="m-0">Text length: {text.length}</p>
                <p>Words length: {text.split(" ").length - 1}</p>
            </div>
        </>
    );
}

export default Form;