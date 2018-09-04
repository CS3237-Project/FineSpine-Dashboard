import React from "react";
import { Container, Row, Col } from "reactstrap";
import { PageContainer, Widget } from "../../components";

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <PageContainer>
          <Container fluid>
            <Row>
              <Col sm={12}>
                <Widget title="Test Widget" subtitle="Test Subtitle" />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    );
  }
}

export default HomePage;
