import React, {useState} from 'react'
import {Container} from '@mui/material'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './App.css'
export default function Navbar (){
    const[menu_open, setMenu_open] = useState(false)
    return (
        <>
        <div className="navbar">
            <div className="search_bar">
                <input type="search" name="search" placeholder="Search for..."/>
            </div>
            <div className="badge">
                <ul>
                    <li><Badge badgeContent="3+" color="error">
                        <NotificationsIcon color="action" />
                    </Badge></li>
                    <li><Badge badgeContent={7} color="error">
                        <MailIcon color="action" />
                    </Badge></li>
                    <li><div className="vertical_border"></div></li>
                    <li className="profile_menu_li">
                        <Button><span class="profile_name">Douglas McGee</span><AccountCircleIcon fontSize="large" color="action"/></Button>
                    </li>
                </ul>
            </div>
        </div>
        </> 

    );
}