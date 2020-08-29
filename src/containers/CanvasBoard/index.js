import React, { useRef, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { MENU_ITEMS } from 'constants/menu';
import styles from './index.module.scss';

const CanvasBoard = (props) => {
  const canvasRef = useRef();
  const highlighterCanvasRef = useRef();

  const [canvasHeight, setCanvasHeight] = useState(500);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [isDrawingLine, setIsDrawingLine] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [isHighlighting, setIsHighlighting] = useState(false);
  const { hue, saturation, lightness } = useSelector(
    (state) => state.menu.color
  );
  const selectedMenuItem = useSelector((state) => state.menu.selectedMenuItem);
  const selectedStrokeWidth = useSelector((state) => state.menu.selectedStrokeWidth);

  useLayoutEffect(() => {
    setCanvasHeight(window.innerHeight);
    setCanvasWidth(window.innerWidth);
    if (canvasRef?.current) {
      const canvasElement = canvasRef.current;
      window.__DB_CANVAS_ELEMENT = canvasElement;
      if (canvasElement.getContext) {
        window.__DB_CANVAS_PEN_CONTEXT_2D = canvasElement.getContext('2d');
      }
    }
    if (highlighterCanvasRef?.current) {
      const canvasElement = highlighterCanvasRef.current;
      window.__DB_CANVAS_HIGHLIGHTER_ELEMENT = canvasElement;
      if (canvasElement.getContext) {
        window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D = canvasElement.getContext(
          '2d'
        );
      }
    }
    return () => {
      delete window.__DB_CANVAS_PEN_CONTEXT_2D;
      delete window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D;
      delete window.__DB_CANVAS_ELEMENT;
    };
  }, []);

  useLayoutEffect(() => {
    if(selectedMenuItem === MENU_ITEMS.CLEAR) {
      const ctx = getCanvasPenContext();
      const highlighterCtx = getCanvasHighlighterContext();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      highlighterCtx.clearRect(0, 0, highlighterCtx.canvas.width, highlighterCtx.canvas.height);
    }
  }, [selectedMenuItem]);

  const getCanvasPenContext = () => {
    return window.__DB_CANVAS_PEN_CONTEXT_2D ?? {};
  };

  const getCanvasHighlighterContext = () => {
    return window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D ?? {};
  };

  const initLine = () => {
    setIsDrawingLine(true);
    const ctx = getCanvasPenContext();
    const highlighterCtx = getCanvasHighlighterContext();
    highlighterCtx.clearRect(
      0,
      0,
      highlighterCtx.canvas.width,
      highlighterCtx.canvas.height
    );
    ctx.strokeStyle = `hsl(${hue} ${saturation}% ${lightness}%)`;
    ctx.lineWidth = selectedStrokeWidth;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(...coordinates);
  };

  const initEraser = () => {
    setIsErasing(true);
    const ctx = getCanvasPenContext();
    ctx.clearRect(coordinates[0] - 20, coordinates[1] - 20, 40, 40);
  };

  const initHighlighter = () => {
    setIsHighlighting(true);
    const ctx = getCanvasHighlighterContext();
    ctx.strokeStyle = `hsl(${hue} ${saturation}% ${lightness}%)`;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(...coordinates);
  };

  const drawLine = () => {
    const ctx = getCanvasPenContext();
    ctx.lineTo(...coordinates);
    ctx.stroke();
  };

  const drawHighlightedLine = () => {
    const ctx = getCanvasHighlighterContext();
    ctx.lineTo(...coordinates);
    ctx.stroke();
  };

  const disposeLine = () => {
    setIsDrawingLine(false);
    const ctx = getCanvasPenContext();
    ctx.closePath();
  };

  const disposeEraser = () => {
    setIsErasing(false);
  };

  const disposeHighlighter = () => {
    setIsHighlighting(false);
    const ctx = getCanvasHighlighterContext();
    ctx.closePath();
  };

  const handleMouseMoveEvent = (event) => {
    setCoordinates([event.clientX, event.clientY]);
    switch (selectedMenuItem) {
      case MENU_ITEMS.PEN:
        isDrawingLine && drawLine();
        break;
      case MENU_ITEMS.ERASER:
        isErasing && initEraser();
        break;
      case MENU_ITEMS.HIGHLIGHER:
        isHighlighting && drawHighlightedLine();
        break;
      default:
    }
  };

  const handleMouseDownEvent = (event) => {
    switch (selectedMenuItem) {
      case MENU_ITEMS.PEN:
        initLine();
        break;
      case MENU_ITEMS.ERASER:
        initEraser();
        break;
      case MENU_ITEMS.HIGHLIGHER:
        initHighlighter();
        break;
      default:
    }
  };

  const handleMouseUpEvent = (event) => {
    switch (selectedMenuItem) {
      case MENU_ITEMS.PEN:
        disposeLine();
        break;
      case MENU_ITEMS.ERASER:
        disposeEraser();
        break;
      case MENU_ITEMS.HIGHLIGHER:
        disposeHighlighter();
        break;
      default:
    }
  };

  return (
    <>
      <canvas
        className={cx(styles.canvas, {
          [styles.zIndex1]: selectedMenuItem !== MENU_ITEMS.HIGHLIGHER,
        })}
        ref={canvasRef}
        height={canvasHeight}
        width={canvasWidth}
        onMouseMove={handleMouseMoveEvent}
        onMouseDown={handleMouseDownEvent}
        onMouseUp={handleMouseUpEvent}
      >
        Canvas is not supported in this browser!
      </canvas>
      <canvas
        className={cx(styles.highlighterCanvas, {
          [styles.zIndex1]: selectedMenuItem === MENU_ITEMS.HIGHLIGHER,
        })}
        ref={highlighterCanvasRef}
        height={window.innerHeight}
        width={window.innerWidth}
        onMouseMove={handleMouseMoveEvent}
        onMouseDown={handleMouseDownEvent}
        onMouseUp={handleMouseUpEvent}
      >
        Canvas is not supported in this browser!
      </canvas>
    </>
  );
};

export default CanvasBoard;
