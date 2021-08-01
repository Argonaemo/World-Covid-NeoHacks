const social = document.querySelector("#social").getContext("2d");

labels = ["2019", "2020", "2021", "2022"];
data = {
  labels: labels,
  datasets: [
    {
      label: "World",
      data: [0, -5.9, -3.2, -1.8],
      borderColor: "blue",
      yAxisID: "y",
    },
    {
      label: "Advanced Economics",
      data: [0, -6.1, -2.5, -0.1],
      borderColor: "yellow",
      yAxisID: "y1",
    },
  ],
};
config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Impact on Socail",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  },
};
var myChart = new Chart(social, config);
