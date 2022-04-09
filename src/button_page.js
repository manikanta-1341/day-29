// import {useLocation} from "react-router-dom"
import './App.css'
import Navbar from './navbar'
import Side_bar from './sidebar'
export default function Button_page(){
    // const location = useLocation();
    // console.log(location)
    return(
        <>
           {/* <div className="main_div">
            <div className="left_container">
            <Side_bar/>
            </div>
            <div className="right_container">
            <Navbar/> */}
            <div class="card">
                <div class="card-body">
                    This is some text within a card body.
                </div>
            </div>
            {/* </div> */}
        {/* </div> */}
           
        </>
    );
}