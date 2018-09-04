import React from "react";
import { Widget, LineChart } from "../../components";
import { getNewCustomers } from "../../services/DataService";

class NewCustomersWidget extends React.Component {
  state = {
    currentState: "loading",
    data: {}
  };

  componentDidMount() {
    this.setState({ currentState: "loading" }, () => {
      getNewCustomers().then(res => {
        this.setState({ data: res, currentState: null });
      });
    });
  }

  render() {
    const { data, currentState } = this.state;
    return (
      <Widget
        height={300}
        title="New Customers by Month"
        subtitle="Amount of new customers reached each month"
        currentState={currentState}
        body={
          <LineChart
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

export default NewCustomersWidget;
