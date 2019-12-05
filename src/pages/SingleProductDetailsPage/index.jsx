import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import Ratings from 'react-star-ratings';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { PageLoader } from '../../component/presentation/Loader';
import NavBar from '../../component/presentation/NavBar';
import Cart from '../../component/container/Cart';
import Modal from '../../component/presentation/Modal';
import SizePicker from '../../component/presentation/SizePicker';
import RadioButton from '../../component/presentation/RadioButton';
import { getSingleProductDetails, addProductToCart, removeCartItem, updateCartItemQuantity, getAllCartItem } from '../../store/actions';
import './SingleProductDetailsPage.scss';

class SingleProductDetailPage extends Component {
  state = {
    color: '',
    rating: 4,
    size: '',
    displayModal: false,
  }

  componentDidMount(){
    const { getSingleProductDetails, getAllCartItem, match: { params: { id }}, cart } = this.props;
    getSingleProductDetails(id);
    getAllCartItem(cart.cart_id);
  }

  /**
   * @method handleColorChange
   * @description This method handles color change
   * @param {object} event
   * @return {null}
   */
  handleColorChange = e => {
    const {value} = e.target;
    this.setState(() => ({ color: value }))
  }
  
  /**
   * @method handleGetSize
   * @description This method handles product size
   * @param {object} size
   * @return {null}
   */
  handleGetSize = (size) => {
    this.setState({ size });
  }
  
  /**
   * @method handleAddToCart
   * @description This method add item to cart
   * @return {null}
   */
  handleAddToCart = () => {
    const { addProductToCart, match: { params: { id }} } = this.props;
    const {size, color} = this.state;
    const attributes = `${size} ${color}`
    addProductToCart(id, attributes)
  }
  
  /**
   * @method handleToggleModal
   * @description This method to handles toggle of cart
   * @return {null}
   */
  handleToggleModal = () => {
    const { displayModal } = this.state;
    this.setState(() => ({ displayModal: !displayModal }));
  }

  render() {
    const { productDetails, cart } = this.props;
    const { color, rating, displayModal } = this.state;
    return (
      <>
        <NavBar 
          searchProduct={()=>{}} 
          showCartIcon={true}
          showModal={this.handleToggleModal} 
          cartCount={(cart.data) ? cart.data.length : 0}
        />
        {displayModal && cart.data.length>0 && <Modal hideModal={this.handleToggleModal}>
          <Cart />
        </Modal> }
        <div className="container">
          {productDetails.isLoading ? <PageLoader /> : <div className="product">
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
                <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/">All Categories</Link></Breadcrumb.Item>
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
              <button className="add-to-cart-btn" onClick={this.handleAddToCart}>Add to cart</button>
            </div>
          </div>}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const {productDetails, cart, customers} = state;
  return {productDetails, cart, customers};
}

SingleProductDetailPage.propTypes = {
  customers: PropTypes.object.isRequired,
  productDetails: PropTypes.object.isRequired, 
  cart: PropTypes.array.isRequired,
  getSingleProductDetails: PropTypes.func.isRequired, 
  addProductToCart: PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  updateCartItemQuantity: PropTypes.func.isRequired, 
  getAllCartItem: PropTypes.func.isRequired, 
};

export default connect(mapStateToProps, { getSingleProductDetails, addProductToCart, removeCartItem, updateCartItemQuantity, getAllCartItem })(SingleProductDetailPage);