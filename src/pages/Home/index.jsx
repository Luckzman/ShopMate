import React, { Component } from 'react';
import TopNav from '../../component/presentation/TopNav';
import NavBar from '../../component/presentation/NavBar';
import FilterSideBar from '../../component/presentation/FilterSideBar';
// import ItemCard from '../../component/presentation/ItemCard';

class Home extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <NavBar />
        <div className="container homepage">
          <FilterSideBar className="filter-side-bar" />
          
        </div>
      </div>
    )
  }
}

export default Home;
