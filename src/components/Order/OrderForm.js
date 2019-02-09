import React from 'react';

function OrderForm(props) {
    if (props.sum > 0) {
        return <div>
            {props.children}
        </div>
    };

    if (props.sum <= 0) {
        return <div>
            <p>Order is empty! Please add some items.</p>
        </div>
    };
}

export default OrderForm;