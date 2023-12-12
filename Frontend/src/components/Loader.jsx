import React from 'react';

import { loader } from '../assets/index';

const Loader = ({ title }) => (
  <div
    className="w-full flex justify-center items-center flex-col "
    style={{ height: '90vh' }}
  >
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">{title || 'Loading'}</h1>
  </div>
);

export default Loader;
