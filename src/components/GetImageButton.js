import React, {Component} from "react";

export default class GetImageButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={props.action}>Get Rover Image</button>
    );
  }
}
