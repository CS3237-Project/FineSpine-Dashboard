import React from "react";
import { Container, Row, Col } from "reactstrap";
import MonthlyRevenueWidget from "./MonthlyRevenueWidget";
import RevenueBreakdownWidget from "./RevenueBreakdownWidget";
import NewCustomersWidget from "./NewCustomersWidget";
import { PageContainer } from "../../components";

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <PageContainer>
          <Container fluid>
            <Row>
              <Col sm={12}>
                <MonthlyRevenueWidget />
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={6}>
                <RevenueBreakdownWidget />
              </Col>
              <Col sm={12} lg={6}>
                <NewCustomersWidget />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    );
  }
}

export default HomePage;
