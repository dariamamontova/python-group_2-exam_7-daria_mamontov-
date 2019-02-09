import React from 'react';

function OrderTotal(props) {
    let sum = props.getSum();
    return <p><b>Total price: {sum}</b></p>
};

export default OrderTotal;