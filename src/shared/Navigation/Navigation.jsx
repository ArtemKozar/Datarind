import React from 'react';
import {Link} from "react-router-dom";

import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="userslist">Users</Link>
        </div>
    );
};

export default Navigation;