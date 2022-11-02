import React from "react";
import { Container, Row, Col } from "reactstrap";
import MovementWidget from "./MovementWidget";
import PostureBreakdownWidget from "./PostureBreakdownWidget";
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
                <MovementWidget />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    );
  }
}

export default HomePage;
