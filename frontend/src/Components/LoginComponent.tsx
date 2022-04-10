import { Link } from "react-router-dom";

function LoginComponent(){
    return(
        <div 
        className="
        flex
        flex-col
        bg-sky-400
        w-80
        h-96
        max-w-xs
        max-h-96
        rounded
        py-3
        px-8
        ">
            <h1 className="text-center m-2 font-bold font-body text-xl text-white">CAR-INSPECTION</h1>

            <input
            className="input"
            type="text" placeholder="Username">
            </input>

            <input
            className="input"
            type="password" placeholder="Password">
            </input>

            <div className="flex items-center justify-start text-xs text-stone-900">
                <input type="checkbox" />
                <p>Remember Me</p>
            </div>

            <button
            className="
            rounded
            min-h-min
            h-10
            max-h-18
            my-4
            bg-gradient-to-r
            from-sky-500
            to-sky-600
            text-white
            transition-all
            duration-75
            hover:border-2
            ">
            LOGIN</button>
            

            <Link to="/register"
            className="
                text-xs
                self-center
                transition
                duration-150
                hover:text-stone-800
            ">
                Don't have an account yet?
                Create one here!
            </Link>
        </div>
    )
}

export default LoginComponent;