import React from "react";
import classes from './topbar.module.css';

const topbar=(props)=>{
    return(
        <nav className={classes.navbar}>
           <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="amazon logo"/>
       </nav>
    )
}

export default topbar;