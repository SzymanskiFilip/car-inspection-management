import { Link } from "react-router-dom";

function HomePage():JSX.Element{
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-black">
            <Link to="/login" className="hp-link">Login</Link>
            <Link to="/" className="hp-link">Register</Link>
            <Link to="/" className="hp-link">Pricing</Link>
            <Link to="/" className="hp-link">Information</Link>
            <Link to="/" className="hp-link">Contact</Link>
        </div>
    )
}

export default HomePage;