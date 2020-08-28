import camelCase from 'lodash/camelCase';
import * as canvasTypes from 'redux/actionTypes/canvas';


const actions = {};
Object.values(canvasTypes).forEach(type => {
  actions[camelCase(type)] = payload => ({ type, payload });
});

export default actions;