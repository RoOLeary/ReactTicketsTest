import React, { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";
import AppTheme from "../Colors";

const Main = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    const [user, setUser] = useContext(UserContext);
   
    const toggleThis = () => {
        let usr = 'Phillius Chlamydia'
        setUser(usr)
    }
    
  
    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,        
        }}>
            <h1>{user}</h1>
            <p>This is a paragraph</p>
            <button onClick={toggleThis}> This is a button</button>
        </main>
    );
}

export default Main;