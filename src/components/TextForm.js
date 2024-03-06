import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper Case', "success")
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lower Case', "success")

  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const clear = () => {
    setText("");
  };
  const styleChange = () => {
    document.getElementById("myBox").style.color = "red";
    document.getElementById("myBox").style.fontWeight = 800;
    props.showAlert('Color changed', "success")

  };
  // const changeInverse = () =>{
  //  let a = text.split(",")
  //  let c = a.reverse()
  //  let b = c.join("")
  //  setText(b)
  // }
  const copyHandle = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clip board', "success")

  };
  const extraSpace = () => {
    let space = text.split(/[  ] +/);
    setText(space.join(" "));
    props.showAlert('Extra Space has been Removed', "success")

  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            class="form-control"
            onChange={handleonChange}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Convert to Lower
        </button>
        <button className="btn btn-primary mx-2" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={styleChange}>
          Change Red
        </button>
        <button className="btn btn-primary mx-2" onClick={copyHandle}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={extraSpace}>
          Space Handler
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Time required to read {0.008 * text.split(" ").length}</p>
        <h2>Preview: </h2>
        <p>{text.length>0?text:"Enter Something in your text box"}</p>
      </div>
    </>
  );
}
