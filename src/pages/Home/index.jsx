import React, { Component } from 'react';
import TopNav from '../../component/presentation/TopNav';
import NavBar from '../../component/presentation/NavBar';
// import ItemCard from '../../component/presentation/ItemCard';

class Home extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <NavBar />
      </div>
    )
  }
}

export default Home;
