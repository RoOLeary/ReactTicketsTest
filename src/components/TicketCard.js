import React from 'react'; 


const TicketCard = props => {

    return(
        <li className="TicketCard" key={props.ticket.ticketName}>
            <h3>{props.ticket.ticketName}</h3>
            <p>{props.ticket.ticketDescription}</p>
            <p>{props.ticket.ticketActualPrice}</p>
            <a href={props.ticket.ticketButtonLink}>BUY NOW</a>
        </li>
    )

}
export default TicketCard; 