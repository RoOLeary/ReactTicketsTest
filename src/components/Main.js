import React, { useContext, useEffect } from "react";
import { TicketContext } from "../contexts/TicketContext";
import { UserContext } from "../contexts/UserContext";
import AppTheme from "../Colors";
import Tab from './Tab';
import TicketCard from './TicketCard';
import Perks from './Perks';

import styled from 'styled-components';

const Container = styled.section`
  padding: 4em;
`;

const Main = () => {
    let ctx = useContext(TicketContext);
    let theme = ctx[1].theme;
    let data = (ctx[3]);
   

    let loading = false

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
            <p>From main</p>
            <Container >
            {loading ? '<h2>LOADING YOUR SHIT</h2>' :
                data.map((d, idx) => {
                    return(
                    <Tab key={idx} name={d.title}>
                        <div>
                        <ul>
                        {d.tickets.map((ticket, i) => {
                            return(
                            <TicketCard key={i} ticket={ticket} />
                            )
                        })}
                        </ul>
                        </div>
                        <Perks data={d} />
                    </Tab>
                    )
                })}
            </Container>
        </main>
    );
}

export default Main;