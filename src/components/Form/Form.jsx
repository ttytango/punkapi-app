import React from "react";
import styles from "./Form.module.scss";

const Form = () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <fieldset>
                <label> <p>Please enter your username:</p><input name="username" type="text" /></label>
                <label> <p>Please enter your password:</p><input type="password" name="password" /></label>
                <button type="submit" className={styles.loginButton}>Submit</button>
            </fieldset>
        </form>
    );
};

export default Form;
