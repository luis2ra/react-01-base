// Desarrollo de tarea formulada en video 41
import React from 'react';
import { render } from 'react-dom';  // render del DOM
import CounterApp from './CounterApp';
import './index.css';

console.log('init...');

const divRoot = document.querySelector('#root');

render( <CounterApp value = { 10 } />, divRoot );