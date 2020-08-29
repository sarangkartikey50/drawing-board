import React, { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { PEN_STROKE_WIDTH } from 'constants/menu';
import styles from './index.module.scss';

const StrokeWidthPicker = ({
  selectedColor,
  onStrokeWidthItemClick,
  selectedStrokeWidth,
}) => {
  return (
    <div className={styles.container}>
      {PEN_STROKE_WIDTH.map((width) => (
        <div
          key={`stroke-width-item-${width}`}
          className={cx(styles.itemWrapper, {
            [styles.active]: width === selectedStrokeWidth,
          })}
          onClick={() => onStrokeWidthItemClick(width)}
        >
          <div
            className={cx(styles.item)}
            style={{
              background: `hsl(${selectedColor.hue} ${selectedColor.saturation}% ${selectedColor.lightness}%)`,
              height: width,
            }}
          />
        </div>
      ))}
    </div>
  );
};

StrokeWidthPicker.propTypes = {
  selectedColor: PropTypes.object,
  onStrokeWidthItemClick: PropTypes.func,
  selectedStrokeWidth: PropTypes.number,
};

export default memo(StrokeWidthPicker);
