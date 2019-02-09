import React from 'react';
import OrderDish from './OrderDish/OrderDish'
import OrderTotal from './OrderTotal/OrderTotal'

function OrderForm(props) {
    return <div>

        {props.children}
        </div>
}


export default OrderForm;