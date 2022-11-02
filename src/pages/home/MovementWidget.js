import React from "react";
import { Widget, BarChart } from "../../components";
import { getMovement } from "../../services/DataService";

class MovementWidget extends React.Component {
  state = {
    currentState: "loading",
    data: null
  };

  componentDidMount() {
    this.setState({ currentState: "loading" }, () => {
      getMovement().then(res => {
        this.setState({ data: res, currentState: null });
      });
    });
  }

  render() {
    const { data, currentState } = this.state;
    return (
      <Widget
        height={300}
        title="Movement"
        subtitle="Sum of all detected movements down by the hour"
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

export default MovementWidget;
