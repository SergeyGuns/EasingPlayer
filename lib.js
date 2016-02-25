// var timer;
var EasingPlayer = class {
  constructor(elem, elemProp, from, to, duration, timingFunction) {
    this.elem     = elem
    this.elemProp = elemProp;
    this.from     = from;
    this.to       = to;
    this.duration = duration;
    this.preffix = '';
    this.suffix  = '';
    this.timingFunction = timingFunction
  }

  run() {
    var start   =  new Date().getTime();
    var timer = setInterval( function() {

      var time = new Date().getTime() - start;
      var x = this.timingFunction(time, this.from, this.to - this.from, this.duration);
      console.log(Math.round(x));
      this.elem[this.elemProp] = this.preffix + Math.round(x) + this.suffix;
      if (time >= this.duration) clearInterval(timer);

    }.bind(this), 1000 / 30)

  }

};


//// more timing functions on http://gizma.com/easing/
