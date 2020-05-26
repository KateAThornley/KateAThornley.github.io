var ctx = document.getElementById("myChart");

ctx.onclick = function (evt) {
  var activePoints = myChart.getElementsAtEvent(evt);
  console.log(activePoints[0]._index);
  var contentTitle = myChart[activePoints[0]._index - 1].label;
  console.log(contentTitle);
};

var myChart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: ["Scatter Dataset"],
        data: [
          {
            // Label for the tooltip
            label: "test",
            // Value for the tooltip
            value: "string",
            x: 5,
            y: 0,
          },
          {
            // Label for the tooltip
            label: "test",
            // Value for the tooltip
            value: "string",
            x: 0,
            y: 10,
          },
          {
            // Label for the tooltip
            label: "test",
            // Value for the tooltip
            value: "string",
            x: 10,
            y: 5,
          },
        ],
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
        },
      ],
    },
  },
});
