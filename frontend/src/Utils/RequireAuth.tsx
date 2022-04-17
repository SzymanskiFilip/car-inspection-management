import { AuthContext } from "../Context/AuthContext";
import {useContext} from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({children, roleToPermit} : {children : JSX.Element, roleToPermit: string}): JSX.Element {

    const context = useContext(AuthContext);

    if(context?.authenticated){
        console.log(roleToPermit)
        if(context?.role === roleToPermit){
            return(children)
        }
    }

    return(<div>NO ACCESS TO THIS PAGE :(</div>)
    
}

export default RequireAuth;