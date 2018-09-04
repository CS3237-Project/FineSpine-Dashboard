import React from "react";
import { Link } from "react-router-dom";

export const SIDEBAR_WIDTH_OPEN = 300;
export const SIDEBAR_WIDTH_CLOSED = 50;

const Sidebar = ({ isOpen, toggle, links }) => {
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

      <div className="sidebar-link-list">
        {links.map(i => (
          <div className="sidebar-link">
            <Link to={i.path}>
              {i.icon} {i.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
