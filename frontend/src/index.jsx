import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { hydrate, render } from 'react-dom';
import RouterApp from './router';
import 'normalize.css';
import './assets/styles/index.scss';

const rootElement = document.getElementById('approot');

if (rootElement.hasChildNodes()) {
    hydrate(<RouterApp />, rootElement);
} else {
    render(<RouterApp />, rootElement);
}
