import React, { useContext, useState } from "react";
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

const headerStyles = {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
}
const Header = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const [user, setUser] = useContext(UserContext);
    
    const pingBellend = () => {
        
        let usr = 'Cockington McGruder'
        setUser(usr)
    }

    const fuckHead = () => {
        setThemeMode(themeMode === "light"? "dark": "light");
    }

    return(
        <header style = {headerStyles}>
            <h1>{user}</h1>
            <button onClick={fuckHead} >Toggle Theme</button>
            <button onClick={pingBellend} >FUCK YOU</button>
        </header>
    );
}

export default Header;