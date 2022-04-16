import { AuthContext } from "../Context/AuthContext";
import {useContext, useState } from "react";
import {Link} from "react-router-dom"
import InspectionCard from "../Components/InspectionCard";
import AddInspectionWindow from "../Components/AddInspectionWindow";

function InspectionsPage(): JSX.Element {

    const context = useContext(AuthContext);
    const [windowTrigger, setWindowTrigger] = useState<Boolean>(false);

    return(
        <div>
            
            <nav className="flex justify-between items-center h-10 bg-gradient-to-r from-indigo-500 to-indigo-700">
                <h1 className="mx-2 text-white">Hello, {context?.username}!</h1>
                <div className="flex justify-center items-center justify-self-end">

                    <button className="nav-button">Add Inspection</button>
                    <Link to="/account" className="nav-button">Account</Link>
                    <button className="nav-button">Logout</button>

                </div>
            </nav>
            <div className="w-screen flex flex-col justify-center items-center">
                <InspectionCard />  
            </div>

            <AddInspectionWindow windowTrigger={windowTrigger} setWindowTrigger={setWindowTrigger} />
        </div>
    )
}

export default InspectionsPage;