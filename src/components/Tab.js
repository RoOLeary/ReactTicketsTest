import React from 'react'; 


const Tab = props => {
    
    return(
        <div className={`Tab - ${props.name}`}>
            <h2>{props.name} Tickets </h2>
            {props.children}
        </div>
    )
}

export default Tab; 