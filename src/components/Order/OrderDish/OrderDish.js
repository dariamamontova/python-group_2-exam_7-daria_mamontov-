import React from 'react';

function OrderDish(props) {
    let dishes = [];

    if (props.amount > 0) {
        dishes.push(<div>
            <div className="row mb-2">
                <div className="col-sm-9">
                    <div className="row pt-2">
                        <div className="col-sm-6">
                            <p>{props.name}:</p>
                        </div>
                        <div className="col-sm-6">
                           <p>x{props.amount} {props.total} KGS</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <button type="submit" className="btn btn-danger" onClick={props.onRemove}>Less</button>
                </div>
            </div>
        </div>)
    };

    return dishes;

};

export default OrderDish;