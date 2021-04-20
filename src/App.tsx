import React from 'react';

import './App.less';
import Login from './components/login/Login';
// import MyHeader from './components/header/MyHeader';
import MyLayout from './components/mylayout/MyLayout';

const App = () => (
  <MyLayout>
    {/* <MyHeader/> */}
    <Login/>
  </MyLayout>
);

export default App;