import React from 'react';
import Navbar from './navbar';
import Component from './component';
import Utilities from './utilites';
import Pages from './pages';
import { useNavigate } from "react-router-dom"
import './App.css'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useState } from 'react'
export default function SideBar() {
    let [comp_display, setComp_display] = useState(false);
    let [utility_display, setUtility_display] = useState(false);
    let [pages_display, setPages_display] = useState(false);
    let [arrow_display, setArrow_display] = useState(true);
    // let [tables_display, setTable_display] = useState(false);
    const nav = useNavigate()

    let Comp_func = () => {
        setUtility_display(false)
        setPages_display(false)
        setComp_display(!comp_display);
    }
    let Utility_display = () => {
        setComp_display(false);
        setPages_display(false)
        setUtility_display(!utility_display)
    }
    let Pages_display = () => {
        setComp_display(false);
        setUtility_display(false)
        setPages_display(!pages_display)
    }
    const arrow_Toggle = () => {
        setArrow_display(!arrow_display)

    }
    return (
        <>
            {arrow_display ?
                
                <div className="side_bar_div">
                    <ul type="none">
                        <li className="sb_admin_li"><span className="sb_admin_face"><TagFacesIcon fontSize="large" /></span> &nbsp; &nbsp;<span className="sb_admin_text text-light"> SB ADMIN &nbsp;<sup>2</sup></span></li>
                        <hr />
                        <li className="dashboard_text_li"><button className="dashboard_text" onClick={() => nav("/", { state: true })}>
                            <i class="fas fa-fw fa-tachometer-alt text-light"></i>
                            Dashboard</button></li>
                        <hr />
                        <li className="interface_text_li"><span className="interface_text" >INTERFACE</span></li>
                        <li><button className="same_props" onClick={() => Comp_func()}>
                            <i class="fas fa-fw fa-cog "></i>
                            Components</button></li>
                        {comp_display ? <Component /> : <></>}
                        <li><button className="same_props" onClick={() => Utility_display()}>
                            <i class="fas fa-fw fa-wrench"></i>
                            Utilites</button></li>
                        {utility_display ? <Utilities /> : <></>}
                        <hr />
                        <li><span className="addons_text">ADDONS</span></li>
                        <li><button className="same_props" onClick={() => Pages_display()}>
                            <i class="fas fa-fw fa-folder"></i>
                            Pages</button></li>
                        {pages_display ? <Pages /> : <></>}
                        <li><button className="same_props" onClick={() => nav('/charts')}><i class="fas fa-fw fa-chart-area"></i>Charts</button></li>
                        <li><button className="same_props" onClick={() => nav('/tables')}><i class="fas fa-fw fa-table"></i>Tables</button></li>
                        <hr />
                        <li><button class=" arrow_btn rounded-circle border-0" id="sidebarToggle" onClick={() => arrow_Toggle()}></button></li>
                    </ul>
                </div>

                
                :
                <div className="mini_side_bar_div">
                    <ul type="none">
                        <li className="sb_admin_li"><span className="sb_admin_face"><TagFacesIcon fontSize="large" /></span> &nbsp; &nbsp;</li>
                        <hr />
                        <li className="dashboard_text_li"><button className="dashboard_text" onClick={() => nav("/", { state: true })}>
                            <i class="fas fa-fw fa-tachometer-alt text-light"></i>
                            Dashboard</button></li>
                        <hr />
                        <li className="interface_text_li"><span className="interface_text" >INTERFACE</span></li>
                        <li><button className="same_props" onClick={() => Comp_func()}>
                            <i class="fas fa-fw fa-cog "></i>
                            Components</button></li>
                        {comp_display ? <Component /> : <></>}
                        <li><button className="same_props" onClick={() => Utility_display()}>
                            <i class="fas fa-fw fa-wrench"></i>
                            Utilites</button></li>
                        {utility_display ? <Utilities /> : <></>}
                        <hr />
                        <li><span className="addons_text">ADDONS</span></li>
                        <li><button className="same_props" onClick={() => Pages_display()}>
                            <i class="fas fa-fw fa-folder"></i>
                            Pages</button></li>
                        {pages_display ? <Pages /> : <></>}
                        <li><button className="same_props" onClick={() => nav('/charts')}><i class="fas fa-fw fa-chart-area"></i>Charts</button></li>
                        <li><button className="same_props" onClick={() => nav('/tables')}><i class="fas fa-fw fa-table"></i>Tables</button></li>
                        <hr />
                        <li><button class=" arrow_btn rounded-circle border-0" id="sidebarToggle" onClick={() => arrow_Toggle()}></button></li>
                    </ul>
                </div>
            }
        </>
    );
}