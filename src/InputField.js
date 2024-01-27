import React from "react";

export default function InputField(props) {
  return (
    <>
      <div className="input-container">
        <input
          style={props.styles}
          placeholder={props.placeholder}
          id={props.id}
        />
      </div>
    </>
  );
}
