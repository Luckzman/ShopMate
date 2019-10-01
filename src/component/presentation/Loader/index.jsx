import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.scss';

/**
 * @description Reusable PageLoader Component
 * @returns {JSX}
 */
const PageLoader = () => {
  return (
    <div className="page-loader">
      <Loader
        type="ThreeDots"
        color="#ff4363"
        height={100}
        width={100}
      />
    </div>
  )
};

/**
 * @description Reusable MiniLoader Component
 * @returns {JSX}
 */
const MiniLoader = () => {
  return (
    <div className="mini-loader">
      <Loader
        type="TailSpin"
        color="#ff4363"
        height={50}
        width={50}
      />
    </div>
  )
}

/**
 * @description Reusable smallLoader Component
 * @returns {JSX}
 */
const SmallLoader = () => {
  return (
    <div className="small-loader">
      <Loader
        type="ThreeDots"
        color="#fff"
        height={20}
        width={20}
      />
    </div>
  )
}

export { PageLoader, MiniLoader, SmallLoader };
