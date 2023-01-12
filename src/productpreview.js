import React from "react";
import classes from "./productpreview.module.css"


const productpreview=(props)=>{
    return(
        <div className={classes.productpreview}>
        <img src='https://m.media-amazon.com/images/I/61u2dhY-JBL._SY355_.jpg' alt ="product preview"/>
        </div>
    );

}

export default productpreview;