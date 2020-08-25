import React, {useState} from 'react'; 

let initialState = {
    isActive: false
}


const Tab = props => {

    const [isActive, setisActive] = useState(initialState.isActive);

    const handleClick = () => {
        setisActive(!isActive)
    }
    
    return(
        <div className={`TicketGroup - ${props.name}`}>
            <h2 onClick={handleClick}>{props.name}</h2>
            {isActive && 
                props.children
            }
        </div>
    )
}

export default Tab; 