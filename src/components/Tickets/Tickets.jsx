import React from "react";
import styles from "./Tickets.module.scss";
import Counter from '../Counter/Counter';

const Tickets = (props) => {
    const {
        name,
        role
    } = props.employee;

    return (
        <div className={styles.card}>
            <p>{name}</p>
            <p>{role}</p>
            <Counter />

        </div>
    );
};

export default Tickets;
