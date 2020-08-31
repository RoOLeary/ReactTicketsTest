import React, { useContext, useState } from "react";
import { TicketContext } from '../contexts/TicketContext';
import { UserContext } from '../contexts/UserContext';
import TicketCard from "./TicketCard";

const headerStyles = {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
}
const Header = () => {
    const context = useContext(TicketContext);
    const [user, setUser] = useContext(UserContext);
    let theme = context[1].theme;

    const pingBellend = () => {
        
        let usr = 'Cockington McGruder'
        setUser(usr)
    }

    const fuckHead = () => {
        context[1].setTheme(theme === "light" ? "dark" : "light" );
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