// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Pruebas para encript

import { ethers, providers, Contract } from "ethers";


var msg = "Hola Mundo";
var addr = "0x467967466e9e50B2Ae0B3e486B9b6A1355522Bb9";
var pub =
    "03a5048558b25fe9909cfcd7f93dab6d30b3574cee1d315d2174a2daba556d4df6";
var prvK = "daee52b98a8c578bba2546599c6db782716789fb1fab23c56fa461023bd43038";

export default async function handler(req, res) {
  let wallet = new ethers.Wallet(prvK);
  let flatSig = await wallet.signMessage(msg);

  console.log(wallet.address);
  console.log(flatSig);

  res.status(200).json({ name: flatSig })
}
