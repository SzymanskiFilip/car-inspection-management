import { Link } from "react-router-dom";

function HomePage():JSX.Element{
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-sky-500">
            <Link to="/login" className="hp-link">Login</Link>
            <Link to="/register" className="hp-link">Register</Link>
            <Link to="/prices" className="hp-link">Pricing</Link>
            <Link to="/information" className="hp-link">Information</Link>
            <Link to="/contact" className="hp-link">Contact</Link>
        </div>
    )
}

export default HomePage;