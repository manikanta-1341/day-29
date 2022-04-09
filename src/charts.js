import React from "react";
import { Grid } from '@mui/material'
import CanvasJSReact from "./canvasjs.react";
import "./App.css"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Chart() {
  const options_spline = {
    animationEnabled: true,
    axisX: {
      valueFormatString: "MMM",
      lineThickness: 0,
	  tickThickness: 0,
    },
    axisY: {
        maximum:40500,
        interval:10000,
        gridThickness:0.3,
        gridDashType: "dot",
        lineThickness: 0,
	    tickThickness: 0,
        prefix: "$",
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "splineArea",
        fillOpacity:0.04,
        lineThickness:2,
        lineColor:"blue",
        dataPoints: [
          { x: new Date(2017, 0), y: 1 },
          { x: new Date(2017, 1), y: 10000 },
          { x: new Date(2017, 2), y: 5000 },
          { x: new Date(2017, 3), y: 15000 },
          { x: new Date(2017, 4), y: 10000 },
          { x: new Date(2017, 5), y: 20000 },
          { x: new Date(2017, 6), y: 15000 },
          { x: new Date(2017, 7), y: 25000 },
          { x: new Date(2017, 8), y: 20000 },
          { x: new Date(2017, 9), y: 30000 },
          { x: new Date(2017, 10), y: 25000 },
          { x: new Date(2017, 11), y: 40000 },
        ],
      },
    ],
  };
  const options_donut = {
    animationEnabled: true,
    data: [{
        type: "doughnut",
        showInLegend: true,
        startAngle:270,
        radius:130,
        innerRadius:105,
        yValueFormatString: "#,###'%'",
        dataPoints: [
            { name: "Direct", y: 70,color: "RoyalBlue" },
            { name: "Social", y: 40 ,color: "#1cc88a"},
            { name: "Referral", y: 20,color: "#36b9cc" }
        ]
    }]
}
  return (
    <>
    <Grid container spacing={4}>
            <Grid item xs={8}>
                <div className="spline_chart">
        <div className="header">
          <h3>Earnings Overview</h3>
        </div>
        <hr/>
        <div className="body">
          <CanvasJSChart options={options_spline} />
        </div>
                </div>
            </Grid>
            <Grid item xs={4}>
              <div className="donut_chart">
                  <div className="header"><h4>Revenue Sources</h4></div>
                  <hr/>
                  <div className="body">
                      <CanvasJSChart options={options_donut}/>
                  </div>

              </div>
            </Grid>
    </Grid>
    </>
  );
}
