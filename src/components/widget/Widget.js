import React, { Fragment } from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { backgroundColor } from "./colorPallete";
import { ScaleLoader as Loader } from "react-spinners";
import CenterWrapper from "../wrappers/CenterWrapper";

const Widget = ({
  title,
  subtitle,
  body,
  footer,
  badgeText,
  currentState = null,
  height
}) => {
  return (
    <div className="Widget">
      <Card className="hover-shadow">
        <CardBody>
          {title && (
            <div className="widget-title">
              {title}
              {badgeText !== null &&
                badgeText !== undefined && (
                  <span style={{ float: "right" }}>
                    <Badge style={{ backgroundColor: backgroundColor[0] }}>
                      {badgeText}
                    </Badge>
                  </span>
                )}
            </div>
          )}
          {subtitle && (
            <div className="widget-subtitle text-muted">{subtitle}</div>
          )}
          {currentState === null &&
            body && (
              <div className="widget-body" style={{ height }}>
                {body}
              </div>
            )}
          {currentState === "loading" && (
            <CenterWrapper height={150}>
              <Loader color={backgroundColor[0]} />
            </CenterWrapper>
          )}
          {currentState === "error" && (
            <CenterWrapper height={150}>
              <div className="text-danger">
                <i className="fa fa-frown-o" aria-hidden="true" /> An error
                occured loading this widget...
              </div>
            </CenterWrapper>
          )}
        </CardBody>
        {footer && (
          <Fragment>
            <hr style={{ marginBottom: 5, marginTop: 0 }} />
            <div className="widget-footer">{footer}</div>
          </Fragment>
        )}
      </Card>
    </div>
  );
};

export default Widget;
