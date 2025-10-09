const rgb = (r, g, b) => [r, g, b].map((n) => (n >= 255 && 'FF') || (n <= 0 && '00') || n.toString(16).toUpperCase().padStart(2, 0)).join('');

console.log(rgb(255, 255, 255)); // "FFFFFF"
console.log(rgb(0, 0, 0)); // "000000"
console.log(rgb(3, 3, 3)); // "030303"
