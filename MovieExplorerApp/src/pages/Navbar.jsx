import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-head">
                <Link to='/' className="head-text">Movie App</Link>
            </div>
            <div className="navbar-mini">
                <Link to='/' className="navbar-home">Home Page</Link>
                <Link to='/Favourites' className="navbar-fav">Favourites</Link>
            </div>
        </div>
    )
}
export default Navbar;