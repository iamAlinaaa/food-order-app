import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props: any) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>HappyMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.mainImage}>
        {/* <img src="https://images.theconversation.com/files/416466/original/file-20210817-27-105w4xv.jpg"/> */}
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
};

export default Header;
