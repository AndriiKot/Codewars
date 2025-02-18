function dnaStrand(dna) {
  const pair = { A: 'T', T: 'A', G: 'C', C: 'G' };
  return dna.replace(/\w/gi, (w) => pair[w]);
}

console.log(dnaStrand('ATTGC'));
