import React from "react";
import { Widget, DoughnutChart } from "../../components";
import { getActivityData } from "../../services/DataService";

class ActivityBreakdownWidget extends React.Component {
  state = {
    currentState: "loading",
    data: null
  };

  componentDidMount() {
    this.setState({ currentState: "loading" }, () => {
      getActivityData().then(res => {
        this.setState({ data: res, currentState: null });
      });
    });
  }

  render() {
    const { data, currentState } = this.state;
    return (
      <Widget
        height={300}
        title="Activity Breakdown"
        subtitle="Ratio between your activity status"
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

export default ActivityBreakdownWidget;
