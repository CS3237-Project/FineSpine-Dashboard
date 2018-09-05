import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import ReactTooltip from "react-tooltip";

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
          {isOpen && <i className="fa fa-arrow-left" aria-hidden="true" />}
          {!isOpen && <i className="fa fa-bars" aria-hidden="true" />}
        </div>
      </div>

      <div className="sidebar-logo">
        <img
          src={require("../../logo.svg")}
          alt="logo"
          style={{ height: isOpen ? 75 : 50 }}
        />
      </div>

      <div className="sidebar-link-list">
        {links.map(i => (
          <Fragment key={i.text}>
            {!isOpen && (
              <ReactTooltip
                id={i.text}
                place="right"
                type="dark"
                effect="float"
              >
                <span>{i.text}</span>
              </ReactTooltip>
            )}
            <div
              data-tip
              data-for={i.text}
              onClick={() => onLinkClick(i.path, history)}
              className={`sidebar-link ${i.active ? "active" : ""}`}
            >
              {i.icon} {isOpen && i.text}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
