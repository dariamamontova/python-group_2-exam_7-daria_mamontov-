import React from 'react';

function OrderTotal(props) {
    return <p>Total {props.getSum()}</p>
}

export default OrderTotal;