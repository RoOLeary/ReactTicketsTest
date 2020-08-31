import React, { useContext } from "react";
import { TicketContext } from "../contexts/TicketContext";
import { UserContext } from "../contexts/UserContext";
import AppTheme from "../Colors";

const Main = () => {
    let ctx = useContext(TicketContext);
    console.log(ctx); 
    
    let theme = ctx[1].theme;

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