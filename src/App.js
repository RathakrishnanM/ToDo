import React from "react";
import Frame from "./Frame";
import InputField from "./InputField";
import "./App.css";

export default function App() {
  const title = {
    width: "30rem",
    height: "5rem",
    fontSize: "3rem",
    border: "none",
    type: "text",
    //border: "1px solid rgb(129, 129, 129, 0.5)",
  };

  const subTitle = {
    width: "29.5rem",
    height: "5rem",
    fontSize: "1.5rem",
    border: "none",
    //border: "1px solid rgb(129, 129, 129, 0.5)",
  };

  return (
    <>
      <Frame>
        <InputField styles={title} placeholder="Title" id="title" />
        <InputField styles={subTitle} placeholder="Subtitle" id="subtitle" />
      </Frame>
    </>
  );
}
