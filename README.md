# Vibrator

A tiny CommonJS interface to the HTML5 vibrate API.

## Install

### File include

Download the latest vibrator.global.min.js from http://github.com/InventingWithMonster/vibrator and include it in your HTML document with a script tag, ie:

```html
<script src="/path/to/vibrator.global.min.js"></script>
```

This will load Vibrator to the globally-accessible variable `vibrator`.

### NPM (recommended)

First install Vibrator in your project root.

```  
$ npm install --save vibrator
```

Then include in your module using require().

```javascript
var vibrator = require('vibrator');
```

## Use

### Vibrate

Vibrator simply offers a way of calling `window.navigator.vibrate` without having to check whether it exists every time. As such, 

```javascript
window.navigator.vibrate(500);
window.navigator.vibrate([500, 100, 300]);
```

and

```javascript
vibrator(500);
vibrator([500, 100, 300]);
```

are identical. 

### Stop vibration

To stop vibration early, we offer a helper method, `stop`:

```javascript
vibrator.stop();
```
