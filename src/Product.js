import React from 'react';
import Rater from './Rater.js';
class Product extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className={"thumbnail"}>
          <img src={this.props.img} class="img img-rounded img-responsive"/>
          <div class="caption">
            <a href="/productDetails"><h3> {this.props.name} </h3></a>
              <h4><span> Rs.{this.props.price} </span></h4>
              {this.props.status ? <h5 style={{"color":"red","font-weight":"bold"}}>The product is discontinued.</h5> :
              <p className={"description"}>{this.props.desc}</p>}
              <Rater value={this.props.rating} maxlength="6"/>&nbsp;&nbsp;
              <span style={{"fontSize":"9px"}}>{this.props.rating}/5</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Product;