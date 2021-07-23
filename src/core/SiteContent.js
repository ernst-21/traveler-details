import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const SiteContent = ({ children }) => {
  return (
    <Content
      className="site-layout"
      style={{ padding: '0'}}
    >
      <div
        className="site-layout-background"
      >
        {children}
      </div>
    </Content>
  );
};

export default SiteContent;
