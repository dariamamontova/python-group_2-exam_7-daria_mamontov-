import React, {Component} from 'react';
import './App.css';
import DishForm from './components/Dish/DishForm';
import Dish from "./components/Dish/Dish/Dish";
import OrderForm from './components/Order/OrderForm'
import OrderDish from "./components/Order/OrderDish/OrderDish";
import OrderTotal from "./components/Order/OrderTotal/OrderTotal";


class App extends Component {

    state = {
        dishes: [
            {id: 1, name: 'Hamburger', price: 80, amount: 0, total: 0},
            {id: 2, name: 'Cheeseburger', price: 80, amount: 0, total: 0},
            {id: 3, name: 'Cola', price: 80, amount: 0, total: 0},
            {id: 4, name: 'Tea', price: 80, amount: 0, total: 0}
        ]
    }

    addOrder = (id) => {
        let orderId = this.state.dishes.findIndex(item => {
            return item.id === id;
        });

        let order = {...this.state.dishes[orderId]};
        order.amount += 1;
        order.total = order.amount * order.price;

        let dishes = [...this.state.dishes];
        dishes[orderId] = order;

        let state = {...this.state};
        state.dishes = dishes;

        this.setState(state);
        console.log(this.state);
};

    removeOrder = (id) => {
        let orderId = this.state.dishes.findIndex(item => {
            return item.id === id;
        });

        let order = {...this.state.dishes[orderId]};
        if (order.amount > 0) {
            order.amount -= 1;
        }
        order.total = order.amount * order.price;

        let dishes = [...this.state.dishes];
        dishes[orderId] = order;

        let state = {...this.state};
        state.dishes = dishes;

        this.setState(state);
        console.log(this.state);
};

    getTotal = () => {
        let dishes = [...this.state.dishes];
        let sum = 0;
        Object.keys(dishes).map(item => {
            sum += dishes[item].total
        })
        return sum;
};

    render() {
        return (
            <div className="App">
                <DishForm>
                    {this.state.dishes.map((item) => <Dish key={item.id} name={item.name} price={item.price}
                    onAdd={() => this.addOrder(item.id)}
                     />)}
                </DishForm>
                <OrderForm sum={this.getTotal()}>
                    <OrderTotal getSum={this.getTotal}/>
                    {this.state.dishes.map(item => <OrderDish key={item.id} name={item.name}
                         total={item.total} amount={item.amount}
                         onRemove={() => this.removeOrder(item.id)}
                     />)}
                </OrderForm>
            </div>
        );
    }
}

export default App;
