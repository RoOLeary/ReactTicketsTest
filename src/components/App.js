import React, { useState, useEffect, useContext, useMemo } from 'react';
import Header from './Header';
import Main from './Main';

import Tab from './Tab';
import TicketCard from './TicketCard';
import Perks from './Perks';
import styled from 'styled-components';

import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

const Container = styled.section`
  padding: 4em;
`;


let initialState = {
  name: 'Freddie Krueger',
  theme: "light"
}


function App() {

  //const theme = useContext(ThemeContext);
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialState.name); 
  const themeHook = useState(initialState.theme);
  const providerValue = [ value, setValue ];
  
  useEffect(() => {
    
    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(
            `https://next.local.tnw.dev/next-api/tickets.json`
        );
        const data = await response.json();
        setData(data.data);
        setLoading(false)
    };
    fetchData();
  }, [setData, setLoading]);
  
  
  
  return (
      <>
       <ThemeContext.Provider value={themeHook}>
         <UserContext.Provider value={providerValue}>
            <Header />
            <Main />
          </UserContext.Provider>
          <Container
            //  initial={{ opacity: 0, y: 24 }}
            //  animate={{ opacity: 1 }}
            //  exit={{ opacity: 0 }}
            //  transition={{ opacity: { duration: 0.25 } }}
            >
            {loading && <h1>LOADING TICKETS</h1>}
            {!loading && 
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
       
      </ThemeContext.Provider>
      </>
    )
}

export default App;
