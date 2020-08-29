import * as menuTypes from 'redux/actionTypes/menu';
import { PEN_STROKE_WIDTH } from 'constants/menu';

const initState = {
  color: {
    hue: 0,
    saturation: 100,
    lightness: 50,
  },
  selectedMenuItem: '',
  selectedStrokeWidth: PEN_STROKE_WIDTH[0],
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
    case menuTypes.UPDATE_STROKE_WIDTH:
      return {
        ...state,
        selectedStrokeWidth: payload,
      }
    default:
      return state;
  }
}