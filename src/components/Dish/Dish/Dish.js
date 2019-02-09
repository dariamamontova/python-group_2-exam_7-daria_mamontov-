import React from 'react';


function Dish(props) {
    return <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <button type="submit" onClick={props.onAdd}>more</button>
    </div>
}


export default Dish;