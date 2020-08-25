import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"


const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
}



const Perks = props => {
    // const [isOpen, setIsOpen] = useState(false)

    // useEffect(() => {
    //     setIsOpen(!isOpen)
    // }, [])

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