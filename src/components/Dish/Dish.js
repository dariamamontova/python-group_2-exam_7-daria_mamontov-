import React from 'react';


function Dish(props) {
    return <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
    </div>
}


export default Dish;