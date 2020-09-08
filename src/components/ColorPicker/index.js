import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';

const HSLColorBox = memo(({ hue, saturation, lightness, onUpdateHsl }) => {
  const colorGrid = [];
  const handleColorBoxItemClick = (event) => {
    if (event.target.className.includes('colorBoxItem')) {
      const {
        saturation: newSaturation = saturation,
        lightness: newLightness = lightness,
      } = event.target.dataset;
      onUpdateHsl({
        hue,
        saturation: Number(newSaturation),
        lightness: Number(newLightness),
      });
    }
    event.stopPropagation();
  };
  for (let i = 100; i >= 0; i--) {
    for (let j = 0; j <= 100; j++) {
      colorGrid.push(
        <div
          key={`color-box-item-${i}-${j}`}
          className={cx(styles.colorBoxItem, {
            [styles.selected]: i === saturation && j === lightness,
          })}
          style={{
            backgroundColor: `hsl(${hue}, ${i}%, ${j}%)`,
          }}
          data-saturation={i}
          data-lightness={j}
        />
      );
    }
  }
  return (
    <div onClick={handleColorBoxItemClick} className={styles.colorBox}>
      {colorGrid}
    </div>
  );
});

HSLColorBox.propTypes = {
  hue: PropTypes.number,
  saturation: PropTypes.number,
  lightness: PropTypes.number,
  onUpdateHsl: PropTypes.func,
};

const HSLColorLine = memo(({ hue, saturation, lightness, onUpdateHsl }) => {
  const colorLine = [];
  const handleColorLineItemClick = (newHue) =>
    onUpdateHsl({ hue: newHue, saturation, lightness });
  for (let i = 0; i < 360; i++) {
    colorLine.push(
      <div
        key={`color-line-item-${i}`}
        className={cx(styles.colorLineItem, {
          [styles.selected]: hue === i,
        })}
        style={{ backgroundColor: `hsl(${i}, 100%, 50%)` }}
        onClick={() => handleColorLineItemClick(i)}
      />
    );
  }
  return <div className={styles.colorLine}>{colorLine}</div>;
});

HSLColorLine.propTypes = {
  hue: PropTypes.number,
  saturation: PropTypes.number,
  lightness: PropTypes.number,
  onUpdateHsl: PropTypes.func,
};

const ColorPicker = ({ selectedColor, onColorUpdate, hide }) => {
  return (
    <div className={cx(styles.container, {
      [styles.hide]: hide
    })}>
      <HSLColorLine {...selectedColor} onUpdateHsl={onColorUpdate} />
      <HSLColorBox {...selectedColor} onUpdateHsl={onColorUpdate} />
    </div>
  );
};

ColorPicker.propTypes = {
  selectedColor: PropTypes.object,
  onColorUpdate: PropTypes.func,
  hide: PropTypes.bool,
};

export default memo(ColorPicker);
