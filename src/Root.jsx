import React, { Component } from "react";
import "./Style.css";
import API from "./Context API/API";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
      isActive: "API",
    };
  }
  render() {
    const change = (name) => {
      this.setState({ isActive: name });
      // this.setState({isLog: !this.state.isLog})
    };
    return (
      <div>
        <div className="container">
          <div
            onClick={() => change("API")}
            className={this.state.isActive === "API" ? "tab" : "item"}
          >
            API
          </div>
          <div
            onClick={() => change("Container")}
            className={this.state.isActive === "Container" ? "tab" : "item"}
          >
            Container
          </div>
          <div
            onClick={() => change("SC")}
            className={this.state.isActive === "SC" ? "tab" : "item"}
          >
            SC
          </div>
          <div
            onClick={() => change("Hook")}
            className={this.state.isActive === "Hook" ? "tab" : "item"}
          >
            Hook
          </div>
          <div
            onClick={() => change("None")}
            className={this.state.isActive === "None" ? "tab" : "item"}
          >
            None
          </div>
        </div>
        {/* <h3>{this.state.isActive}</h3> */}
        {this.state.isActive === "API" && <API />}
        {this.state.isActive === "Container"}
        {this.state.isActive === "SC"}
        {this.state.isActive === "Hook"}
        {this.state.isActive === "None"}
      </div>
    );
  }
}
