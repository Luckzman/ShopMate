import React, {Component} from 'react';
import {Link} from 'react-router-dom'
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
              <Link className="btn btn-primary" to="/">View All</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="highlight">
          <div className="shop">
            <p>sale</p>
          </div>
          <div className="highlight-img">
            <img src="../../assets/images-bag.png" />
          </div>
          <div className="highlight-info">
            <div className="highlight-content">
              <h3>Vera Brandley</h3>
              <p>Carry the day in style with the extra large tote crafted in our chic B.B Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enough perfectly placed</p>
              <div className="banner-btn">
                <Link className="btn btn-inverse" to="/">View All</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="section-1">
            <div className="wow">
              <div className="text">
                <h1>WOW</h1>
                <p>Check WHAT!</p>
              </div>
            </div>
            <div className="men-img">
              <div className="overlay">
                <h1>MEN</h1>
              </div>
            </div>
          </div>
          
          <div className="section-2">
            <div className="img-showcase">
              <img src="../../assets/images-model3.png" />
            </div>
            <div className="reg-section">
                <h1>Let the Game begin</h1>
                <p>Registration is on - get ready for the open</p>
                <div className="banner-btn">
                  <Link className="btn btn-inverse" to="/home">View All</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Home;
