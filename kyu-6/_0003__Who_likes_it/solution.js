const likeTexts = ['no one likes this', '%s likes this', '%s and %s like this', '%s, %s and %s like this', '%s, %s and %s others like this'];

function formatString(template, ...args) {
  return template.replace(/%s/g, () => args.shift());
}

function likes(names) {
  const len = names.length;
  const answerTemplate = likeTexts[Math.min(len, 4)];

  return answerTemplate === likeTexts[4] ? formatString(answerTemplate, names[0], names[1], len - 2) : formatString(answerTemplate, ...names);
}
