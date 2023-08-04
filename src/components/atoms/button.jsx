import React from "react";

export default function Button(props) {
  return (
    <button
      data-testid={props.testid}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClickHandler}
    >
      {props.text}
    </button>
  );
}
