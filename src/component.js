import "./App.css"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

export default function Component(){
    const [state, setState] = useState(false)
    const nav = useNavigate()
    // const Btn_page = ()=>{
    //     setState(true)
    //     nav("/",{state:state})
    // }
    return(
        <>
            <div className="comp_div">
                <ul>
                    <li><p className="comp_text">Custom Components:</p></li>
                    <li><button className="same_props" onClick={() =>nav("/",{state:false})}>Buttons</button></li>
                    <li><button className="same_props">Cards</button></li>
                </ul>
            </div>
        </>
    );
}