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

