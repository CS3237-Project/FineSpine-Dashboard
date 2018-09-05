import React from "react";
import { Container, Row, Col } from "reactstrap";
import MonthlyRevenueWidget from "../home/MonthlyRevenueWidget";
import RevenueBreakdownWidget from "../home/RevenueBreakdownWidget";
import NewCustomersWidget from "../home/NewCustomersWidget";
import { PageContainer } from "../../components";

class ActivityPage extends React.Component {
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

export default ActivityPage;
