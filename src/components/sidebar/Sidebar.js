import React from "react";
import { withRouter } from "react-router-dom";

export const SIDEBAR_WIDTH_OPEN = 300;
export const SIDEBAR_WIDTH_CLOSED = 50;

const Sidebar = ({ isOpen, toggle, links, onLinkClick, history }) => {
  return (
    <div
      className="Sidebar"
      style={{
        width: isOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED
      }}
    >
      <div className="sidebar-header">
        <div className="sidebar-toggle-button" onClick={toggle}>
          {isOpen && <i className="fa fa-times" aria-hidden="true" />}
          {!isOpen && <i className="fa fa-bars" aria-hidden="true" />}
        </div>
      </div>

      <div className="sidebar-logo">
        <img
          src={require("../../logo.svg")}
          alt="logo"
          style={{ height: isOpen ? 75 : 30 }}
        />
      </div>

      <div className="sidebar-link-list">
        {links.map(i => (
          <div
            key={i.text}
            onClick={() => onLinkClick(i, history)}
            className={`sidebar-link ${i.active ? "active" : ""}`}
          >
            {i.icon} {isOpen && i.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
