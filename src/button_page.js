// import {useLocation} from "react-router-dom"
import "./App.css";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import Footer from "./footer";
export default function Button_page() {
  // const location = useLocation();
  // console.log(location)
  return (
    <>
      <div className="main_div ">
        <div className="left_container">
          <SideBar />
        </div>
        <div className="right_container">
          <Navbar />
          <div className="container">
            <div className="btn_header">
              <h2>Buttons</h2>
            </div>
            <div className="row">
              <div className="align_left col-md-6">
                <div className="circle_brand_buttons">
                  <div className="card circle_brand_buttons">
                    <h6 className="card-title">Circle Buttons</h6>
                    <div class="card-body ">
                      <p>
                        Use Font Awesome Icons (included with this theme
                        package) along with the circle buttons as shown in the
                        examples below!
                      </p>
                      <div class="circle-buttons_n ">
                        <h6>.btn-circle</h6>
                        <a href="/" class="btn btn-primary btn-circle">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="/" class="btn btn-success btn-circle">
                          <i class="fas fa-check"></i>
                        </a>
                        <a href="/" class="btn btn-info btn-circle">
                          <i class="fas fa-info-circle"></i>
                        </a>
                        <a href="/" class="btn btn-warning btn-circle">
                          <i class="fas fa-exclamation-triangle"></i>
                        </a>
                        <a href="/" class="btn btn-danger btn-circle">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </div>
                      <div className="circle-buttons_s">
                        <h6>.btn-circle .btn-sm</h6>
                        <a href="/" class="btn btn-primary btn-circle btn-sm">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="/" class="btn btn-success btn-circle btn-sm">
                          <i class="fas fa-check"></i>
                        </a>
                        <a href="/" class="btn btn-info btn-circle btn-sm">
                          <i class="fas fa-info-circle"></i>
                        </a>
                        <a href="/" class="btn btn-warning btn-circle btn-sm">
                          <i class="fas fa-exclamation-triangle"></i>
                        </a>
                        <a href="/" class="btn btn-danger btn-circle btn-sm">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </div>
                      <div className="circle-buttons_l">
                        <h6>.btn-circle .btn-lg</h6>
                        <a href="/" class="btn btn-primary btn-circle btn-lg">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="/" class="btn btn-success btn-circle btn-lg">
                          <i class="fas fa-check"></i>
                        </a>
                        <a href="/" class="btn btn-info btn-circle btn-lg">
                          <i class="fas fa-info-circle"></i>
                        </a>
                        <a href="/" class="btn btn-warning btn-circle btn-lg">
                          <i class="fas fa-exclamation-triangle"></i>
                        </a>
                        <a href="/" class="btn btn-danger btn-circle btn-lg">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brand-buttons">
                  <div className="card">
                    <div className="card-title">
                      <h6>Brand Buttons</h6>
                    </div>
                    <hr />
                    <div className="card-content">
                      <p>
                        Google and Facebook buttons are available featuring each
                        company's respective brand color. They are used on the
                        user login and registration pages.
                        <br />
                        You can create more custom buttons by adding a new color
                        variable in the
                        <span>_variables.scss</span> file and then using the
                        Bootstrap button variant mixin to create a new style, as
                        demonstrated in the
                        <span>_buttons.scss</span> file.
                      </p>
                      <div className="google_fb_btns">
                        <button className="btn-google brand-btn"><i class="fab fa-google fa-fw"></i>&nbsp;.btn-google</button>
                        <button className="btn-facebook brand-btn"><i class="fab fa-facebook-f fa-fw"></i>&nbsp;.btn-facebook</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="align_right col-md-6">
                <div className="card">
                  <div className="card-title">
                    <h6>Split Buttons with Icon</h6>
                  </div>
                  <div className="card-body">
                    <p>
                      Works with any button colors, just use the{" "}
                      <span>.btn-icon-split</span>
                      class and the markup in the examples below. The examples
                      below also use the <span>.text-white-50</span> helper
                      class on the icons for additional styling, but it is not
                      required.
                    </p>
                    <div className="split_btns">
                      <button className="primary col-md-6 ">
                        <span className="icon">
                          <i class="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Primary</span>
                      </button>
                      <button className="success col-md-6 ">
                        <span className="icon">
                          <i class="fas fa-check"></i>
                        </span>
                        <span className="text">Split Button Success</span>
                      </button>
                      <button className="info col-md-5 ">
                        <span className="icon">
                          <i class="fas fa-info-circle"></i>
                        </span>
                        <span className="text">Split Button Info</span>
                      </button>
                      <button className="warning col-md-6 ">
                        <span className="icon">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span>
                        <span className="text">Split Button Warning</span>
                      </button>
                      <button className="danger col-md-6 ">
                        <span className="icon">
                          <i class="fa-solid fa-trash"></i>
                        </span>
                        <span className="text"> Split Button Danger</span>
                      </button>
                      <button className="secondary col-md-6 ">
                        <span className="icon">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                        <span className="text">Split Button Secondary</span>
                      </button>
                      <button className="light col-md-5 ">
                        <span className="icon">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                        <span className="text">Split Button Light</span>
                      </button>
                    </div>
                    <p>Also works with small and large button classes!</p>
                    <div className="split_btns_sm_lg">
                      <button className="primary btn-sm .btn-icon-split col-md-6">
                        <span className="icon">
                          <i class="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Primary</span>
                      </button>
                      <button className="primary btn-lg col-md-7">
                        <span className="icon">
                          <i class="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Primary</span>
                      </button>
                    </div>
                  </div>
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
