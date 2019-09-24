import React, { Component } from 'react';
import {connect} from 'react-redux';
import TopNav from '../../component/presentation/TopNav';
import NavBar from '../../component/presentation/NavBar';
import FilterSideBar from '../../component/presentation/FilterSideBar';
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
  

  filterProduct = (item, department) => {
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

  render() {
    const {categories, departments, products, cart} = this.props;
    console.log(this.props);
    return (
      <div>
        <TopNav cartCount={(cart.data) ? cart.data.length: 0} />
        <NavBar searchProduct={this.handleSearch} cartCount={(cart.data) ? cart.data.length: 0} />
        <div className="container homepage mt-5">
          <div className="filter-side-bar">
            <FilterSideBar
              category={categories.rows}
              department={departments}
              selectedProduct={this.filterProduct}
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
