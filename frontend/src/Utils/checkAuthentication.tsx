async function checkAuthentication(){

    let status: Boolean = false;
    
    let config: RequestInit = {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
    }

    await fetch("http://localhost:8080/check", config)
            .then((res) => {
            if(res.status === 200){
                status = true;
            } 
    })
    
    return status;
    
}

export default checkAuthentication;