// sourced from https://plotly.com/javascript/gauge-charts/
// bonus deploy a gauge chart

// var data = [
// 	{
// 		domain: { x: [0, 1], y: [0, 1] },
// 		value: 270,
// 		title: { text: "Speed" },
// 		type: "indicator",
// 		mode: "gauge+number"
// 	}
// ];

// var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
// Plotly.newPlot('myDiv', data, layout);

// var data = [
//     {
//       domain: { x: [0, 1], y: [0, 1] },
//       value: 450,
//       title: { text: "Speed" },
//       type: "indicator",
//       mode: "gauge+number+delta",
//       delta: { reference: 380 },
//       gauge: {
//         axis: { range: [null, 500] },
//         steps: [
//           { range: [0, 250], color: "lightgray" },
//           { range: [250, 400], color: "gray" }
//         ],
//         threshold: {
//           line: { color: "red", width: 4 },
//           thickness: 0.75,
//           value: 490
//         }
//       }
//     }
//   ];
  
//   var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
//   Plotly.newPlot('myDiv', data, layout);