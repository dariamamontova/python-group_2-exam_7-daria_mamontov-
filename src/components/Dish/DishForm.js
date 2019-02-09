import React from 'react';

function DishForm(props) {
    return <div className="col-sm-6">
        <h4 className="text-uppercase">Add items:</h4>
        <div className="row">
            {props.children}
        </div>
    </div>
};

export default DishForm;