import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NetworkErrorMessage from '../../component/presentation/NetworkErrorMessage';
import Pagination from '../../component/presentation/Pagination';
import { PageLoader } from '../../component/presentation/Loader';
import TopNav from '../../component/presentation/TopNav';
import Cart from '../../component/container/Cart';
import Modal from '../../component/presentation/Modal';
import NavBar from '../../component/presentation/NavBar';
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
  getTotalAmount,
  getFilteredProductsByCategory,
  getFilteredProductsByDepartment,
} from '../../store/actions';
import './catalog.scss';

class Home extends Component {

  state = {
    displayLoginModal: false,
    displaySignupModal: false,
    displayProfileModal: false,
    displayShippingDetailsModal: false,
    displayCartModal: false,
    currentPage: null,
  }

  componentDidMount() {
    const {
      getAllCategories,
      getAllDepartments,
      getAllProducts,
      getTotalAmount
    } = this.props;
    
    getAllCategories();
    getAllDepartments();
    getAllProducts(1, 12);
    getTotalAmount()
  }
  
  /**
   * @method handleFilterByDepartment
   * @description This method filter products by department
   * @param {string} departmentId This is the filter parameter that is passed to the filter action dispatcher
   * @return {null}
   */
  handleFilterByDepartment = departmentId => {
    this.props.getFilteredProductsByDepartment(departmentId);
  }
  
  /**
   * @method handleFilterByCategory
   * @description This method filter products by category
   * @param {string} categoryId This is the filter parameter that is passed to the filter action dispatcher
   * @return {null}
   */
  handleFilterByCategory = categoryId => {
    this.props.getFilteredProductsByCategory(categoryId)
  }


  /**
   * @method handleSearch
   * @description This method returns searched products based on user input
   * @param {string} inputText This is the search parameter that is passed to the search action dispatcher
   * @return {null}
   */
  handleSearch = (inputText) => {
    const {searchProducts} = this.props;
    searchProducts(inputText);
  }
  
  /**
   * @method handleToggleLoginModal
   * @description This method toggles login modal
   * @return {null}
   */
  handleToggleLoginModal = () => {
    const { displayLoginModal } = this.state;
    this.setState(() => ({displayLoginModal: !displayLoginModal}))
  }
  
  /**
   * @method handleToggleSignupnModal
   * @description This method toggles signup modal
   * @return {null}
   */
  handleToggleSignupModal = () => {
    const { displaySignupModal } = this.state;
    this.setState(() => ({displaySignupModal: !displaySignupModal}));
  }
  
  /**
   * @method handleToggleProfileModal
   * @description This method toggles profile modal
   * @return {null}
   */
  handleToggleProfileModal = () => {
    const { displayProfileModal } = this.state;
    this.setState(() => ({displayProfileModal: !displayProfileModal}));
  }
  
  /**
   * @method handleToggleShippingDetailsModal
   * @description This method toggles shipping details modal
   * @return {null}
   */
  handleToggleShippingDetailsModal = () => {
    const { displayShippingDetailsModal } = this.state;
    this.setState(() => ({displayShippingDetailsModal: !displayShippingDetailsModal}));
  }
  
  
  /**
   * @method handleToggleCartModal
   * @description This method toggles cart modal
   * @return {null}
   */
  handleToggleCartModal = () => {
    const { displayCartModal } = this.state;
    this.setState(() => ({displayCartModal: !displayCartModal}));
  }
  
  /**
   * @method handlePageChange
   * @description This method handles pagination request
   * @return {null}
   */
  handlePageChange = data => {
    const { getAllProducts } = this.props;
    const { currentPage, pageLimit } = data;
    getAllProducts(currentPage, pageLimit);
  };

  render() {
    const {categories, departments, products, cart, customers} = this.props;
    const { displayLoginModal, displayCartModal, displaySignupModal, displayProfileModal, displayShippingDetailsModal } = this.state;
    console.log(cart)
    return (
      <div>
        <TopNav
          name={customers && (customers.isAuthenticated ? customers.customer.name : '')}
          departments={departments}
          selectDepartment={this.handleFilterByDepartment}
          cartCount={(cart.data) ? cart.data.length: 0}
          triggerLoginModal={this.handleToggleLoginModal}
          triggerSignupModal={this.handleToggleSignupModal}
          handleProfileModal={this.handleToggleProfileModal}
          handleShippingDetailsModal={this.handleToggleShippingDetailsModal}
          showModal={this.handleToggleCartModal}
          totalAmount={cart.total_amount}
        />
        <NavBar 
          categories={categories.rows}
          selectCategory={this.handleFilterByCategory}
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
          {products.error ? <NetworkErrorMessage /> : products.isLoading ? <PageLoader />  :
          <>
            <div className="paginate">
              <Pagination
                className="page"
                totalRecords={products.count}
                pageLimit={12}
                pageNeighbours={1}
                onPageChanged={this.handlePageChange}
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
                    id={product.product_id}
                  />)})
            }
          </div>
          </>}
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

Home.propTypes = {
  customers: PropTypes.object,
  categories: PropTypes.array.isRequired, 
  departments: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  getAllDepartments: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  getFilteredProductsByCategory: PropTypes.func.isRequired,
  getFilteredProductsByDepartment: PropTypes.func.isRequired,
  searchProducts: PropTypes.func.isRequired,
};

Home.defaultProps = {
  customers: {}
}

export default connect(mapStateToProps, {
  getAllCategories,
  getAllDepartments,
  getAllProducts,
  getFilteredProductsByCategory,
  getFilteredProductsByDepartment,
  searchProducts,
  getTotalAmount,
})(Home);
