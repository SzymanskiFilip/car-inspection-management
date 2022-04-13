import { AuthContext } from "../Context/AuthContext";
import {useContext } from "react";

function InspectionsPage(): JSX.Element {

    const context = useContext(AuthContext);

    return(
        <div>
            <nav className="flex justify-between items-center h-10 bg-gradient-to-r from-indigo-500 to-indigo-700">
                <h1 className="mx-2 text-white">Hello, {context?.username}!</h1>
                <div className="flex justify-center items-center justify-self-end">

                    <button className="nav-button">Add Inspection</button>

                    <button className="nav-button">Account</button>
                    <button className="nav-button">Logout</button>
                </div>
            </nav>
        </div>
    )
}

export default InspectionsPage;