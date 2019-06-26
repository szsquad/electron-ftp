import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import App from './renderer/app';

render(<App />, document.getElementById('root'));
if (module.hot) module.hot.accept();
