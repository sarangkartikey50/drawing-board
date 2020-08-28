import React, { useRef, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import canvasActions from 'redux/actions/canvas';
import styles from './index.module.scss';

const CanvasBoard = (props) => {
  const canvasRef = useRef();
  const dispatch = useDispatch();

  const [canvasHeight, setCanvasHeight] = useState(500);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const init = useSelector(state => state.canvas.init);

  useLayoutEffect(() => {
    dispatch(canvasActions.canvasInit());
    setCanvasHeight(window?.innerHeight);
    setCanvasWidth(window?.innerWidth);
    if (canvasRef?.current) {
      const canvasElement = canvasRef.current;
      window.__DB_CANVAS_ELEMENT = canvasElement;
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    draw();  
  }, [canvasHeight, canvasWidth]);

  const draw = () => {
    const canvasElement = canvasRef.current;
    if(canvasElement.getContext) {
      const ctx = canvasElement.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    } else {
      //fallback code
    }
  }

  return (
    <canvas className={styles.canvas} ref={canvasRef} height={canvasHeight} width={canvasWidth}>
      Canvas is not supported in this browser!
    </canvas>
  );
};

CanvasBoard.propTypes = {};

export default CanvasBoard;
