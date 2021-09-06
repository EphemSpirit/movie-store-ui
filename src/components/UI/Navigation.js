import React, { useState } from 'react';
import styles from './Navigation.module.css';

import Button from './Button';

const Navigation = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);
    
    return (
        <>
            <nav className={styles.navigation}>
                <div>Welcome to the Movie Store!</div>
                <section className={styles.control}>
                    <Button>View Movies</Button>
                    {!loggedIn && <Button onClick={() => setLoggedIn(true)}>Login</Button>}
                    {loggedIn && <Button onClick={() => setLoggedIn(false)}>Log Out</Button>}
                    <span></span>
                </section>
            </nav>
        </>
    )
};

export default Navigation;