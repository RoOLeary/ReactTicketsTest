import React from 'react';

const Perks = props => {
    let perks = props.data.ticket_perks;
    return (
        <>
            <table>
                <tbody>
                    {perks.map((p, i) => {
                    return(
                        <tr key={i}>
                            <td>{p.perk}</td>
                            <td>{p.ticket1}</td>
                            {p.ticket2 && <td>{p.ticket2}</td>}
                            {p.ticket3 && <td>{p.ticket3}</td>}
                            {p.ticket4 && <td>{p.ticket4}</td>}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )

}

export default Perks;