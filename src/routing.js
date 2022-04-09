import {BrowserRouter, Routes, Route} from "react-router-dom"
import Button_page from "./button_page";
import App from "./App"
export default function Routing() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    {/* <Route path="/buttons" element={<Button_page/>}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}