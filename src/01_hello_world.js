const identity = require('iota-identity-wasm-test/node')

// Prints "Hello world" if identity is correct loaded
console.log((typeof identity == "object") ? "Hello world!" : "Error: WASM Module not loaded correctly." );
