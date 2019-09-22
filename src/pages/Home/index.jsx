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
  getFilteredProductsByCategory,
} from '../../store/actions';
import './Home.scss';

class Home extends Component {

  // state = {
  //   productItem: '',
  // }

  // componentDidUpdate(prevProps) {
    // this.props.getFilteredProductsByCategory(this.state.productItem);
    // console.log(this.props.products);
    // }
    
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
  

  filterProduct = (item) => {
    this.props.getFilteredProductsByCategory(item);
  }

  render() {
    const {categories, departments, products} = this.props;
    // const { product } = this.state;
    console.log(products, 'products')
    return (
      <div>
        <TopNav />
        <NavBar />
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
    products
  } = state;

  return {
    categories,
    departments,
    products
  }
}

export default connect(mapStateToProps, {
  getAllCategories,
  getAllDepartments,
  getAllProducts,
  getFilteredProductsByCategory,
})(Home);
