import React from 'react';

function Dish(props) {
    let dishIcon = 'icon';
    if (props.id === 1) dishIcon = "fas fa-hamburger";
    if (props.id === 2) dishIcon = "fas fa-hotdog";
    if (props.id === 3) dishIcon = "fas fa-prescription-bottle";
    if (props.id === 4) dishIcon = "fas fa-mug-hot";
    if (props.id === 5) dishIcon = "fas fa-utensils";
    if (props.id === 6) dishIcon = "fas fa-mug-hot";
    return <div className="col-sm-5 card pt-2 border-danger m-1" onClick={props.onAdd}>
        <div className="row">
            <div className="col-sm-9">
                <h5>{props.name}</h5>
                <p>Price: {props.price}</p>
            </div>
            <div className="col-sm-2 px-1 ">
                <a href="#" className="icon text-danger">
                <i className={dishIcon}></i>
                    </a>
            </div>
        </div>

    </div>

};


export default Dish;