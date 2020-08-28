import * as canvasTypes from 'redux/actionTypes/canvas';

const initState = {
  init: false,
};

export default function(state = initState, { type, payload }) {
  switch(type) {
    case canvasTypes.CANVAS_INIT:
      return {
        ...state,
        init: true,
      };
    default:
      return state;
  }
}