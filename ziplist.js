function ziplist(a, b) {
    var final = [];
    for (var i = 0; i < a.length; i++) {
        final.push(a[i]);
        final.push(b[i]);
    }
    return final;
}
console.log(ziplist(['a', 'b', 'c'], [1, 2, 3]));
function ziplistTheFunctionalWay(a, b) {
    var final = a.concat(b);
    final.forEach(function (value, index) {
        if (index % 2 === 0) {
            final[index] = a.shift();
        }
        else {
            final[index] = b.shift();
        }
    });
    return final;
}
console.log(ziplistTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
