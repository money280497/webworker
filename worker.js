this.onmessage = function (message) {
  console.log('message', message);
  this.postMessage('wrestle mania');
};
