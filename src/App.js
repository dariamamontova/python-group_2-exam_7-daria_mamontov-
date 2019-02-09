import React, {Component} from 'react';
import './App.css';
import DishForm from './components/Dish/DishForm'
import Dish from "./components/Dish/Dish";


class App extends Component {

    state = {
        dishes: [
            {id: 1, name: 'Hamburger', price: 80, amount: 0, total: 0},
            {id: 2, name: 'Cheeseburger', price: 80, amount: 0, total: 0},
            {id: 3, name: 'Cola', price: 80, amount: 0, total: 0},
            {id: 4, name: 'Tea', price: 80, amount: 0, total: 0}
        ]
    }



    render() {
        return (
            <div className="App">
                <DishForm>
                    {this.state.dishes.map(item => <Dish name={item.name} price={item.price}
                     />)}
                </DishForm>

            </div>
        );
    }
}

export default App;
