import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Sidebar } from "./components";
import {
  SIDEBAR_WIDTH_OPEN,
  SIDEBAR_WIDTH_CLOSED
} from "./components/sidebar/Sidebar";
import $ from 'jquery';

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
      // {
      //   icon: <i className="fa fa-sliders" aria-hidden="true" />,
      //   text: "Activity",
      //   path: "/activity"
      // }
    ],
  };

  componentDidMount() {
    //set active link based on window path
    this.setActiveLink(window.location.pathname);
    this.handleWindowResize(); //close sidebar on small screens
    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener('load', this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  toggleSidebar = () => {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  };

  handleLinkClick = (path, history) => {
    this.setActiveLink(path, () => {
      history.push(path);
    });
  };

  setActiveLink = (path, cb) => {
    this.setState(
      {
        links: this.state.links.map(l => ({
          ...l,
          active: path === l.path
        }))
      },
      () => {
        if (cb) {
          cb();
        }
      }
    );
  };

  //handle sidebar open/close based on widow width
  handleWindowResize = () => {
    const width = window.innerWidth || document.body.clientWidth;
    this.setState({ sidebarIsOpen: width >= 1136 });
  };

  handleLoad = () => {
    $.ajax({
      url: "http://localhost:8000/",
      method: 'GET',
    }).then(function() {
      $.ajax({
        url: "app.py",
        context: document.body
      })
    })

  }

  render() {
    const { sidebarIsOpen, links } = this.state;
    return (
      <div className="App-wrapper">
        <Router>
          <div className="App">
            <Sidebar
              isOpen={sidebarIsOpen}
              toggle={this.toggleSidebar}
              onLinkClick={this.handleLinkClick}
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
              {/* <Route exact path="/activity" component={ActivityPage} /> */}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
