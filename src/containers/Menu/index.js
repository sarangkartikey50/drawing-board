import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import menuActions from 'redux/actions/menu';
import ColorPicker from 'components/ColorPicker';
import MenuItems from 'components/MenuItems';
import StrokeWidthPicker from 'components/StrokeWidthPicker';
import { MENU_ITEMS } from 'constants/menu';
import styles from './index.module.scss';

const Menu = (props) => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.menu.color);
  const selectedMenuItem = useSelector((state) => state.menu.selectedMenuItem);
  const selectedStrokeWidth = useSelector((state) => state.menu.selectedStrokeWidth);

  const handleColorUpdate = useCallback(
    (hsl) => dispatch(menuActions.updateColor(hsl)),
    [dispatch]
  );

  const handleMenuItemClick = useCallback(
    (item) => dispatch(menuActions.toggleMenuItem(item)),
    [dispatch]
  );

  const handleStrokeWidthItemClick = useCallback(
    (width) => dispatch(menuActions.updateStrokeWidth(width)),
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <MenuItems
        selectedMenuItem={selectedMenuItem}
        onMenuItemClick={handleMenuItemClick}
      />
      {selectedMenuItem === MENU_ITEMS.COLOR_PICKER && (
        <ColorPicker onColorUpdate={handleColorUpdate} selectedColor={color} />
      )}
      {selectedMenuItem === MENU_ITEMS.PEN && (
        <StrokeWidthPicker
          selectedColor={color}
          onStrokeWidthItemClick={handleStrokeWidthItemClick}
          selectedStrokeWidth={selectedStrokeWidth}
        />
      )}
    </div>
  );
};

export default Menu;
