import * as menuTypes from 'redux/actionTypes/menu';

const initState = {
  color: {
    hue: 0,
    saturation: 100,
    lightness: 50,
  },
  selectedMenuItem: '',
};

export default function menuReducer(state = initState, { type, payload }) {
  switch(type) {
    case menuTypes.UPDATE_COLOR:
      return {
        ...state,
        color: payload,
      };
    case menuTypes.TOGGLE_MENU_ITEM:
      return {
        ...state,
        selectedMenuItem: payload,
      };
    default:
      return state;
  }
}