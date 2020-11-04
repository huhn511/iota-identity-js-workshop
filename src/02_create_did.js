
const identity = require('iota-identity-wasm-test/node')

// Generate Keypairs
const alice_keypair = new identity.Key()
console.log("alice_keypair: ", alice_keypair)

// Create the DID
let alice_did = new identity.DID(alice_keypair.public)
console.log("alice_did: ", alice_did.toString(), alice_did.address)
