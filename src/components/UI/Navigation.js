import React, { useState } from 'react';
import styles from './Navigation.module.css';

import Button from './Button';

const Navigation = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = () => {
        setLoggedIn(prevState => !loggedIn)
    }

    let content;

    if (!loggedIn) {
        content = "Login";
    }

    if (loggedIn) {
        content = "Log Out";
    }

    return (
        <>
            <nav className={styles.navigation}>
                <div className={styles.title}>Welcome to the Movie Store!</div>
                <section className={styles.control}>
                    <Button>View Watchlist</Button>
                    <Button onClick={loginHandler}>{content}</Button>
                    <span></span>
                </section>
            </nav>
        </>
    )
};

export default Navigation;