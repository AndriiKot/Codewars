const spinWords = (s) => s.replace(/\w{5,}/g, (w) => w.split('').reverse().join(''));
