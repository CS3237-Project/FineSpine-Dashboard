import { backgroundColor } from "../components/widget/colorPallete";
import { getRandomArbitrary } from "./helpers";

const RESPONSE_TIME = 1500;

export const getMonthlyRevenue = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Monthly Revenue",
            backgroundColor: backgroundColor[0],
            data: [10, 14, 49, 22, 49, 15, 37, 90, 68, 10, 39, 100]
          }
        ]
      });
    }, RESPONSE_TIME);
  });

export const getRevenueBreakdown = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        datasets: [
          {
            backgroundColor: backgroundColor,
            data: [10, 14, 49, 22]
          }
        ],
        labels: ["Sales", "Commission", "Dividends", "Interest"]
      });
    }, RESPONSE_TIME);
  });

export const getNewCustomers = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Monthly Revenue",
            backgroundColor: backgroundColor[1],
            data: [10, 14, 49, 22, 49, 15, 37, 90, 68, 10, 39, 100]
          }
        ]
      });
    }, RESPONSE_TIME);
  });

export const getStockPrice = () => {
  const now = new Date();
  return {
    price: getRandomArbitrary(30, 33).toFixed(2),
    time: now.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true
    })
  };
};
