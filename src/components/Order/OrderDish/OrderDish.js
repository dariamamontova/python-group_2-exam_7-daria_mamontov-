import React from 'react';

function OrderDish(props) {
    return <div>
        <p>{props.name} {props.total} {props.amount}</p>
    </div>
}

export default OrderDish;