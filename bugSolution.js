```javascript
function myFunction(a, b) {
  if (a === 0 && b === 0) {
    throw new Error('Cannot divide 0 by 0');
  } else if (b === 0) {
    return NaN; // Indicate undefined result for division by zero
  }
  return a / b;
}
```