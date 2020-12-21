import ChartJS from "chart.js";
import create from "./create";
import Slider from "./Slider";
class ChartClass {
  constructor(){
    this.chosenItem = 0;
    this.chartData = null;
    this.labels =null;
  }
  createData(){
    this.demoListItems = [
      "total cases",
      "total deaths",
      "total recovered",
      "total cases per 100000",
      "total deaths per 100000",
      "total recovered per 100000",
      "today cases",
      "today deaths",
      "today recovered",
      "today cases per 100000",
      "today deaths per 100000",
      "today recovered per 100000",
    ];
    //data временный массив, пока не получила api
    const data = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
   // this.labels = [];
    this.chartData = [];
    this.months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
/*
    for (let i = 0; i < data.length; i = i + 5) {
        let d = new Date(data[i]['Date']);
        labels.push(d.getDate() + " " + months[d.getMonth()]);
        chartData.push(data[i]['Cases']);
    }*/
  }
  generateHost() {
    const hostForChart = document.createElement("canvas");
    hostForChart.classList.add("hostForChart");
    console.log("this.demoListItems", this.demoListItems);
    const chartSlider = new Slider(
      `${this.demoListItems[this.chosenItem]}`,
      "chartClass__left",
      "chartClass__right",
      "chartClass__nameOfItem"
    );

    const chartContainer = create("div", "chart_container", [
      hostForChart,
      chartSlider,
    ]);
    document.querySelector(".chartClassСell").append(chartContainer);
  }
  generateLayout() {
    let ctx = document.querySelector("canvas");
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: this.months,
        datasets: [
          {
            data: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Results",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 10000,
              },
            },
          ],
        },
      },
    });
  }
  setupListeners() {
    document
      .querySelector(".chartClass__left")
      .addEventListener("click", () => {
        if (this.choisenItem === 0) {
          this.changeChosenItem(this.demoListItems.length - 1);
        } else {
          this.changeChosenItem(this.choisenItem - 1);
        }
      });
    document
      .querySelector(".chartClass__right")
      .addEventListener("click", () => {
        if (this.choisenItem === this.demoListItems.length - 1) {
          this.changeChosenItem(0);
        } else {
          this.changeChosenItem(this.choisenItem + 1);
        }
      });
  }
}
export default ChartClass;
