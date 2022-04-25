import "./App.css"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

export default function Component(){
    const nav = useNavigate()
    return(
        <>
            <div className="comp_div">
                <ul>
                    <li><p className="comp_text">Custom Components:</p></li>
                    <li><button className="same_props" onClick={() =>nav("/buttons")}>Buttons</button></li>
                    <li><button className="same_props" onClick={() => nav("/cards")}>Cards</button></li>
                </ul>
            </div>
        </>
    );
}