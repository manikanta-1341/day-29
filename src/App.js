import React , {useState} from 'react'
import {useLocation} from "react-router-dom"
import Side_bar from './sidebar';
import Navbar from './navbar'
import Dashboard from './dashboard';
import Button_page from "./button_page"
export default function App(){
    const location = useLocation();
    console.log("initial::",location.state)
    const [state, setState] = useState(location.state)
    // if(location.state===true){
    //     setState(location.state)
    // }
    // else{
    //     setState(!location.state) 
    // }
    return(
        <>
        <div className="main_div">
            <div className="left_container">
            <Side_bar/>
            </div>
            <div className="right_container">
            <Navbar/>
            {state?<Dashboard/>:<Button_page/>}
            </div>
        </div>
            
        </>
    );
}