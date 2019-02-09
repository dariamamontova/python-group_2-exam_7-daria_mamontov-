import React from 'react';

function OrderTotal(props) {
    let sum = props.getSum()
    return <p>Total {sum}</p>
}

export default OrderTotal;