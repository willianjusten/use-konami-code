# useKonamiCode

> A simple custom react hook to verify a sequence of typed keys from the user.

## Video 

[Video explaining how this hook was created - PtBr](https://youtu.be/EvR4RPBsHfE)

## How to use

```jsx
// without defined code and callback
const { sequence, rightSequence } = useKonamiCode();

const code = ["ArrowDown", "ArrowUp"];
const callback = () => console.log("Yeeeey");

// passing code and callback
const { sequence, rightSequence } = useKonamiCode(code, callback);
```

## Types

### Parameters

- `code`: _(Array)_ - a sequence of keys that should be verified. (default: `["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]`)
- `callback`: _(Function)_ - a function to run if the correct sequence is provided. (default: `() => {}`)

### Returns

- `sequence` _(Array)_: sequence of keys from the user.
- `rightSequence` _(Boolean)_: a boolean to indicate if the user typed the right sequence or not.
