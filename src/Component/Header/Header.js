import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Media/logs.svg";
import Discord from "../../Media/discord.svg";
import App from "../../Media/app.svg";
import Athena from "../../Media/athena.png";
import Web3 from "web3";
import { useNavigate, Route } from "react-router-dom";

function Header() {
  const [connected, setConnected] = useState(false);
  const [shortAddress, setShortAddress] = useState("");

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        if (chainId !== "0x144") {
          // Prompt the user to switch to the zkSync Era Mainnet
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x144" }],
          });
        }
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnected(true);
        const shortAddress = `${accounts[0].substring(
          0,
          6
        )}...${accounts[0].substring(accounts[0].length - 4)}`;
        setShortAddress(shortAddress);
        console.log("Connected to MetaMask with account:", shortAddress);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Please install MetaMask");
    }
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="header-wrap">
        <img onClick={handleClick} src={Logo}></img>

        <div className="social-header">
          <img src={Discord}></img>
          <button onClick={connectMetaMask}>
            {connected ? shortAddress : "Connect Wallet"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
