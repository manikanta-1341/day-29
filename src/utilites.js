import "./App.css"
import "./css/sb-admin-2.css"
import "./css/sb-admin-2.min.css"
import {useNavigate} from "react-router-dom"

export default function Utilities(){
    const nav = useNavigate() 
    return(
    <>
        <div className="utility_div">
        <ul>
            <li><p className="utility_text">CUSTOM UTILITIES:</p></li>
            <li><button className="same_props" onClick={() =>nav("/colors")}>Colors</button></li>
            <li><button className="same_props" onClick={() =>nav("/borders")}>Borders</button></li>
            <li><button className="same_props" onClick={() =>nav("/animation")}>Animation</button></li>
            <li><button className="same_props" onClick={() =>nav("/others")}>Others</button></li>
        </ul>
        </div>
    </>
    );
}