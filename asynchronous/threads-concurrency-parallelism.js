var worker = new Worker('worker.js');
worker.postMessage('Hellloooo');

addEventListener('message');

const {spawn} = require('child_process');
console.log(spawn('git', ['stuff']));