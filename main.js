var digitEasing1 = new EasingPlayer(
  document.querySelectorAll('.rect__square')[0],//htmlNode
  'innerHTML',   //htmlNode['innerHTML']
  0,    //start prop
  95,   // end prop
  15000, // duration time
  easeOutQuart // timingFunction
)
digitEasing1.preffix = '+'
digitEasing1.run()



var digitEasing2 = new EasingPlayer(
  document.querySelectorAll('.rect__square')[1],
  'innerHTML',
  0,
  18,
  5000,
  linearTween
);
digitEasing2.preffix = '+';
digitEasing2.run();


function easeInOutQuart (t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

function linearTween (t, b, c, d) {
  return c*t/d + b;
};

function easeOutQuart (t, b, c, d) {
	t /= d;
	t--;
	return -c * (t*t*t*t - 1) + b;
};

//// more funvtions on http://gizma.com/easing/
