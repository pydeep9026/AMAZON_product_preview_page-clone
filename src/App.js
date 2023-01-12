import React, {Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './productpreview';
import ProductDetails from './productdetails';
import Topbar from './topbar';
import ProductData from './ProductData';

class App extends  Component{
  state={
    ProductData:ProductData,
    currentpreviewimage: "https://m.media-amazon.com/images/I/61u2dhY-JBL._SY355_.jpg",
  }

  oncoloroptionclick=(pos)=>{
    const updatedpreviewimage=this.state.ProductData.coloroptions[pos].ImageUrl;
    console.log(updatedpreviewimage)
     this.setState({currentpreviewimage: updatedpreviewimage})
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Topbar/>
      </header>


      <div className={classes.container}>


        <div className={classes.productpreview}>
         <ProductPreview/>
        </div>


        <div className={classes.productdata}>
          <ProductDetails data={this.state.ProductData} oncoloroptionclick={this.oncoloroptionclick} />

        </div>
      </div>
    </div>
  );
}
}

export default App;
