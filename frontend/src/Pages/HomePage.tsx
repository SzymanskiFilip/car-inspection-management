import { Link } from "react-router-dom";

function HomePage():JSX.Element{
    return(
        <div>
            <h1>Welcome To The Car-Inspection Service!</h1>
            <Link to="/login" className="bg-sky-400 rounded px-2 py-2">Login!</Link>
        </div>
    )
}

export default HomePage;