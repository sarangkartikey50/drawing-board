# CANVAS

The Canvas API provides a means for drawing graphics via JavaScript and the HTML `<canvas>` element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.

Eg, 

```HTML
  <canvas id='canvas'></canvas>
```
```javascript
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 50, 50);
```


```HTML
If your renderings seem distorted, try specifying your width and height attributes explicitly in the <canvas> attributes, and not using CSS. 

<canvas id='canvas' height='150' width='150'></canvas>
```


# Fallback Content

If canvas is not support by a browser then the content inside the canvas will be shownn instead of the canvas. For eg,

```HTML
<canvas id='canvas'>
  canvas is not support in your browser.
</canvas>
```

`</canvas>` is all requried unlike other tags.


# Drawing on canvas ([link](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes))

## 1. Rectangle

```javaScript
fillRect(x, y, width, height) // draws a filled rectangle
strokeRect(x, y, width, height) // draws a rectangular outline
clear(x, y, width, height) // clears the rectangular area making it transparent
```
## 2. Path

```javaScript
beginPath() // Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
closePath() // Adds a straight line to the path, going to the start of the current sub-path.
stroke() // Draws the shape by stroking its outline.
fill() // Draws a solid shape by filling the path's content area.
```

## 3. Moving the pen

```javaScript
moveTo(x, y) // Moves the pen to the coordinates specified by x and y.
```

## 4. Line

```javaScript
lineTo(x, y) // Draws a line from the current drawing position to the position specified by x and y.
```

## 5. Arcs

```javaScript
arc(x, y, radius, startAngle, endAngle, anticlockwise) // Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise (defaulting to clockwise).

arcTo(x1, y1, x2, y2, radius) // Draws an arc with the given control points and radius, connected to the previous point by a straight line.
```