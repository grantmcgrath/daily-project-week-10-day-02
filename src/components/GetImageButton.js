import React, {Component} from "react";


const GetImageButton = (props) => {
  return (
    <button onClick = {props.onClick} type="submit">Get Rover Image</button>
  );
}

export default GetImageButton;
