import React from "react";
import { Widget, DoughnutChart } from "../../components";
import { getPostureData } from "../../services/DataService";

class PostureBreakdownWidget extends React.Component {
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
        subtitle="Ratio between your good posture and bad posture time"
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

export default PostureBreakdownWidget;
