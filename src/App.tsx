import React from 'react';

import './App.less';
import MyHeader from './components/header/MyHeader';
import MyLayout from './components/mylayout/MyLayout';

const App = () => (
  <MyLayout>
    <MyHeader/>
  </MyLayout>
);

export default App;