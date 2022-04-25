import "./App.css"
import "./css/sb-admin-2.css"
import "./css/sb-admin-2.min.css"
import { useNavigate } from "react-router-dom"

export default function Pages() {
    const nav = useNavigate()
    return (
        <>
            <div id="collapsePages" class="pages_div collapse show " aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-4 px-4 mb-auto collapse-inner rounded d-flex flex-column ">
                    <h6 class="collapse-header mb-2">Login Screens:</h6>
                    <a class="collapse-item" href="##" onClick ={() => nav('/login')}>Login</a>
                    <a class="collapse-item" href="##" onClick ={() => nav('/register')}>Register</a>
                    <a class="collapse-item" href="##" onClick ={() => nav('/forgetPassword')}>Forgot Password</a>
                    <div class="collapse-divider mb-2 margin-top: auto"></div>
                    <h6 class="collapse-header mb-2 ">Other Pages:</h6>
                    <a class="collapse-item" href="##" onClick ={() => nav('/error')}>404 Page</a>
                    <a class="collapse-item" href="##" onClick ={() => nav('/blank')}>Blank Page</a>
                </div>
            </div>
        </>
    );
}