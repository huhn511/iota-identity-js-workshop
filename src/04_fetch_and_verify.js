// Run example:
// node src/04_fetch_and_verify

const identity = require('iota-identity-wasm-test/node')

const IOTA_CLIENT_CONFIG = {
    network: "main",
    node: "https://nodes.thetangle.org:443",
  }

async function run() {

  // Published Alice DID
  let alice_did = "did:iota:main:Em2GPqpBiHQkpC7MKai8mTGbzNE2DmNSuKUcbmypoqn6"

  console.log("Fetch and resolve DID: ", alice_did)
  let res = await identity.resolve(alice_did, IOTA_CLIENT_CONFIG)
  
  let document = identity.Doc.fromJSON(res.document)
  console.log("Verify Document: ", document.verify())
  console.log("Document was created at: ", document.proof.created)
}
  
run()