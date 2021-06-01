function _drawClock() {
  let time = new Date().toLocaleTimeString();
  document.getElementById('clock').innerHTML = time
  setTimeout(_drawClock, 1000);
}

export class ClockController {
  constructor() {
    // console.log('clock controller');
    _drawClock()
  }
}
