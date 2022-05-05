import { Navigate} from "react-router-dom"
import Cookie from "js-cookie";


export async function logoutFunction(){
    let config: RequestInit = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }

        await fetch("http://localhost:8080/logout", config)
            .then((res) => {
                console.log(res);
                Cookie.remove("USERNAME");
                Cookie.remove("ROLE");
            })
}