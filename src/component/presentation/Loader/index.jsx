import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.scss';

const PageLoader = () => {
  return (
    <div class="page-loader">
      <Loader
        type="ThreeDots"
        color="#ff4363"
        height={100}
        width={100}
      />
    </div>
  )
};

const MiniLoader = () => {
  return (
    <div class="mini-loader">
      <Loader
        type="TailSpin"
        color="#ff4363"
        height={50}
        width={50}
      />
    </div>
  )
}

const SmallLoader = () => {
  return (
    <div class="small-loader">
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
