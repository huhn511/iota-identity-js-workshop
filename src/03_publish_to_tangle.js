// Run example:
// node src/03_create_user

const identity = require('iota-identity-wasm-test/node')

const IOTA_CLIENT_CONFIG = {
  network: "main",
  node: "https://nodes.thetangle.org:443",
}

async function run() {
  // Generate a KeyPair, DID, and Document for Alice
  const alice = generateUser("Alice", IOTA_CLIENT_CONFIG.network)

  console.log("Created user: ", alice.name)

  // Sign all DID documents
  alice.doc.sign(alice.key)

  console.log("Signed Doc: ", alice.doc.verify())

  console.log("Publishing to the tangle...")
  // Publish the DID document
  console.log("Publish Result: https://explorer.iota.org/mainnet/transaction/" + await identity.publish(alice.doc.toJSON(), IOTA_CLIENT_CONFIG))
}

run()

// helper function
function generateUser(name, network) {
  const key = identity.Key.generateEd25519(network)
  const did = new identity.DID(key, network)
  const doc = new identity.Doc(identity.PubKey.generateEd25519(did, key.public))

  return {
    doc,
    did,
    key,
    name,
  }
}
