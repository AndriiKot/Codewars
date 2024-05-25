function collinearity1( x1,y1, x2,y2 ) {
  return x2*y1===y2*x1
}

function collinearity2( x1,y1, x2,y2 ) {
  return x1 * y2 - x2 * y1 === 0;
}