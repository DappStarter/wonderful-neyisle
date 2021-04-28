require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar punch grace slender fresh summer'; 
let testAccounts = [
"0x5d5a44f97f15ff0c6812bdabf05db667d4428c65cd525a26b2febed60ab0f359",
"0x2edebac7173c18fdd88c73bc02e0d399d918531085259a8be3e52b585a380ecb",
"0x0b3a4243494ac7f3119f77d5d633a8c26d08ebe009cf2d01131ebc9f67404b6c",
"0x11bf3f139873a98c6aefad9321e755b57f3e76771ebf3304c9aaf88bb910befb",
"0x51a9776de645d905ee6606a30c11342b73d8447c09343f634f0c2e79971e7116",
"0x88ec5b2bde8273bad7c1c68366d71c928b3c0aaacbb5c0245737f57434b9a109",
"0x7869eba63630c1bcbac2f4d36084666fd0af953e9acf123e73a90c579d75df4d",
"0x75b2248e96bded9cf5974456abee989a8a5b6e403b3d135996f00f62f030a43f",
"0x51bb0ad52ba8011396becebfe18f62a569fe717462dfd69b18260d7596383d2f",
"0x628749e8730bdbb57804870bacde9f306c60293552e2505c6f89c1a923cee9cb"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
