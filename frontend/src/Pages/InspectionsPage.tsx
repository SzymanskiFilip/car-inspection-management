import { AuthContext } from "../Context/AuthContext";
import {useContext } from "react";

function InspectionsPage(): JSX.Element {

    const context = useContext(AuthContext);

    return(
        <div>
            <nav>
                Hello, {context?.username}
            </nav>
        </div>
    )
}

export default InspectionsPage;