import React from "react";
import classes from './productdetails.module.css';


const productdetails=(props)=>{

  const coloroptions = props.data.coloroptions.map((item,pos)=>{
    const classarr=[classes.productimage]
    if(pos===0){
      classarr.push(classes.selectedproductimage);
    }
    return(
      <img  key={pos} className={classarr.join(' ')} src={item.ImageUrl} alt={item.stylename} onClick={props.oncoloroptionclick} />
    );
  })


  const featureoptions=props.data.featureoptions.map((item,pos)=>{
    const classarr=[classes.featureitem]
    if(pos===0){
      classarr.push(classes.selectedfeatureitem);
    }
    return(
      <button  key={pos} className={classarr.join(' ')}>{item}</button>
    )
  })

    return (
        <div className={classes.productdata}>
          <h1 className={classes.producttitle}>{props.data.title}  </h1>
          <p className={classes.productdescription}>{props.data.description}</p>

          <h3 className={classes.sectionheading}>select color</h3>

          <div>
          {coloroptions}
          </div>

          <h3 className={classes.sectionheading}>features</h3>
          <div>
            {featureoptions}
          </div>

          <button className={classes.buybutton}>buy now</button>
        </div>
    )
}

export default productdetails