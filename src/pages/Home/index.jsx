import React, { Component } from 'react';
import TopNav from '../../component/presentation/TopNav';
import NavBar from '../../component/presentation/NavBar';

class Home extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <NavBar />
        Home Page
      </div>
    )
  }
}

export default Home;
