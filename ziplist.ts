function ziplist(a: unknown[], b: unknown[]) {
  const final: unknown[] = [];

  for (let i = 0; i < a.length; i++) {
    final.push(a[i]);
    final.push(b[i]);
  }

  return final;
}

console.log(ziplist(['a', 'b', 'c'], [1, 2, 3]));

function ziplistTheFunctionalWay(a: unknown[], b: unknown[]) {
  const final: unknown[] = a.concat(b);

  final.forEach(function (value, index) {
    if (index % 2 === 0) {
      final[index] = a.shift();
    } else {
      final[index] = b.shift();
    }
  });

  return final;
}

console.log(ziplistTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
