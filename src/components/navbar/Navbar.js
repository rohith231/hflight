import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary header">
            <a href="#menu-toggle" id="menu-toggle" className="navbar-brand">
                <span style={{ paddingLeft: 10 }}>
                    Flight Forms
                </span>
            </a>
            <div className="collapse navbar-collapse" id="navbarsExample02">
            </div>
        </nav>
    );
}
export default Navbar;
