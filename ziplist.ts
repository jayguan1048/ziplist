function ziplist(data1: unknown[], data2: unknown[]): unknown[] {
  const combined: unknown[] = [];

  for (let i = 0; i < data1.length; i++) {
    combined.push(data1[i]);
    combined.push(data2[i]);
  }

  return combined;
}

console.log(ziplist(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]

function ziplistTheFunctionalWay(data1: unknown[], data2: unknown[]): unknown[] {
  const combined: unknown[] = [];
  data1.forEach((value, index) => {
    combined.push(value);
    combined.push(data2[index]);
  });
  return combined;
}

console.log(ziplistTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // Output: [['a', 1], ['b', 2], ['c', 3]]
