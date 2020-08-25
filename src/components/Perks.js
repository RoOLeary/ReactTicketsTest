import React from 'react';



const Perks = props => {
    let perks = props.data.ticket_perks;
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Perks</th>
                    </tr>
                </thead>
                <tbody>
                    {perks.map((p, i) => {
                    return(
                        
                    <tr key={i}>
                        <td>{p.perk}</td>
                        <td>{p.ticket1}</td>
                        <td>{p.ticket2}</td>
                        <td>{p.ticket3}</td>
                        <td>{p.ticket4}</td>
                    </tr>
                    )
                })}
                    
                </tbody>
            </table>
        
        </>
    )

}

export default Perks;