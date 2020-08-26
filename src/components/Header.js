import React, {useContext} from "react";
import UserContext from "../contexts/UserContext";

const headerStyles = {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}
const Header = () => {
    const [ value, setValue ] = useContext(UserContext);
    const msg = useContext(UserContext); 


    const handleClick = () => {
        setValue('Blort');
    }

    return(
        <header style = {headerStyles}>
            <h1>{msg}</h1>
            <button onClick={handleClick}>Fuck you</button>
        </header>
    );
}

export default Header;