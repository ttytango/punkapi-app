import React from "react";
import styles from "./Login.module.scss";
import Form from "../../components/Form";


const Login = () => {

    return (
        <div className={styles.main}>
            <section className={styles.loginContent}>
                <h2>Login Form</h2>
                <Form />
            </section>
        </div>
    );
};

export default Login;
