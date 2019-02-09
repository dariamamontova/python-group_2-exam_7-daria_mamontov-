import React from 'react';

function OrderDish(props) {
    let dishes = [];

    if (props.amount > 0) {
        dishes.push(<div>
            <p>{props.name} {props.total} {props.amount}</p>
            <button type="submit" onClick={props.onRemove}>less</button>
        </div>)
    };


    return dishes;
    //     return <div>
    //     <p>{props.name} {props.total} {props.amount}</p>
    //     <button type="submit" onClick={props.onRemove}>less</button>
    // </div>
    //

}

export default OrderDish;