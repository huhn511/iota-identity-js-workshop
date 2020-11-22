// Run example:
// node src/04_fetch_and_verify

const identity = require('iota-identity-wasm-test/node')

const IOTA_CLIENT_CONFIG = {
    network: "main",
    node: "https://nodes.thetangle.org:443",
  }

async function run() {


  const alice = await generateUser("Company", IOTA_CLIENT_CONFIG.network)  const company = await generateUser("Company", IOTA_CLIENT_CONFIG.network)

   // Prepare a credential subject indicating the degree earned by Alice
   let credentialSubject = {
    id: alice.did.id,
    name: alice.name,
    degree: {
      name: "Credential of a Company",
      type: "CompanyCredential",
    }
  }

   // Issue a signed `CompanyCredential` credential to Alice
   let vc = new identity.VerifiableCredential(company.doc, company.key, credentialSubject, "CompanyCredential", "http://company.com/credentials/1337");

   console.log("Verifiable Credential: ", JSON.stringify(vc))
 
}
  
run()



// helper function
async function generateUser(name, network) {
  try {
    const key = identity.Key.generateEd25519(network)
    const did = new identity.DID(key, network)
    const doc = new identity.Doc(identity.PubKey.generateEd25519(did, key.public))
    doc.sign(key)
    await identity.publish(doc, IOTA_CLIENT_CONFIG)
    return {
      doc,
      did,
      key,
      name,
    }
  } catch (error) {
    console.log(error);
  }
}