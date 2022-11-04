import React from "react";
import { Widget, BarChart } from "../../components";
import { getPosture } from "../../services/DataService";

class PostureWidget extends React.Component {
  state = {
    currentState: "loading",
    data: null
  };

  componentDidMount() {
    this.setState({ currentState: "loading" }, () => {
      getPosture().then(res => {
        this.setState({ data: res, currentState: null });
      });
    });
  }

  render() {
    const { data, currentState } = this.state;
    return (
      <Widget
        height={300}
        title="Posture Timeline"
        subtitle="Time spent in good or bad posture"
        currentState={currentState}
        // badgeText="$15M"
        body={
          <BarChart
            data={data}
            options={{
              maintainAspectRatio: false,
              scales: {
                xAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 1,
                      maxTicksLimit: 11
                    }
                  }
                ]
              }
            }}
          />
        }
      />
    );
  }
}

export default PostureWidget;
