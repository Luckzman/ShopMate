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
        <img
          className="banner-img"
          src="https://res.cloudinary.com/dx0nauane/image/upload/v1574769999/images.jpg"
        />
      </div>
    </div>
  )
  
}

export default Home;
