import React, {useState} from 'react';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>KartikFolio</h1>
            </div>

            <div className="navbar-right">
                <div className={`menu-toggle ${showMenu ? "open" : ""}`} onClick={handleMenuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`navbar-options ${showMenu ? "open" : ""}`}>
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                    <li><a href="#">Option 4</a></li>
                    <li><a href="#">Option 5</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar
