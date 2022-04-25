
import "./App.css";
import Navbar from "./navbar";
import Side_bar from "./sidebar";
import Footer from "./footer";
import { Grid } from "@mui/material";
import {useState} from "react"

export default function Cards_Page() {
  const [dropdown,setDropdown] = useState(false)
  const [dropdown2,setDropdown2] = useState(true)
  const dropDown = () => {
    setDropdown(!dropdown)
    setDropdown2(false)
}
const dropDown2 = () => {
    setDropdown2(!dropdown2)
    setDropdown(false)
}
  return (
    <>
      <div className="main_div ">
        <div className="left_container">
          <Side_bar />
        </div>
        <div className="right_container">
          <Navbar />
          <div className="container">
            <div className="card_header">
              <h2>Cards</h2>
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
            <div className="row">
              <div className="align_left col-md-6">
                <div className="card shadow mb-4">
                  <div class="card-header">
                    Default Card Example
                  </div>
                  <div class="card-body">
                    This card uses Bootstrap's default styling with no utility classes added. Global
                    styles are the only things modifying the look and feel of this default card example.
                  </div>
                </div>
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                  </div>
                  <div class="card-body">
                    The styling for this basic card example is created by using default Bootstrap
                    utility classes. By using utility classes, the style of the card component can be
                    easily modified with no need for any custom CSS!
                  </div>
                </div>
              </div>
              <div className="align_right col-md-6">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                    <div class="dropdown no-arrow show">
                      <a class="dropdown-toggle" href="##" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() =>dropDown()}>
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                      </a>
                      {dropdown?<div class="dropdown-menu dropdown-menu-right shadow animated--fade-in show"
                        aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Dropdown Header:</div>
                        <a class="dropdown-item" href="/#">Action</a>
                        <a class="dropdown-item" href="/#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/#">Something else here</a>
                      </div>:<></>}
                    </div>
                  </div>
                  <div class="card-body">
                    Dropdown menus can be placed in the card header in order to extend the functionality
                    of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                    icon in the card header can be clicked on in order to toggle a dropdown menu.
                  </div>
                </div>
                <div class="card shadow mb-4">

                  <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
                    role="button" aria-expanded="true" aria-controls="collapseCardExample" onClick ={() => dropDown2()}>
                    <h6 class="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
                  </a>

                 { dropdown2?<div class="collapse show" id="collapseCardExample">
                    <div class="card-body">
                      This is a collapsable card example using Bootstrap's built in collapse
                      functionality. <strong>Click on the card header</strong> to see the card body
                      collapse and expand!
                    </div>
                  </div> : <></>}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
