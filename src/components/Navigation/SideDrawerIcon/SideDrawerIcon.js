import React from 'react';
import classes from './SideDrawerIcon.module.css';

const sideDrawerIcon = props => (

    <div className={classes.Menu} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerIcon;