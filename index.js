function calculation(a, b, type) {
  if (type == 'sum') {
    return a + b;
  } else if (type == 'sub') {
    return a - b;
  } else if (type == 'mul') {
    return a * b;
  }
}
console.log(calculation(1, 2, 'sum'));
console.log(calculation(1, 2, 'sub'));
console.log(calculation(1, 2, 'mul'));
