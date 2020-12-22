import Chart from "chart.js";
import create from "./create";
import Slider from "./Slider";
class ChartClass {
  constructor() {
    this.chosenItem = 0;
    this.chartData = null;
    this.labels = null;
  }
  getPopulation(data) {
    this.population = data.population;
  }
  createData(data) {
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
    const labelsTotalCases = Object.keys(data["cases"]);
    const labelsTotalDeaths = Object.keys(data["deaths"]);
    const labelsTotalRecovered = Object.keys(data["recovered"]);

    const chartDataTotalCases = Object.values(data["cases"]);
    const chartDataTotalDeaths = Object.values(data["deaths"]);
    const chartDataTotalRecovered = Object.values(data["recovered"]);
    const chartDataTotalCasesPer100000 = chartDataTotalCases.map((item) => {
      console.log(this.population, "this.population");
      console.log(item, "item");
      console.log(Math.round((item * 100000) / this.population));
      let newItem = Math.round((item * 100000) / this.population);
      return newItem
      //return /*Math.round(*/ (item * 100000) / this.population;
    });

    console.log("chartDataTotalCasesPer100000", chartDataTotalCasesPer100000);

    this.chartData = [
      chartDataTotalCases,
      chartDataTotalDeaths,
      chartDataTotalRecovered,
    ];
    this.labels = [
      labelsTotalCases,
      labelsTotalDeaths,
      labelsTotalRecovered,
      labelsTotalCases,
      labelsTotalDeaths,
      labelsTotalRecovered,
      labelsTotalCases,
      labelsTotalDeaths,
      labelsTotalRecovered,
      labelsTotalCases,
      labelsTotalDeaths,
      labelsTotalRecovered,
    ];
    console.log("this.chartData", this.chartData);
  }
  generateHost() {
    const hostForChart = document.createElement("canvas");
    hostForChart.height = 300;
    hostForChart.width = 400;
    hostForChart.classList.add("hostForChart");
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
    this.setupListeners();
  }
  generateLayout() {
    let ctx = document.querySelector("canvas").getContext("2d");
    this.chartConfig = {
      type: "line",
      data: {
        labels: this.labels[this.chosenItem],
        datasets: [
          {
            data: this.chartData[this.chosenItem],
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
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                //stepSize: 10000,
              },
            },
          ],
        },
      },
    };
    this.chartClass = new Chart(ctx, this.chartConfig);
    return this.chartClass;
  }
  setupListeners() {
    document
      .querySelector(".chartClass__left")
      .addEventListener("click", () => {
        console.log("skjdflskdjf");
        if (this.chosenItem === 0) {
          this.changeChosenItem(this.demoListItems.length - 1);
        } else {
          this.changeChosenItem(this.chosenItem - 1);
        }
      });
    document
      .querySelector(".chartClass__right")
      .addEventListener("click", () => {
        console.log("this", this);
        if (this.chosenItem === this.demoListItems.length - 1) {
          this.changeChosenItem(0);
        } else {
          this.changeChosenItem(this.chosenItem + 1);
        }
      });
  }
  changeChosenItem(number) {
    this.chosenItem = number;
    this.changeView();
  }

  changeView() {
    document.querySelector(".chartClass__nameOfItem").textContent = `${
      this.demoListItems[this.chosenItem]
    }`;
    const newUser = [
      {
        data: this.chartData[this.chosenItem],
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
    ];

    this.chartConfig.data.datasets[0].data = this.chartData[this.chosenItem];

    this.chartConfig.data.labels = this.labels[this.chosenItem];
    this.chartClass.update();
  }
}
export default ChartClass;
