import React, { useEffect, useState } from "react";
import {
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { Web3AuthCore } from "@web3auth/core";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { useRouter } from "next/router";
import { FiCopy, FiDownload } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import RPC from "../web3RPC";

function RecoveryCode() {
  const router = useRouter();
  const [web3auth, setWeb3auth] = useState();
  const [provider, setProvider] = useState();
  const [copy, setcopy] = useState(false);
  const [download, setdownload] = useState(false);
  const clientId =
    "BK0ky54JYQP43tQWz3GJJ6dvAUTsPJ-3_PDJuDxMIOVXHx1E_SY9b-HVqlVFxZ0Zf_IRuAk_ZUBgEWHaxN0wcCA"; // get from https://dashboard.web3auth.io

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
  const rpc = new RPC(provider);
  const copyAccount = async () => {
    // console.log("address",address)
    const address = await rpc.getAccounts();
    navigator.clipboard.writeText(address);
    setcopy(true);
  };
  const downloadTxtFile = async () => {
    const address = await rpc.getAccounts();
    const element = document.createElement("a");
    const file = new Blob([address], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
    setdownload(true);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-start pt-20 ">
      <div className="w-[25%] p-6 text-white flex flex-col items-start space-y-5">
        <h1 className="font-bold text-2xl">save your recovery code</h1>
        <p className="font-light">
          you can use the code if you don't have access to your mail. Also, this
          is the general passowrd for the wallet. You can use this to login to
          your via WEB3.
        </p>
        <div className="border border-gray-700 p-6 bg-[#1e1f24] rounded-[12px]">
          <p className="font-light text-sm">
            you can use the code if you don't have access to your mail. Also,
            this is the general
          </p>
          <div className="flex justify-start space-x-3 mt-5">
            <div
              className="flex items-center font-bold text-sm space-x-3 border border-gray-700 px-5 py-1 bg-[#2c2c34] rounded-[12px]"
              onClick={() => copyAccount()}
            >
              {copy ? (
                <>
                  {" "}
                  <BsCheck2Circle className="text-green-400" />
                  <p className="text-green-400">copied</p>
                </>
              ) : (
                <>
                  <FiCopy />
                  <p>copy</p>
                </>
              )}
            </div>
            <div className="flex items-center font-bold space-x-3 border border-gray-700 px-5 py-1 bg-[#2c2c34] rounded-[12px]">
              {download ? (
                <>
                  <BsCheck2Circle className="text-green-400" />
                  <p className="text-green-400">Downloaded</p>
                </>
              ) : (
                <>
                  <FiDownload />
                  <p onClick={() => downloadTxtFile()}>download</p>
                </>
              )}
            </div>
          </div>
        </div>
        <button
          className="text-white bg-[#0361ff] rounded-[12px] py-2 w-[100%]"
          onClick={() => {
            router.push("/Feed");
          }}
        >
          Contiune to Amichita
        </button>
      </div>
    </div>
  );
}

export default RecoveryCode;
