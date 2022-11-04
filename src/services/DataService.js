import { backgroundColor } from "../components/widget/colorPallete";
import { getRandomArbitrary } from "./helpers";

const RESPONSE_TIME = 1500;

let activityRatio = []
let postureRatio = []
let activityData = []
let sitting = []
let standing = []
let walking = []

export const getProcessedData = () => {
  fetch('http://127.0.0.1:5000/processData',{
    'methods':'GET',
    headers : {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
    },
  })
  .then(response => response.json())
  .then(response => {
    activityRatio = JSON.parse(response.activityRatio)
    postureRatio = JSON.parse(response.postureRatio)
    activityData = JSON.parse(response.activityData)
    sitting = activityData[0]
    standing = activityData[1]
    walking = activityData[2]
    console.log(activityRatio)
  })
  .catch(error => console.log(error))
}

export const getMovement = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(sitting)
      resolve({
        labels: [
          "12AM",
          "1AM",
          "2AM",
          "3AM",
          "4AM",
          "5AM",
          "6AM",
          "7AM",
          "8AM",
          "9AM",
          "10AM",
          "11AM",
          "12PM",
          "1PM",
          "2PM",
          "3PM",
          "4PM",
          "5PM",
          "6PM",
          "7PM",
          "8PM",
          "9PM",
          "10PM",
          "11PM",
        ],
        datasets: [
          {
            label: "Sitting",
            backgroundColor: backgroundColor[2],
            data: sitting
          },
          {
            label: "Standing",
            backgroundColor: backgroundColor[3],
            data: standing
          },
          {
            label: "Walking",
            backgroundColor: backgroundColor[4],
            data: walking
          }
        ]
      });
    }, RESPONSE_TIME);
  });

export const getActivityData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        datasets: [
          
          {
            label: "Activity",
            backgroundColor: backgroundColor,
            data: activityRatio
          }
          
        ],
        labels: ["Sitting", "Standing", "Walking"]
      });
    }, RESPONSE_TIME);
  });

  export const getPostureData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        datasets: [
          
          {
            label: "Posture",
            backgroundColor: backgroundColor,
            data: postureRatio
          }
          
        ],
        labels: ["Good Posture", "Bad Posture"]
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
