import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Md ali sami",
      age: 28,
      profession: {
        Prof1: "Content Creator",
        Prof2: "Web Developer",
        Prof3: "Businessman",
      },
    };
  }

  UpdateProfession = () => {
    this.setState({
      profession: {
        ...this.state.profession,
        Prof2: "Laravel Developer",
      },
    });
  };

  render() {
    return (
      <div>
        <h3>My profession is {this.state.profession.Prof2} about</h3>
        <button onClick={this.UpdateProfession}>Click on</button>
      </div>
    );
  }
}
