import React, { useState, useEffect, useCallback} from 'react';
import Header from './Header';
import Main from './Main';
import Tab from './Tab';
import TicketCard from './TicketCard';
import Perks from './Perks';
import styled from 'styled-components';

import TicketContextProvider from '../contexts/TicketContext';
import UserContext from '../contexts/UserContext';

const Container = styled.section`
  padding: 4em;
`;

let initialState = {
  name: 'Blerp Farfington',
  theme: "light",
  loading: false
}
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(initialState.name); 
  const providerValue = [ value, setValue ];
  
  const fetchData = useCallback(() => {
    (async () => {
      try {
        const response = await fetch('https://next.local.tnw.dev/next-api/tickets.json');
        const payload = await response.json();
        setData(payload.data);
      } catch (e) {
        console.warn(e);
        // what errors?
      } 
    })();
  }, [setData]);

  useEffect(() => fetchData(), [fetchData]);

  return (
      <>
       <TicketContextProvider data={data}>
         <UserContext.Provider value={providerValue}>
            <Header />
            
            <Main />
            
          </UserContext.Provider>
      </TicketContextProvider>
      </>
    )
}

export default App;
