require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain huge include enrich surge general'; 
let testAccounts = [
"0xfb7247de98eb0571e0039572d2b06df91d71732f59d020685e19fb4e5947bb64",
"0xae2959b9ca28c8add47a43f78d5ccc7bcb5151e9a4eaa22d4ffe5694a36a4531",
"0x0d46f6eceac5f9211810d0d1efad79c17e80c79187e47baf727f022ba0fb7090",
"0xf1401b5e57c5fcc2e119d5f87da2b9537f725ad3c0e20febd1c2b8382f5f4c5c",
"0x5ed9500f2ddff8499a934c8327503e6ca535f2296dfdcf2dd3f909a6fdd5b7f1",
"0x9bc1c19ef468491c526ab6a859c92d842a9d0423bfef23fdbb21cec82a03a74e",
"0x1c370597d50469db027a17ad4ab65a74345287ab976423d1772d4dfc9434465a",
"0x9c19bb40ffbc9c30cce55365bbfde7095573cbc317112d530e2d794113f02d31",
"0x152c04ddd72d34711d7ef1d4912a4b5ac3c19aad1e7cffe7723843c9f008a510",
"0xef69afdcdfcabfe6534c99d4c16f2756b59a305984aeb9ddd087e40e2bee65cf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


