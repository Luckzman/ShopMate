import React, { Component } from 'react';
import {connect} from 'react-redux';
import TopNav from '../../component/presentation/TopNav';
import Modal from '../../component/presentation/Modal';
import NavBar from '../../component/presentation/NavBar';
import FilterSideBar from '../../component/presentation/FilterSideBar';
import SignupForm from '../../component/container/SignupForm';
import LoginForm from '../../component/container/LoginForm';
import UserProfileForm from '../../component/container/UserProfileForm';
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
    displayProfileModal: false
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

  render() {
    const {categories, departments, products, cart} = this.props;
    const { displayLoginModal, displaySignupModal, displayProfileModal } = this.state;
    return (
      <div>
        <TopNav
          name="Lucky"
          cartCount={(cart.data) ? cart.data.length: 0}
          triggerLoginModal={this.handleToggleLoginModal}
          triggerSignupModal={this.handleToggleSignupModal}
          handleProfileModal={this.handleToggleProfileModal}
        />
        <NavBar searchProduct={this.handleSearch} cartCount={(cart.data) ? cart.data.length: 0} />
        {displayLoginModal && <Modal classes="modal-width" hideModal={this.handleToggleLoginModal} >
          <LoginForm />
        </Modal>}
        {displaySignupModal && <Modal classes="modal-width" hideModal={this.handleToggleSignupModal}>
          <SignupForm />
        </Modal>}
        {displayProfileModal && <Modal classes="modal-width" hideModal={this.handleToggleProfileModal}>
          <UserProfileForm />
        </Modal>}
        <div className="container homepage mt-5">
          <div className="filter-side-bar">
            <FilterSideBar
              category={categories.rows}
              department={departments}
              selectedProduct={this.handleFilterProduct}
            />
          </div>
          <div className="product">
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
          </div>
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
    cart
  } = state;

  return {
    categories,
    departments,
    products,
    cart
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
