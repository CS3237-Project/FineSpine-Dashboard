import React from "react";
import { Widget, DoughnutChart } from "../../components";
import { getPostureData } from "../../services/DataService";

class RevenueBreakdownWidget extends React.Component {
  state = {
    currentState: "loading",
    data: null
  };

  componentDidMount() {
    this.setState({ currentState: "loading" }, () => {
      getPostureData().then(res => {
        this.setState({ data: res, currentState: null });
      });
    });
  }

  render() {
    const { data, currentState } = this.state;
    return (
      <Widget
        height={300}
        title="Posture Breakdown"
        subtitle="Posture broken into individual streams"
        currentState={currentState}
        body={
          <DoughnutChart
            data={data}
            options={{
              maintainAspectRatio: false
            }}
          />
        }
      />
    );
  }
}

export default RevenueBreakdownWidget;
