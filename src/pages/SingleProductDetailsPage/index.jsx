import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ratings from 'react-star-ratings';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import NavBar from '../../component/presentation/NavBar';
import SizePicker from '../../component/presentation/SizePicker';
import RadioButton from '../../component/presentation/RadioButton';
import QuantitySelector from '../../component/presentation/QuantitySelector';
import { getSingleProductDetails, addProductToCart } from '../../store/actions';
import './SingleProductDetailsPage.scss';

class SingleProductDetailPage extends Component {
  state = {
    color: 'grey',
    rating: 0,
    quantity: 1,
    size: ''
  }

  componentDidMount(){
    const { getSingleProductDetails, match: { params: { id }} } = this.props;
    getSingleProductDetails(id);
  }

  handleColorChange = e => {
    console.log(e.target.value, 'e')
    const {value} = e.target;
    this.setState(() => ({ color: value }))
    console.log(this.state.color, 'local state');
  }
  
  changeRating = ( newRating, name ) => {
    this.setState({
      rating: newRating
    });
  }

  handleGetQuantity = (quantity) => {
    console.log(quantity, 'quantity');
    this.setState({ quantity })
  }

  handleGetSize = (size) => {
    console.log(size, 'size')
    this.setState({ size });
  }
  
  handleAddToCart = () => {
    const { addProductToCart, match: { params: { id }} } = this.props;
    const {size, color} = this.state;
    const attributes = `${size} ${color}`
    addProductToCart(id, attributes)
  }

  render() {
    
    const { productDetails } = this.props;
    const { color, rating } = this.state;
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
              <RadioButton selected={color} onChange={this.handleColorChange} />
              <SizePicker getSize={this.handleGetSize} />
              <QuantitySelector quantity={this.handleGetQuantity} />
              <button className="add-to-cart-btn" onClick={this.handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const {productDetails, cart} = state;
  console.log(state, 'state');
  return {productDetails, cart};
}

export default connect(mapStateToProps, { getSingleProductDetails, addProductToCart })(SingleProductDetailPage);