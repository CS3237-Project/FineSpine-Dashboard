import React from "react";
import { Container, Row, Col } from "reactstrap";
import StockPriceWidget from "./StockPriceWidget";
import { PageContainer, NumberWidget } from "../../components";
import { backgroundColor } from "../../components/widget/colorPallete";

class ActivityPage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <PageContainer>
          <Container fluid>
            <Row>
              <Col sm={12} lg={3}>
                <NumberWidget
                  displayText="$15M"
                  footerText="Overall Revenue"
                  color={backgroundColor[0]}
                />
              </Col>
              <Col sm={12} lg={3}>
                <NumberWidget
                  displayText="289K"
                  footerText="Total Customers"
                  color={backgroundColor[1]}
                />
              </Col>
              <Col sm={12} lg={3}>
                <NumberWidget
                  displayText="$12M"
                  footerText="Total Sales"
                  color={backgroundColor[2]}
                />
              </Col>
              <Col sm={12} lg={3}>
                <NumberWidget
                  displayText="$5.2M"
                  footerText="Total Commission"
                  color={backgroundColor[3]}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <StockPriceWidget />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    );
  }
}

export default ActivityPage;
