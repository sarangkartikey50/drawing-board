import React, { memo } from 'react';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.container} contentEditable>
      drawing board
    </div>
  );
};

export default memo(Header);
