import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';

import Tab from './Tab';
import TicketCard from './TicketCard';
import Perks from './Perks';
import styled from 'styled-components';

import ThemeContext from '../contexts/ThemeContext';

const Container = styled.section`
  padding: 4em;
`;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
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
  

  const themeMode = 'dark' ? 'dark' : 'light';

  return (
      <>
      <ThemeContext.Provider value = {themeMode}>
        <Header />
        <Main />
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
