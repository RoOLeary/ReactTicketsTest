import React, { createContext, useState } from "react";

const initialState = {
    tickets: true, 
    theme: 'light'
}


export const TicketContext = createContext(initialState, {});

export const TicketContextProvider = (props) => {

    const output = props.data;
    const [ data, setData ] = useState(null); 
    const [ theme, setTheme ] = useState(initialState.theme); 

    let provider = [ { data, setData }, {theme, setTheme}, output ]

    return(
        <TicketContext.Provider value={provider}>
            {props.children}
        </TicketContext.Provider>
    )
}


export default TicketContextProvider;