import { Web3AuthCore } from "@web3auth/core";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import RPC from "../web3RPC";
import { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { trpc } from "../utilis/trpc";

import Link from "next/link";

const clientId =
  "BK0ky54JYQP43tQWz3GJJ6dvAUTsPJ-3_PDJuDxMIOVXHx1E_SY9b-HVqlVFxZ0Zf_IRuAk_ZUBgEWHaxN0wcCA"; // get from https://dashboard.web3auth.io

export default function Signup() {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  const router = useRouter();
  const createMutation = trpc.useMutation(["users.register-user"]);

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

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            network: "testnet",
            uxMode: "redirect",
            redirectUrl: `${window.location.origin}/RecoveryCode`,
            loginConfig: {
              google: {
                name: "Custom Google Auth Login",
                verifier: "prolist",
                typeOfLogin: "google",
                clientId:
                  "227331534133-jt5tbe1492lti0vackedtp6r73tm8mpo.apps.googleusercontent.com", //use your app client id you got from google
              },
            },
          },
        });
        
        web3auth.configureAdapter(openloginAdapter);
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

  const loginGoogle = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connectTo(
      WALLET_ADAPTERS.OPENLOGIN,
      {
        loginProvider: "google",
      }
    );
    setProvider(web3authProvider);
    const user = await web3auth.getUserInfo();
    createMutation.mutate({
      email: user.email,
      name: user.name,
      image: user.profileImage,
    });
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };

  const unloggedInView = (
    <div>
      <div className="w-screen h-screen flex justify-center items-center ">
        <div className="border border-gray-700 p-6 bg-[#1e1f24] rounded-[12px] ">
          <Link href='/Wallets'>
          <button className="text-white bg-[#0361ff] rounded-[12px] w-60 py-2">
            wallet Sign in
          </button>
          </Link> 
          <div className="relative flex py-5 items-center w-full ">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <button
            type="button"
            className="text-white bg-[#0361ff] rounded-[12px] w-60 py-2"
            onClick={loginGoogle}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );

  const loggedInView = (
    <div>
      <button onClick={getUserInfo} className="card">
        Get User Info
      </button>
      <button onClick={getChainId} className="card">
        Get Chain ID
      </button>
      <button onClick={getAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={getBalance} className="card">
        Get Balance
      </button>
      <button onClick={sendTransaction} className="card">
        Send Transaction
      </button>
      <button onClick={signMessage} className="card">
        Sign Message
      </button>
      <button onClick={getPrivateKey} className="card">
        Get Private Key
      </button>
      <button onClick={logout} className="card">
        Log Out
      </button>
      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}></p>
      </div>
    </div>
  );
  return <div className="grid">{provider ? loggedInView : unloggedInView}</div>;
}
