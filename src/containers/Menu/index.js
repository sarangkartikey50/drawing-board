import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import menuActions from 'redux/actions/menu';
import ColorPallete from 'components/ColorPallete';
import MenuItems from 'components/MenuItems';
import { MENU_ITEMS } from 'constants/menu';
import styles from './index.module.scss';

const Menu = (props) => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.menu.color);
  const selectedMenuItem = useSelector((state) => state.menu.selectedMenuItem);

  const handleColorUpdate = useCallback(
    (hsl) => dispatch(menuActions.updateColor(hsl)),
    [dispatch]
  );

  const handleMenuItemClick = useCallback(
    (item) => dispatch(menuActions.toggleMenuItem(item)),
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <MenuItems
        selectedMenuItem={selectedMenuItem}
        onMenuItemClick={handleMenuItemClick}
      />
      {selectedMenuItem ===
        MENU_ITEMS.COLOR_PICKER && (
          <ColorPallete
            onColorUpdate={handleColorUpdate}
            selectedColor={color}
          />
        )}
    </div>
  );
};

export default Menu;
