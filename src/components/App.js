import React, { useState, useEffect } from 'react';
 
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
  
  return (
      <>
          {loading && <h1>LOADING TICKETS</h1>}

          {!loading && 
            data.map((d, i) => {
              return(
                <div key={i}>
                  <h2>{d.title}</h2>
                  {d.tickets.map((ticket, i) => {
                      return(
                        <div key={i}>
                          <h3>{ticket.ticketName}</h3>
                          <p>{ticket.ticketDescription}</p>
                          <p>{ticket.ticketActualPrice}</p>
                        </div>
                      )
                  })}

                </div>

              )
          })}
      </>
  )
}

export default App;
