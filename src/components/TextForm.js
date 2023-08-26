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
      let newText = '';
      setText(newText);
  }
  
  const copyText = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const countWords = () => {
    console.log("length: " + text.length);
    if(text.length === 0){
      return 0;
    }else{
      return (text.match(new RegExp("\\s", "g")) || []).length + 1;
    }
  }
  const [text, setText] = useState("Enter text here...");

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label for="myBox" className="form-label">
            <b>
              <h2>{props.heading}</h2>
            </b>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearText}>
          Clear Text!!
        </button>
        <button className="btn btn-info mx-2" onClick={copyText}>
          Copy Text
        </button>
      </div>
      <div className="my-3">
        <h2>Your text Summary...</h2>
        <p>
          {countWords()} words and {text.length} characters.
        </p>
        <p>{0.008 * countWords()} Minutes are required to read..</p>
      </div>
      <div className="container my-3">
        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}
