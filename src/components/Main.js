import React, { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import AppTheme from "../Colors";


const Main = () => {
    const themes = useContext(ThemeContext);
    const currentTheme = AppTheme[themes];
    const[themeMode, setThemeMode] = useState('dark');
      
    const toggleTheme = () => {

        setThemeMode(themeMode);
        console.log(themeMode);
    }

    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,        
        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button onClick={toggleTheme}> This is a button</button>
        </main>
    );
}

export default Main;