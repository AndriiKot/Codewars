{
  function wave(str) {
    return str.split('').reduce((acc, char, i) => {
      if (char === ' ') return acc;
      const waveStr = str.slice(0, i) + char.toUpperCase() + str.slice(i + 1);
      acc.push(waveStr);
      return acc;
    }, []);
  }
}
