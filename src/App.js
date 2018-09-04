import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Sidebar } from "./components";
import {
  SIDEBAR_WIDTH_OPEN,
  SIDEBAR_WIDTH_CLOSED
} from "./components/sidebar/Sidebar";

const links = [
  {
    icon: <i className="fa fa-home" aria-hidden="true" />,
    text: "Home",
    path: "/"
  }
];
class App extends Component {
  state = {
    sidebarIsOpen: true
  };

  toggleSidebar = () => {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  };

  render() {
    const { sidebarIsOpen } = this.state;
    return (
      <div className="App-wrapper">
        <Router>
          <div className="App">
            <Sidebar
              isOpen={sidebarIsOpen}
              toggle={this.toggleSidebar}
              links={links}
            />
            <div
              className="router-wrapper"
              style={{
                width: sidebarIsOpen
                  ? `calc(100vw - ${SIDEBAR_WIDTH_OPEN}px)`
                  : `calc(100vw - ${SIDEBAR_WIDTH_CLOSED}px)`
              }}
            >
              <Route exact path="/" component={HomePage} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
