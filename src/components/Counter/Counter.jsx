import React from 'react';
import styles from './Counter.module.scss';

class Counter extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            decrement: this.decrement.bind(this)
        };
    }


    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState(prevState => ({ count: prevState.count - 1 }));
        }
    }

    render() {
        return(
            <div>
                <div className={styles.innerCounter}>
                    <h4>Counter</h4>
                    <button onClick={this.increment}>+</button>
                    <button className={this.decrementButton} onClick={this.decrement}>-</button>
                    <p>{this.state.count}</p>
                </div>
            </div>
        );
    }
};


export default Counter;
