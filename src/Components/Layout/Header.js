import React, { Fragment } from "react";
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="delicious food awaiting!" />
            </div>
        </Fragment>
    )
}

export default Header;