/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { useEffect, useState } from "react";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";
import { Web3AuthCore } from "@web3auth/core";
import { useRouter } from "next/router";
import { CoinbaseAdapter } from "@web3auth/coinbase-adapter";

function Wallets() {
  const clientId =
    "BK0ky54JYQP43tQWz3GJJ6dvAUTsPJ-3_PDJuDxMIOVXHx1E_SY9b-HVqlVFxZ0Zf_IRuAk_ZUBgEWHaxN0wcCA"; // get from https://dashboard.web3auth.io
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3AuthCore({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x3",
          },
        });
        const metamaskAdapter = new MetamaskAdapter({
          clientId,
        });

        const coinbaseAdapter = new CoinbaseAdapter({
          clientId,
        });

        web3auth.configureAdapter(coinbaseAdapter);
        web3auth.configureAdapter(metamaskAdapter);
        setWeb3auth(web3auth);

        await web3auth.init();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const loginWalletMetaMask = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const metaMaskProvider = await web3auth.connectTo(WALLET_ADAPTERS.METAMASK);
    setProvider(metaMaskProvider);
  };
  const loginWalletCoinbase = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const coinbase = await web3auth.connectTo(WALLET_ADAPTERS.COINBASE);
    setProvider(coinbase);
  };

  if(provider){
    router.push('/EmailVertification')
    return(
      <>
        <p>User already singined in</p>
      </>

    )
  }
  return (
    <div className="w-screen h-screen flex justify-center items-start pt-20 ">
      <div className="w-[25%] p-6 text-white flex flex-col items-start space-y-5">
        <div className="mt-5 text-center">
          <p className="mb-5">Sing up with Wallet</p>
          <div className="w-[50%] rounded-[20px] flex flex-col lg:flex-row space-x-0 lg:space-x-10">
            <img
              src="https://www.svgrepo.com/show/331345/coinbase-v2.svg"
              className="h-25 w-25 rounded-[12px] border border-gray-700 bg-[#2c2c34] w-full"
              alt=""
              onClick={loginWalletCoinbase}
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
              className="h-25 w-25 rounded-[12px] border border-gray-700 bg-[#2c2c34] w-full"
              alt=""
              onClick={loginWalletMetaMask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallets;
