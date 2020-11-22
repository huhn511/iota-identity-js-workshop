// Run example:
// node src/04_fetch_and_verify

const identity = require('iota-identity-wasm-test/node')

const IOTA_CLIENT_CONFIG = {
  network: "main",
  node: "https://nodes.thetangle.org:443",
}

async function run() {

  // Alice Credential, signed by Example Company (created in the example `05_create_vc.js` )
  let vc = `{"@context":"https://www.w3.org/2018/credentials/v1","id":"http://company.com/credentials/1337","type":["VerifiableCredential","CompanyCredential"],"credentialSubject":{"name":"Company","degree":{"name":"Credential of a Company","type":"CompanyCredential"}},"issuer":"did:iota:main:EL6PB5DnaqkhfWu3iz518MpWLKP84VMcoHGPrG7cVe3","issuanceDate":"2020-11-22T15:43:58Z","proof":{"type":"JcsEd25519Signature2020","verificationMethod":"did:iota:main:EL6PB5DnaqkhfWu3iz518MpWLKP84VMcoHGPrG7cVe3#authentication","created":"2020-11-22T15:43:58Z","signatureValue":"RmPiRwUL8HPYyk5MvVjdoh8yGW47HGRf97msr3AtmUydEjKnsnrxNT3yAR9WFMRRZ5zBP6jMeubsDCKuHZRM56Tv1t3jpYRuoYuukXAuYZt4JuJASCSoxqyPiLUC3DphTWD"}}`

  try {

    console.log("Credential Validation: ", await identity.checkCredential(vc, IOTA_CLIENT_CONFIG))
  } catch (error) {
    console.log("ERROR: ", error)
  }


}

run()