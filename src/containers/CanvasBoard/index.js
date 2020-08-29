import React, { useRef, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import canvasActions from 'redux/actions/canvas';
import styles from './index.module.scss';

const CanvasBoard = (props) => {
  const canvasRef = useRef();
  const dispatch = useDispatch();

  const [canvasHeight, setCanvasHeight] = useState(500);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [isDrawingLine, setIsDrawingLine] = useState(false);
  const { hue, saturation, lightness } = useSelector(
    (state) => state.menu.color
  );

  useLayoutEffect(() => {
    dispatch(canvasActions.canvasInit());
    setCanvasHeight(window?.innerHeight);
    setCanvasWidth(window?.innerWidth);
    if (canvasRef?.current) {
      const canvasElement = canvasRef.current;
      window.__DB_CANVAS_ELEMENT = canvasElement;
      if(canvasElement.getContext) {
        window.__DB_CANVAS_CONTEXT_2D = canvasElement.getContext('2d');
      }
    }
  }, [dispatch]);

  const getCanvasContext = () => {
    return window.__DB_CANVAS_CONTEXT_2D;
  };

  const drawLine = () => {
    const ctx = getCanvasContext();
    ctx.lineTo(...coordinates);
    ctx.stroke();
  }

  const handleMouseMoveEvent = (event) => {
    setCoordinates([event.clientX, event.clientY]);
    if(isDrawingLine) {
      drawLine();
    }
  };

  const handleMouseDownEvent = (event) => {
    setIsDrawingLine(true);
    const ctx = getCanvasContext();
    ctx.strokeStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(...coordinates);
  };
  
  const handleMouseUpEvent = (event) => {
    setIsDrawingLine(false);
    const ctx = getCanvasContext();
    ctx.closePath();
  };

  return (
    <canvas
      className={styles.canvas}
      ref={canvasRef}
      height={canvasHeight}
      width={canvasWidth}
      onMouseMove={handleMouseMoveEvent}
      onMouseDown={handleMouseDownEvent}
      onMouseUp={handleMouseUpEvent}
    >
      Canvas is not supported in this browser!
    </canvas>
  );
};

export default CanvasBoard;
