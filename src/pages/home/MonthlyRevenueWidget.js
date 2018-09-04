import React from "react";
import { Widget, BarChart } from "../../components";
import { getMonthlyRevenue } from "../../services/DataService";

class MonthlyRevenueWidget extends React.Component {
  state = {
    currentState: "loading",
    data: null
  };

  componentDidMount() {
    this.setState({ currentState: "loading" }, () => {
      getMonthlyRevenue().then(res => {
        this.setState({ data: res, currentState: null });
      });
    });
  }

  render() {
    const { data, currentState } = this.state;
    return (
      <Widget
        height={300}
        title="Monthly Revenue"
        subtitle="Sum of all revenue broken down by month"
        currentState={currentState}
        badgeText="$15M"
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

export default MonthlyRevenueWidget;
