import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage, ActivityPage } from "./pages";
import { Sidebar } from "./components";
import {
  SIDEBAR_WIDTH_OPEN,
  SIDEBAR_WIDTH_CLOSED
} from "./components/sidebar/Sidebar";

class App extends Component {
  state = {
    sidebarIsOpen: true,
    links: [
      {
        icon: <i className="fa fa-home" aria-hidden="true" />,
        text: "Overview",
        path: "/",
        active: true
      },
      {
        icon: <i className="fa fa-sliders" aria-hidden="true" />,
        text: "Activity",
        path: "/activity"
      }
    ]
  };

  toggleSidebar = () => {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  };

  setActiveLink = (link, history) => {
    this.setState(
      {
        links: this.state.links.map(l => ({
          ...l,
          active: link.text === l.text
        }))
      },
      () => {
        history.push(link.path);
      }
    );
  };

  render() {
    const { sidebarIsOpen, links } = this.state;
    return (
      <div className="App-wrapper">
        <Router>
          <div className="App">
            <Sidebar
              isOpen={sidebarIsOpen}
              toggle={this.toggleSidebar}
              onLinkClick={this.setActiveLink}
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
              <Route exact path="/activity" component={ActivityPage} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
