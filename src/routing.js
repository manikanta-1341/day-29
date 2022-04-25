import {BrowserRouter, Routes, Route} from "react-router-dom"
import Button_page from "./button_page";
import Cards_Page from "./cards-page"
import Color_utilities from "./color-utilities"
import Borders_utilities from "./borders"
import Animation_utilities from "./animation"
import Others_utilities from "./others"
import Login from "./login" 
import Register from "./register" 
import ForgetPassword from "./passwordreset" 
import Error_page from "./error" 
import Blank_page from "./blank-page" 
import Chart_pages from "./charts_page" 
import Tables from "./tables" 
import App from "./App"

export default function Routing() {

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    <Route path="/buttons" element={<Button_page/>}></Route>
                    <Route path="/cards" element={<Cards_Page/>}></Route>
                    <Route path="/colors" element={<Color_utilities/>}></Route>
                    <Route path="/borders" element={<Borders_utilities/>}></Route>
                    <Route path="/animation" element={<Animation_utilities/>}></Route>
                    <Route path="/others" element={<Others_utilities/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/forgetPassword" element={<ForgetPassword/>}></Route>
                    <Route path="/error" element={<Error_page/>}></Route>
                    <Route path="/blank" element={<Blank_page/>}></Route>
                    <Route path="/charts" element={<Chart_pages/>}></Route>
                    <Route path="/tables" element={<Tables/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}