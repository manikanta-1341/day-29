import React from 'react';
import Dashboard from './dashboard';
import Component from './component';
import Utilities from './utilites';
import {useNavigate} from "react-router-dom"
import './App.css'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useState } from 'react'
export default function Side_bar (){
    let [comp_display,setComp_display] = useState(false);
    let [utility_display,setUtility_display] = useState(false);
    const nav = useNavigate()
    let Comp_func=()=>{
        setUtility_display(false)
        setComp_display(!comp_display);
    }
    let Utility_display = () =>{
        setComp_display(false);
        setUtility_display(!utility_display)
    }
    return (
        <div className="side_bar_div">
            <ul type="none">
                <li className="sb_admin_li"><span className="sb_admin_face"><TagFacesIcon fontSize="large"/></span> &nbsp; &nbsp;<span className="sb_admin_text"> SB ADMIN &nbsp;<sup>2</sup></span></li>
                <hr/>
                <li className="dashboard_text_li"><button className="dashboard_text" onClick={() => nav("/",{state:true})}>Dashboard</button></li>
                <hr/>
                <li className="interface_text_li"><span className="interface_text" >INTERFACE</span></li>
                <li><button className="same_props" onClick={() =>Comp_func()}>Components</button></li>
                {comp_display?<Component/>:<></>}
                <li><button className="same_props" onClick={() =>Utility_display()}>Utilites</button></li>
                {utility_display?<Utilities/>:<></>}
                <hr/>
                <li><span className="addons_text">ADDONS</span></li>
                <li><button className="same_props">Pages</button></li>
                <li><button className="same_props">Charts</button></li>
                <li><button className="same_props">Tables</button></li>
            </ul>
        </div>
    );
}