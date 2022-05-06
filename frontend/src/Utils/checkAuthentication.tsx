async function checkAuthentication(setAuthenticated: any, setRole: any, setUsername: any){
    let config: RequestInit = {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
    }

    await fetch("http://localhost:8080/check", config)
        .then((response) => response.json())
        .then((res) => {
            setAuthenticated(true);
            setRole(res.role);
            setUsername(res.username);
        })
    
}

export default checkAuthentication;