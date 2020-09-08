import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { MENU_ITEMS } from 'constants/menu';
import * as MenuIcons from 'shared/icons/MenuIcons';
import styles from './index.module.scss';

const MenuItem = memo(({ name, value, selectedMenuItem, onClick }) => {
  const Icon =
    MenuIcons[`${upperFirst(camelCase(value))}Icon`] || MenuIcons.PenIcon;
  const handleMenuItemClick = () => {
    if(value === MENU_ITEMS.UNDO && selectedMenuItem.includes(value)) {
      onClick(`${value}${Date.now()}`);
    } else if(value === MENU_ITEMS.REDO && selectedMenuItem.includes(value)) {
      onClick(`${value}${Date.now()}`);
    } else if (selectedMenuItem === value) {
      onClick('');
    } else {
      onClick(value);
    }
  };
  return (
    <div
      className={cx(styles.menuItemWrapper, {
        [styles.active]:
          selectedMenuItem === value &&
          value !== MENU_ITEMS.CLEAR
      })}
      onClick={handleMenuItemClick}
    >
      <Icon className={styles.icon} />
      <div className={styles.name}>{value}</div>
    </div>
  );
});

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
