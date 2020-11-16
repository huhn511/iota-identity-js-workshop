
const identity = require('iota-identity-wasm-test/node')

// Generate Keypairs
const alice_keypair = identity.Key.generateEd25519("main")
console.log("alice_keypair: ", alice_keypair)

// Create the DID
const alice_did = new identity.DID(alice_keypair, "main")
console.log("alice_did: ", alice_did)

// Create the DID Document
const alice_doc = new identity.Doc(identity.PubKey.generateEd25519(alice_did, alice_keypair.public))
console.log("alice_doc: ", alice_doc)