import React from "react";
import InputField from "./InputField";
import "./App.css";

export default function Frame(props) {
  return (
    <>
      <div className="frame-container">
        <div className="frame">{props.children}</div>
      </div>
    </>
  );
}
