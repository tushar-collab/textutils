import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let capitalizedText = text.toUpperCase();
    setText(capitalizedText);
  };

  const handleLowClick = () => {
    let decapitalizedText = text.toLowerCase();
    setText(decapitalizedText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const countWords = () => {
    console.log(
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length
    );
    return text.split(" ").filter((element) => {
      return element.length !== 0;
    }).length;
  };
  const [text, setText] = useState("Enter text here...");

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <b>
              <h2
                style={{ color: props.mode === "light" ? "black" : "#e2dd7a" }}
              >
                {props.heading}
              </h2>
            </b>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "light" ? "black" : "ghostwhite",
              backgroundColor: props.mode === "light" ? "white" : "#212529",
            }}
          ></textarea>
        </div>

        <button
          className={`btn btn-${
            props.mode === "dark" ? "outline-primary" : "primary"
          } mx-2 my-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "outline-warning" : "warning"
          } mx-2 my-1`}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "outline-danger" : "danger"
          } mx-2 my-1`}
          onClick={handleClearText}
        >
          Clear Text!!
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "outline-info" : "info"
          } mx-2 my-1`}
          onClick={copyText}
        >
          Copy Text
        </button>
      </div>
      <div
        className="my-3"
        style={{ color: props.mode === "light" ? "black" : "#e2dd7a" }}
      >
        <div className="container my-3">
          <h2>Your text Summary...</h2>
          <p style={{ color: props.mode === "light" ? "black" : "#0386f9" }}>
            {countWords()} words and {text.length} characters.
          </p>
          <p style={{ color: props.mode === "light" ? "black" : "#0386f9" }}>
            {0.008 * countWords()} Minutes are required to read..
          </p>
        </div>
      </div>
      <div className="container my-3">
        <h2 style={{ color: props.mode === "light" ? "black" : "#e2dd7a" }}>
          Preview
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text}
        </p>
      </div>
    </>
  );
}
