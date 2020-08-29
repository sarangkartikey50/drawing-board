import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MENU_ITEMS, PEN_STROKE_WIDTH } from 'constants/menu';
import styles from './index.module.scss';

const MenuItem = ({ name, value, selectedMenuItem, onClick }) => {
  const handleMenuItemClick = () => {
    if(selectedMenuItem === value) {
      onClick('');
    } else {
      onClick(value);
    }
  }
  return (
    <div
      className={cx(styles.menuItemWrapper, {
        [styles.active]: selectedMenuItem === value,
      })}
      onClick={handleMenuItemClick}
    >
      {value}
    </div>
  );
};

const MenuItems = ({ selectedMenuItem, onMenuItemClick }) => {
  return (
    <div className={styles.container}>
      {Object.entries(MENU_ITEMS).map(([key, value]) => (
        <MenuItem
          key={key}
          name={key}
          value={value}
          selectedMenuItem={selectedMenuItem}
          onClick={onMenuItemClick}
        />
      ))}
    </div>
  );
};

MenuItems.propTypes = {
  selectedMenuItem: PropTypes.string,
  onMenuItemClick: PropTypes.func,
};

export default memo(MenuItems);
