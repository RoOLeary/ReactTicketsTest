import React, { useContext, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";
import AppTheme from "../Colors";


const Main = () => {
    const theme = useContext(ThemeContext);
    const msg = useContext(UserContext);
   
    const currentTheme = AppTheme[theme];
    
    return(
        <main style = {{
            padding: "1rem",
            // backgroundColor: `${currentTheme.backgroundColor}`,
            // color: `${currentTheme.textColor}`,        
        }}>
            <p>This is a paragraph - {msg}</p>
            <button> This is a button</button>
        </main>
    );
}

export default Main;