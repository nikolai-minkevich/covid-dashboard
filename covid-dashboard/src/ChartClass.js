import ChartJS from "chart.js";
import create from "./create";
class ChartClass {
  generateHost() {
    const hostForChart = document.createElement("canvas");
    hostForChart.classList.add("hostForChart");
    document.querySelector(".mainContent_container").append(hostForChart);
    /*
    const hostForChart = create(
      "canvas",
      "hostForChart",
      null,
      ["id", "chart"],
      ["height", "200px"],
      ["width", "500px"]
    );
    document.querySelector(".mainContent_container").append(hostForChart);*/
  }
  generateLayout() {
    let ctx = document.querySelector("canvas");
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", '2', '3', '4', '5'],
        datasets: [
          {
            data:[12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
          },
        ],
      },
      options: {
        title:{
          display: true,
          text: "Results"
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
}
export default ChartClass;
