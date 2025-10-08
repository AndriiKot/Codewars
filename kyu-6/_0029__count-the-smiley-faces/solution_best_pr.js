function countSmileys(faces) {
  return faces.filter((face) => /^[;:](-|~)?[D)]$/.test(face)).length;
}

countSmileys([':D', ':~)', ';~D', ':)']); // 4
countSmileys([';]', ':[', ';*', ':$', ';-D']); // 1
countSmileys([]);
