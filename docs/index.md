# Welcome to BCL (Better Canvas Library)
## Getting Started: 
The BCL library works with "memory spaces" to store the various variables of an object created from the 2d context. For example: 
```html
<!DOCTYPE html>
  <body>
    <canvas id="dScreen"></canvas>
    <script src="drawIt.js"></script>
    <script>
      const myContext = new BCL("#dScreen", 1280, 720);
      myContext.CreateMemorySpaceRect({x: 50, y: 50, w: 50, h: 50, color: "#f00"})
      myContext.DrawSquare(0, type='filled')
    </script>
  </body>
</html>

```

