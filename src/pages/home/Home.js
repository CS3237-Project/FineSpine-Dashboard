import React from "react";
import { Container, Row, Col } from "reactstrap";
import ActivityWidget from "./ActivityWidget";
import PostureWidget from "./PostureWidget";
import PostureBreakdownWidget from "./PostureBreakdownWidget";
import ActivityBreakdownWidget from "./ActivityBreakdownWidget";
import { PageContainer } from "../../components";

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <PageContainer>
          <Container fluid>
            <Row>
              <Col sm={12} lg={6}>
                <PostureBreakdownWidget />
              </Col>
              <Col sm={12} lg={6}>
                <PostureWidget />
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={6}>
                <ActivityBreakdownWidget />
              </Col>
              <Col sm={12} lg={6}>
                <ActivityWidget />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    );
  }
}

export default HomePage;
