# Node.js Bug: Masked Division by Zero

This repository demonstrates a subtle bug in JavaScript code where a division by zero is masked by returning 0 when both inputs are 0.  The intended behavior is to either return an error or handle the case appropriately.

## Bug Description

The function `myFunction` is designed to divide `a` by `b`. However, if both `a` and `b` are 0, it returns 0 instead of signaling an error, potentially leading to unexpected behavior in other parts of the application.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the output. The function will return 0 when both inputs are 0, instead of an error.

## Solution

The `bugSolution.js` file provides a corrected version of the code that throws an error when division by zero occurs or returns NaN when there is no division by zero.

## Additional Notes

This type of bug can be hard to detect because it doesn't immediately crash the program but might cause subtle errors further down the line. It highlights the importance of robust error handling in production code.