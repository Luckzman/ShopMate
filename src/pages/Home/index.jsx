import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
// import {withRouter} from 'react-router-dom';
import Button from '../../component/presentation/Button';
import NavBar from '../../component/presentation/NavBar';
import './Home.scss';

const Home = (prop) => {
  console.log(prop)
  const redirectToCatalog = () => {

    prop.history.push('/catalog')
  }
  return(
    <div className="home">
      <NavBar
        showCartIcon={true}
      />
      <div className="banner">
        <div className="banner-text">
          <div className="banner-content">
            <h1>Shop For Quality Products at affordable prices</h1>
            <div className="banner-btn">
              <Link className="btn" to="/catalog">View All</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="highlight">
          <div>
            <img src="../../assets/images-bag.png" />
          </div>
          <div>
            <h1>Vera Brandley</h1>
            <p></p>
          </div>
        </div>

      </div>
    </div>
  )
  
}

export default Home;
