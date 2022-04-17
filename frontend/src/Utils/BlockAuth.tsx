import {AuthContext} from "../Context/AuthContext";
import {useContext} from "react";
import { Navigate } from "react-router-dom";
import React, {FC} from "react";
import LoginPage from "../Pages/LoginPage";
import { AuthContextInterface } from "../Interfaces/AuthContextInterface";


function BlockAuth({children} : {children : JSX.Element}) : JSX.Element{

    const context = useContext(AuthContext);
    console.log(context?.authenticated);

    if(context?.authenticated === true && context.role === "user"){
        return (
            <Navigate to="/inspections"/>
        )
    } else if (context?.authenticated === true && context.role === "admin"){
        return(
            <Navigate to="/dashboard"/>
        )
    } else {
        return (
            children
        )
    }
}

export default BlockAuth;