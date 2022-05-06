import {Link} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import {useContext} from "react";
import DashboardTable from "../Components/DashboardTable";
import { logoutFunction } from "../Utils/LogoutFuntcion";
import {useNavigate} from "react-router-dom";

function DashboardPage(): JSX.Element {

    const context = useContext(AuthContext);
    const navigate = useNavigate();

    function logout(){
        navigate("/");
        logoutFunction();
        context?.setAuthenticated(false);
    }

    return(
        <div>
            <nav className="flex justify-between items-center h-10 bg-gradient-to-r from-indigo-500 to-indigo-700">
                <h1 className="mx-2 text-white">Hello, {context?.username}!</h1>
                <div className="flex justify-center items-center justify-self-end">

                    {/* na maila wysyła klientowi zaproszenie link */}
                    <button className="nav-button">Generate Key</button>
                    <Link to="/account" className="nav-button">Account</Link>
                    <button className="nav-button" onClick={logout}>Logout</button>

                </div>
            </nav>

            <div className="w-full h-full flex flex-row justify-center items-center my-5">
                <DashboardTable/>
            </div>

        </div>
    )
}

export default DashboardPage;