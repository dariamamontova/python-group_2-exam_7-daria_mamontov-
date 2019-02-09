import React from 'react';

function OrderDish(props) {
    return <div>
        <p>{props.name} {props.total} {props.amount}</p>
        <button type="submit" onClick={props.onRemove}>less</button>
    </div>
}

export default OrderDish;