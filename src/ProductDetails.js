import React from 'react';
import Product from './Product.js';
class ProductDetails extends React.Component{
    constructor(props){
        super(props)
        
}


    render(){
        var item= {
	        _id:123901239412,
	        pdtName: "Gamia Laptop",
	        pdtPrice: "33000",
            pdtDescription: "An excellent choice for an awesome gaming experience",   
	        img: "Images/laptop.jpg",
	        rating: "3",
	        isDiscontinued:false
         };
         
        return <div>
            
            
<Product pid={item._id} 
         price={item.pdtPrice} 
name={item.pdtName} 
key={item._id} 
desc={item.pdtDescription} img={item.pdtImg} rating={item.avgFeedback} status={item.isDiscontinued}/>
</div>
    }
}
export default ProductDetails;