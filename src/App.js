import React, { Component } from "react";
import logo from "./logo.svg";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/Toolbar/SideDrawer/SideDrawer";
import BackDrop from "./components/Toolbar/Backdrop/BackDrop";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggelclickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar  drawerClickHandler={this.drawerToggelclickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        <main>
          <p style={{ marginTop: "64px" }}></p>
        </main>
      </div>
    );
  }
}

export default App;
