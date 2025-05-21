decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(/ {2}| /)
    .map((code) => MORSE_CODE[code] || ' ')
    .join('');
};
