import {AuthContext} from "../Context/AuthContext";
import {useContext} from "react";
import React, {ReactNode} from "react";
import LoginPage from "../Pages/LoginPage";


function BlockAuth({children} : {children : JSX.Element}){
    return children;
}

export default BlockAuth;