import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ratings from 'react-star-ratings';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import NavBar from '../../component/presentation/NavBar';
import SizePicker from '../../component/presentation/SizePicker';
import RadioButton from '../../component/presentation/RadioButton';
import QuantitySelector from '../../component/presentation/QuantitySelector';
import { getSingleProductDetails } from '../../store/actions';
import './SingleProductDetailsPage.scss';

class SingleProductDetailPage extends Component {
  state = {
    selectedColor: 'grey',
    rating: 0,
    quantity: 1,
  }

  componentDidMount(){
    const { getSingleProductDetails, match: { params: { id }} } = this.props;
    getSingleProductDetails(id);
  }

  handleChange = e => {
    this.setState({ selectedColor: e.target.value })
  }

  changeRating = ( newRating, name ) => {
    console.log(newRating);
    this.setState({
      rating: newRating
    });
  }

  getQuantity = (quantity) => {
    console.log(quantity)
    // this.setState({ quantity })
  }
  
  addToCart = () => {

  }
  
  render() {
    const colors = [{value:'grey'}, {value: 'blue'}, {value: 'red'}, {value: 'magenta'}, {value: 'yellow'}, {value: 'green'}, {value: 'purple'}];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    const { productDetails } = this.props;
    const { selectedColor, rating } = this.state;
    return (
      <>
        <NavBar searchProduct={()=>{}} />
        <div className="container">
          <div className="product">
            <div className="product-img">
              <img src={`https://backendapi.turing.com/images/products/${productDetails.image}`} className="main-img" />
              <div className="thumbnail-grp">
                <img className="thumbnail" src={`https://backendapi.turing.com/images/products/${productDetails.thumbnail}`} />
                <img className="thumbnail" src={`https://backendapi.turing.com/images/products/${productDetails.image}`} />
                <img className="thumbnail" src={`https://backendapi.turing.com/images/products/${productDetails.image_2}`} />
              </div>
            </div>
            <div className="product-details">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">All Categories</Breadcrumb.Item>
                <Breadcrumb.Item active>Men's Clothing &amp; Accessories</Breadcrumb.Item>
              </Breadcrumb>
              <Ratings
                rating={rating}
                starRatedColor="orange"
                changeRating={this.changeRating}
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="-5px"
              />
              <h2 className="my-3">{productDetails.name}</h2>
              <p className="price">&pound; {productDetails.price}</p>
              <RadioButton options={colors} selected={selectedColor} onChange={this.handleChange} />
              <SizePicker sizes={sizes} />
              <QuantitySelector quantity={this.getQuantity} />
              <button className="add-to-cart-btn" onClick={this.addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const {productDetails} = state;
  return {productDetails};
}

export default connect(mapStateToProps, { getSingleProductDetails })(SingleProductDetailPage);