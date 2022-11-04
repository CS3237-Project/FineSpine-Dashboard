import React from "react";
import { Widget, BarChart } from "../../components";
import { getProcessedData, getActivity } from "../../services/DataService";

class ActivityWidget extends React.Component {
  state = {
    currentState: "loading",
    data: null
  };

  componentDidMount() {
    this.setState({ currentState: "loading" }, () => {
      getActivity().then(res => {
        this.setState({ data: res, currentState: null });
      });
    });
  }

  render() {
    const { data, currentState } = this.state;
    return (
      <Widget
        height={300}
        title="Activity Timeline"
        subtitle="Time spent doing each activity"
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

export default ActivityWidget;
