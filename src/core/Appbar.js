import React from 'react';
import { Layout } from 'antd';
import logo from '../assets/images/logo.jpg';

const {Header} = Layout;

const Appbar = () => {
  return (
    <Header className='header'>
      <img className='logo' src={logo} alt="logo"/>
    </Header>
  );
};

export default Appbar;
