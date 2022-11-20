 
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3AuthCore } from "@web3auth/core";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../utilis/trpc";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import RPC from "../web3RPC";

const clientId =
  "BK0ky54JYQP43tQWz3GJJ6dvAUTsPJ-3_PDJuDxMIOVXHx1E_SY9b-HVqlVFxZ0Zf_IRuAk_ZUBgEWHaxN0wcCA"; // get from https://dashboard.web3auth.io

const EmailVertification = () => {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);

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
    console.log("user",user);
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();

    createMutation.mutate({
      email: user.email,
      name: user.name,
      image: user.profileImage,
      walletAccount: address
    });
  };
  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const router = useRouter();
  const [showUserName, setshowUserName] = useState(false);

  if(provider){
    router.push('/Feed')
  }


  return (
    <div className="w-screen h-screen flex justify-center items-start pt-20 ">
      <div className="w-[25%] p-6 text-white flex flex-col items-start space-y-5">
        {/* {showUserName ? (
          <> */}
        <h1 className="font-bold text-2xl">
          {showUserName
            ? "How can we call you?"
            : "We need your email for notifications"}
        </h1>
        <p className="font-light">
          {showUserName
            ? `Your nickname will be used across Amichita. You can always change
              it in the settings`
            : ` It won't be shared with anybody now will be used by us for
              anything besides helping you stay up to date`}
        </p>
        <div className="mt-5 mx-auto w-full w-full">
          <form className="space-y-6">
            {showUserName ? (
              <>
                {" "}
                <div>
                  <div className="mt-5">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      placeholder="Luke Skywalker"
                      className="appearance-none block w-full px-3 py-2 border border-gray-900 bg-[#2c2c34] rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-white bg-[#0361ff] rounded-[12px] w-full py-2"
                  >
                    Continue
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-[#2c2c34] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Use my ENS
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="text-white bg-[#0361ff] rounded-[3px] w-full py-2"
                  onClick={loginGoogle}
                >
                  Login with Google
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVertification;
