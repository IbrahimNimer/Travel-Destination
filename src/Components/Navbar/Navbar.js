import { Link } from "react-router-dom";
import './Navbar.css';
function NavBar() {
    return (
        <nav>
            
            <Link to="/"> Home </Link>
            {/* <Link to="/cityId">City ID </Link> */}
        </nav>
    );


}

export default NavBar;

