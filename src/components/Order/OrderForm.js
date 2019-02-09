import React from 'react';

function OrderForm(props) {
    if (props.sum > 0) {
        return <div className="col-sm-4 ml-5">
            <h4 className="text-uppercase">Order details:</h4>
            {props.children}
        </div>
    };

    if (props.sum <= 0) {
        return <div>
            <h4 className="text-uppercase">Order details:</h4>
            <p>Order is empty! Please add some items.</p>
        </div>
    };
};

export default OrderForm;