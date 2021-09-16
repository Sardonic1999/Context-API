import React, { Component } from "react";
import "./Style.css";
import API from "./Context API/API";
import Icons from "./Styled_API/Icon";
import Mode from "./Styled_API/Context2";
import Contex_Hook from "./Context_Hook/Contex_Hook";
import Main_Kino from "./Kino/Main_Kino";
import Store from "./Kino/Store";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
      isActive: "Main_Kino",
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
            onClick={() => change("Icon")}
            className={this.state.isActive === "Icon" ? "tab" : "item"}
          >
            Icon
          </div>
          <div
            onClick={() => change("Contex_Hook")}
            className={this.state.isActive === "Contex_Hook" ? "tab" : "item"}
          >
            Contex_Hook
          </div>
          <div
            onClick={() => change("Main_Kino")}
            className={this.state.isActive === "Main_Kino" ? "tab" : "item"}
          >
            Main_Kino
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
        {this.state.isActive === "Icon" && (
          <Mode>
            <Icons />
          </Mode>
        )}
        {this.state.isActive === "Contex_Hook" && <Contex_Hook />}
        {this.state.isActive === "Main_Kino" && (
          <Store>
            <Main_Kino />
          </Store>
        )}
        {this.state.isActive === "None"}
      </div>
    );
  }
}
