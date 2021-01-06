import React, { Fragment }  from "react";
import styles from "./TicketTracker.module.scss";
import Tickets from '../../components/Tickets';
import team from '../../data/team';

const TicketTracker = () => {

    const getTicketCounterJsx = (employee) => (
        <React.Fragment key={team.id}>
            <Tickets employee={employee} />
        </React.Fragment>
    );

    return (
        <>
            <section className={styles.content}>
                {team.map(getTicketCounterJsx)}
            </section>
        </>
    );
};

export default TicketTracker;
