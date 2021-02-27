import React from 'react';

// import burgerLogo from '../../assets/images/burger-logo.png';
import projectLogo from '../../assets/images/authorization.svg';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={projectLogo} alt="MyBurger" />
    </div>
);

export default logo;