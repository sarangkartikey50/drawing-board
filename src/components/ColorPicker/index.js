import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';

const HSLColorBox = ({ hue, saturation, lightness, onUpdateHsl }) => {
  const colorGrid = [];
  const handleColorBoxItemClick = (saturation, lightness) => {
    onUpdateHsl({ hue, saturation, lightness });
  }
  for (let i = 100; i >= 0; i--) {
    for (let j = 0; j <= 100; j++) {
      colorGrid.push(
        <div
          key={`color-box-item-${i}-${j}`}
          className={cx(styles.colorBoxItem, {
            [styles.selected]: (i === saturation && j === lightness)
          })}
          style={{
            backgroundColor: `hsl(${hue}, ${i}%, ${j}%)`,
          }}
          onClick={() => handleColorBoxItemClick(i, j)}
        />
      );
    }
  }
  return <div className={styles.colorBox}>{colorGrid}</div>;
};

HSLColorBox.propTypes = {
  hue: PropTypes.number,
  saturation: PropTypes.number,
  lightness: PropTypes.number,
  onUpdateHsl: PropTypes.func,
};

const HSLColorLine = ({ hue, saturation, lightness, onUpdateHsl }) => {
  const colorLine = [];
  const handleColorLineItemClick = newHue => onUpdateHsl({ hue: newHue, saturation, lightness });
  for (let i = 0; i < 360; i++) {
    colorLine.push(
      <div
        key={`color-line-item-${i}`}
        className={cx(styles.colorLineItem, {
          [styles.selected]: hue === i
        })}
        style={{ backgroundColor: `hsl(${i}, 100%, 50%)` }}
        onClick={() => handleColorLineItemClick(i)}
      />
    );
  }
  return <div className={styles.colorLine}>{colorLine}</div>;
};

HSLColorLine.propTypes = {
  hue: PropTypes.number,
  saturation: PropTypes.number,
  lightness: PropTypes.number,
  onUpdateHsl: PropTypes.func,
};

const ColorPicker = ({ selectedColor, onColorUpdate }) => {
  return (
    <div className={styles.container}>
      <HSLColorLine {...selectedColor} onUpdateHsl={onColorUpdate} />
      <HSLColorBox {...selectedColor} onUpdateHsl={onColorUpdate} />
      {/* <div className={styles.selectedColor} style={{ backgroundColor: `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)` }} /> */}
    </div>
  );
};

ColorPicker.propTypes = {
  selectedColor: PropTypes.object,
  onColorUpdate: PropTypes.func,
};

export default memo(ColorPicker);
