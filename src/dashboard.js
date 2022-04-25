import React from "react";
import "./App.css";
import { Grid, Button} from "@mui/material";
import Colors from "./colors";
import Devlopment from "./devlopment";
import Footer from "./footer";
import Chart from "./charts";
export default function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="dashboard_header">
          <h2>Dashboard</h2>
          <Button>Generate Report</Button>
        </div>
        <div className="cards">
          <Grid container spacing={4} columns={16}>
            <Grid item xs={4}>
              <div className=" card card_1">
                <p>EARNINGS (MONTHLY)</p>
                <span>$40,000</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className=" card card_2">
                <p>EARNINGS (ANNUAL)</p>
                <span>$215,000</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className=" card card_3">
                <p>TASKS</p>
                <div className="card_3_flex">
                  <span>50%</span>
                  <div class="progress card_progress">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="card card_4">
                <p>PENDING REQUESTS</p>
                <span>18</span>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="charts">
          <Chart/>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div className="project_container">
              <div className="project">
                <h4 className="projects_text">Projects</h4>
                <hr />
                <div className=" bar server_migration">
                  <span>Server Migration</span>
                  <span className="align-right">20%</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="bar Sales_Tracking">
                  <span>Sales Tracking</span>
                  <span className="align-right">40%</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="bar Customer-Database">
                  <span>Customer Database</span>
                  <span className="align-right">60%</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="bar Payout-Details">
                  <span>Payout Details</span>
                  <span className="align-right">80%</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="bar Account-setup">
                  <span>Account Setup</span>
                  <span className="align-right">Complete!</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <Colors />
          </Grid>
          <Grid item xs={6}>
            <div className="Illustrations_Devlopment_div">
              <div className="Illustrations_container">
                <h4 className="Illustrations_text">Illustrations</h4>
                <hr />
                <img
                  src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                  alt="img"
                />
                <p>
                  Add some quality, svg illustrations to your project courtesy
                  of
                  <span className="undraw">unDraw</span>, a constantly updated
                  collection of beautiful svg images that you can use completely
                  free and without attribution!
                </p>
                <button className="illustrations_btn">
                  Browse Illustrations on unDraw →
                </button>
              </div>
              <div >
              <Devlopment/>
              </div>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  );
}
