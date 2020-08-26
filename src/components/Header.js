import React from "react";


const headerStyles = {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}
const Header = () => {
    return(
        <header style = {headerStyles}>
            <h1>Context API</h1>
            
        </header>
    );
}

export default Header;