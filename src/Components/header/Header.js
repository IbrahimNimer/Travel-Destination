import './Header.css';
import NavBar from '../Navbar/Navbar.js';


function Header() {
    return (
        <header className="header">
            <h1>Travel Destination</h1>
            <div><NavBar /></div>
        </header>
    );
}

export default Header;