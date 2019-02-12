import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

/**
 * 页面路由配置
 */

const Routers = {
  // 首页
  '/Button': Loadable({
    loader: () => import(/* webpackChunkName: "Button" */'./pages/Button.jsx'),
    loading: Loading,
  }),
};

export default Routers;
