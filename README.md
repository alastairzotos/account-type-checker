# Account type checker

Running the application:

```
npm start
```

### How it works

The function `accountTypeChecker` starts from the 2nd element of the array
and compares the balance to the previous element's balance. If it's the first
round of the loop, this value is stored in a variable.

For subsequent rounds, the difference is compared against the saved difference from the
first round. If at any point it changes, "A" is returned since the difference has varied.

At the end "B" is returned, indicating no change has been found.

In the case that the array has 0 or 1 elements, "B" is returned, and we don't need
any extra code for these edge-cases.

### Other considerations

This doesn't account for any `null` or `undefined` values or objects in the array, and assumes
the array elements all have the same shape. We could get around much of this at compile-time
using Typescript, and should probably have some try/catch blocks when using it.

I generally like writing functional over procedural code, however in this case procedural ended up offering
the simplest solution.

### Testing strategies

Ideally this would be tested with a variety of "A" cases and a variety of "B" cases, and with arrays of length 0 and 1.
