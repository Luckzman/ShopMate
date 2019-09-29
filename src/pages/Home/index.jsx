import React, { Component } from 'react';
import {connect} from 'react-redux';
import { PageLoader } from '../../component/presentation/Loader';
import TopNav from '../../component/presentation/TopNav';
import Cart from '../../component/container/Cart';
import Modal from '../../component/presentation/Modal';
import NavBar from '../../component/presentation/NavBar';
import FilterSideBar from '../../component/presentation/FilterSideBar';
import SignupForm from '../../component/container/SignupForm';
import LoginForm from '../../component/container/LoginForm';
import UserProfileForm from '../../component/container/UserProfileForm';
import ShippingDetailsForm from '../../component/container/ShippingDetailsForm';
import ItemCard from '../../component/presentation/ItemCard';
import {
  getAllCategories,
  getAllDepartments,
  getAllProducts,
  searchProducts,
  getFilteredProductsByCategory,
  getFilteredProductsByDepartment,
} from '../../store/actions';
import './home.scss';
// import { categories } from '../../store/reducers';

class Home extends Component {

  state = {
    displayLoginModal: false,
    displaySignupModal: false,
    displayProfileModal: false,
    displayShippingDetailsModal: false,
    displayCartModal: false,
  }

  componentDidMount() {
    const {
      getAllCategories,
      getAllDepartments,
      getAllProducts,
    } = this.props;
    
    getAllCategories();
    getAllDepartments();
    getAllProducts();
  }
  
  handleFilterProduct = (item, department) => {
    if(Object.keys(department)[0].includes('department')) {
      this.props.getFilteredProductsByDepartment(item);
    }
    else {
      this.props.getFilteredProductsByCategory(item);
    }
    this.setState({isLoading: false});
  }

  handleSearch = (inputText) => {
    const {searchProducts} = this.props;
    searchProducts(inputText);
  }

  handleToggleLoginModal = () => {
    const { displayLoginModal } = this.state;
    this.setState(() => ({displayLoginModal: !displayLoginModal}))
  }

  handleToggleSignupModal = () => {
    const { displaySignupModal } = this.state;
    this.setState(() => ({displaySignupModal: !displaySignupModal}));
  }
  
  handleToggleProfileModal = () => {
    const { displayProfileModal } = this.state;
    this.setState(() => ({displayProfileModal: !displayProfileModal}));
  }
  
  handleToggleShippingDetailsModal = () => {
    const { displayShippingDetailsModal } = this.state;
    this.setState(() => ({displayShippingDetailsModal: !displayShippingDetailsModal}));
  }

  handleToggleCartModal = () => {
    const { displayCartModal } = this.state;
    this.setState(() => ({displayCartModal: !displayCartModal}));
  }

  render() {
    const {categories, departments, products, cart, customers} = this.props;
    const { displayLoginModal, displayCartModal, displaySignupModal, displayProfileModal, displayShippingDetailsModal } = this.state;
    return (
      <div>
        <TopNav
          name={customers.isAuthenticated ? customers.customer.name : ''}
          cartCount={(cart.data) ? cart.data.length: 0}
          triggerLoginModal={this.handleToggleLoginModal}
          triggerSignupModal={this.handleToggleSignupModal}
          handleProfileModal={this.handleToggleProfileModal}
          handleShippingDetailsModal={this.handleToggleShippingDetailsModal}
          showModal={this.handleToggleCartModal}
        />
        <NavBar 
          searchProduct={this.handleSearch} 
          cartCount={(cart.data) ? cart.data.length: 0}
          showModal={this.handleToggleCartModal}
        />
        {displayLoginModal && <Modal modalSize={"sm"} hideModal={this.handleToggleLoginModal} >
          <LoginForm hideModal={this.handleToggleLoginModal} displaySignup={this.handleToggleSignupModal} />
        </Modal>}
        {displaySignupModal && <Modal modalSize={"sm"}  hideModal={this.handleToggleSignupModal}>
          <SignupForm hideModal={this.handleToggleSignupModal} displayLogin={this.handleToggleLoginModal} />
        </Modal>}
        {displayProfileModal && <Modal modalSize={"sm"} hideModal={this.handleToggleProfileModal}>
          <UserProfileForm hideModal={this.handleToggleProfileModal}/>
        </Modal>}
        {displayShippingDetailsModal && <Modal modalSize={"sm"} hideModal={this.handleToggleShippingDetailsModal}>
          <ShippingDetailsForm hideModal={this.handleToggleShippingDetailsModal} />
        </Modal>}
        {displayCartModal && cart.data && <Modal hideModal={this.handleToggleCartModal}>
          <Cart />
        </Modal>}
        <div className="container homepage mt-5">
          <div className="filter-side-bar">
            <FilterSideBar
              category={categories.rows}
              department={departments}
              selectedProduct={this.handleFilterProduct}
            />
          </div>
          {products.isLoading ? <PageLoader />  : <div className="product">
            {
              products.rows && products.rows.map((product, index) => {
                return (
                  <ItemCard
                    key={`${product.name}${index}`}
                    name={product.name}
                    thumbnail={`https://backendapi.turing.com/images/products/${product.thumbnail}`}
                    price={product.price}
                    id={index+1}
                  />)})
            }
          </div>}
        </div>
      </div>
    
    )
  }
}

const mapStateToProps = (state) => {
  const {
    categories,
    departments,
    products,
    cart,
    customers,
  } = state;

  return {
    categories,
    departments,
    products,
    cart,
    customers
  }
}

export default connect(mapStateToProps, {
  getAllCategories,
  getAllDepartments,
  getAllProducts,
  getFilteredProductsByCategory,
  getFilteredProductsByDepartment,
  searchProducts
})(Home);
