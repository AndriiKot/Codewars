const duplicateEncode = (w) => w.replace(/./g, (c) => (new RegExp(`([${c}]).*\\1`, 'gi').test(w) ? ')' : '('));
