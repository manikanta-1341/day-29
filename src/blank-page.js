import "./App.css";
import Navbar from "./navbar";
import Side_bar from "./sidebar";
import Footer from "./footer";
import "./css/sb-admin-2.css"
import "./css/sb-admin-2.min.css"
// import { Grid } from "@mui/material";

export default function Error() {
    return (
        <>
            <div className="main_div ">
                <div className="left_container">
                    <Side_bar />
                </div>
                <div className="right_container">
                    <Navbar />
                    <div class=" blank_div container-fluid ">

                        <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

                    </div>
                    <Footer />
                    
                </div>
            </div>
        </>
    );
}