import { useContext, useState } from "react";
import { Link, Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Cookie from "js-cookie";

function LoginComponent(){

    const context = useContext(AuthContext);

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<Boolean>(false);
    const navigate: NavigateFunction = useNavigate();

    async function login(){
        
        let payload = {
            "username": username,
            "password": password
        };

        let config: RequestInit = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }

        await fetch("http://localhost:8080/login", config)
            .then((res) => {
            
                console.log(res)
                let role: string;
                let username: string;

                if(res.status === 200){
                    console.log("LOGGED IN!")
                    role = Cookie.get("ROLE")!;
                    username = Cookie.get("USERNAME")!;

                    if(role === "client"){
                        context?.setAuthenticated(true);
                        context?.setRole("client");
                        context?.setUsername(username);
                        navigate("/inspections");
                    }

                    if(role === "workshop"){
                        context?.setAuthenticated(true);
                        context?.setRole("workshop");
                        context?.setUsername(username);
                        navigate("/dashboard");
                    }
                }
            })
    }

    return(
        //TODO: Refactor code, wrap these classes in own css class
        <div className="flex flex-col bg-sky-400 w-80 h-96 max-w-xs max-h-96 rounded py-3 px-8">
            <h1 className="text-center m-2 font-bold font-body text-xl text-white">CAR-INSPECTION</h1>

            <input
            className="input"
            type="text" placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            />

            <input
            className="input"
            type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center justify-start text-xs text-stone-900">
                <input type="checkbox"
                onChange={(e) => setRememberMe(e.target.checked)}
                />
                <p>Remember Me</p>
            </div>

            <button className="login-button"onClick={login}>
            LOGIN
            </button>
            

            <Link to="/register" className=" text-xs self-center transition duration-150 hover:text-stone-800">
                Don't have an account yet?
                Create one here!
            </Link>
        </div>
    )
}

export default LoginComponent;