import "./App.css";
import Navbar from "./navbar";
import Side_bar from "./sidebar";
import Footer from "./footer";
import { useNavigate } from 'react-router-dom'
export default function Error() {
    const nav = useNavigate()
    return (
        <>
            <div className="main_div ">
                <div className="left_container">
                    <Side_bar />
                </div>
                <div className="right_container">
                    <Navbar />
                    <div class="error_div container-fluid">
                        <div class="text-center">
                            <div class="error mx-auto" data-text="404">404</div>
                            <p class="lead text-gray-800 mb-5">Page Not Found</p>
                            <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                            <a href="##" onClick={() => nav('/')}>&larr; Back to Dashboard</a>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}