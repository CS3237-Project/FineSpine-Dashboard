import React from "react";
import { Widget, LineChart } from "../../components";
import { getStockPrice } from "../../services/DataService";
import { backgroundColor } from "../../components/widget/colorPallete";

class StockPriceWidget extends React.Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: "Current Stock Price",
          backgroundColor: backgroundColor[2],
          data: []
        }
      ]
    },
    currentStockPrice: null
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const latestStockPrice = getStockPrice();
      const updatedData = this.getUpdatedData(latestStockPrice);
      console.log(updatedData);
      this.setState({
        data: updatedData,
        currentStockPrice: `$${latestStockPrice.price}`
      });
    }, 1000);
  }

  getUpdatedData = latest => {
    const { data } = this.state;
    return {
      ...data,
      labels: [latest.time, ...data.labels].filter((i, idx) => idx < 10),
      datasets: [
        {
          ...data.datasets[0],
          data: [latest.price, ...data.datasets[0].data].filter(
            (i, idx) => idx < 10
          )
        }
      ]
    };
  };

  render() {
    const { data, currentStockPrice } = this.state;
    return (
      <Widget
        height={300}
        title="Current Stock Price"
        subtitle="Up to date feed of current stock price"
        badgeText={currentStockPrice}
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

export default StockPriceWidget;
