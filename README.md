# IOTA Identity Javascript Workshop

This workshop shows the usage of the IOTA Identity library.

It uses NodeJS and the WASM binding of [identity.rs](https://github.com/iotaledger/identity.rs).

The WASM (WebAssembly) are packed into an npm module and can be installed via [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) and runs in NodeJS and in the Browser.


## Run examples
To run the examples, be sure you already have installed nodejs, clone the repo and run the code!
```bash
git clone https://github.com/huhn511/iota-identity-js-workshop
cd iota-identity-js-workshop
npm install
node src/01_hello_world.js
```



## Create DID and DID Document
This example shows you, how to create a `keypair`, a `DID` and a `DID Document`
```
node src/02_create_did_and_doc.js
```

## Publish a DID Document to the tangle
Here you will sign the `DID Document` with your key and publish it to the Tangle.
```
node src/03_publish_to_tangle.js
```

## Fetch a DID Document
This example fetches a published DID Document by the given DID. 
In this example, we use Alice DID `did:iota:main:Em2GPqpBiHQkpC7MKai8mTGbzNE2DmNSuKUcbmypoqn6` and we can verify the DID Document.
```
node src/04_fetch_and_verify.js
```

If this example DID not works, please use your published DID from the example above.

