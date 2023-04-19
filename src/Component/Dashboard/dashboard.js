import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Coin from "../../Media/coin.svg";
import Dollars from "../../Media/dollars.svg";
import Pourcentage from "../../Media/percentage.svg";
import Wallet from "../../Media/wallet.svg";
import Panel from "../../Media/panel.svg";
import Web3 from "web3";
import contractABI from "./contractABI.json";

function Dashboard() {
  const [amount, setAmount] = useState("");
  const [connected, setConnected] = useState(false);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnected(true);
        console.log("Connected to MetaMask with account:", accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Please install MetaMask");
    }
  };

  const handleMaxClick = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const value = web3.utils.fromWei(balance, "ether");
    const formattedValue = parseFloat(value).toFixed(1);

    setBalance(formattedValue);
  };

  const handleUnlockWallet = async () => {
    const web3 = new Web3(window.ethereum);
    const contractAddress = "0xc3CfaB0130aab0b4E9B34F72d46A9a839F1F84EF";
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const chainId = await window.ethereum.request({ method: "eth_chainId" });

    if (chainId !== "0x144") {
      // Prompt the user to switch to the zkSync Era Mainnet
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x144" }],
      });
    }
    const sender = (await web3.eth.getAccounts())[0];
    const value = web3.utils.toWei(amount, "ether");
    try {
      const result = await contract.methods.BuyPaddas().send({
        from: sender,
        value: value,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setStackValue(value * ETH_TO_STACK_RATIO);
  };

  useEffect(() => {
    handleMaxClick();
  }, []);

  return (
    <div className="dashboard-wrap">
      <div className="top-dashboard">
        <div className="welcome">
          <p>Welcome!</p>
          <h1>This is your Paddas dashboard</h1>
        </div>
        <div className="rebase">
          <p>Next Rebase</p>
          <h1>00 : 00 : 00</h1>
        </div>
      </div>
      <div className="card-dashboard">
        <div className="card">
          <div className="top-card">
            <img src={Coin}></img>
          </div>
          <div className="bottom-card">
            <p>Market Cap</p>
            <h2>$0</h2>
          </div>
        </div>
        <div className="card">
          <div className="top-card">
            <img src={Pourcentage}></img>
          </div>
          <div className="bottom-card">
            <p>Current APY</p>
            <h2>160 000.02%</h2>
          </div>
        </div>
        <div className="card">
          <div className="top-card">
            <img src={Dollars}></img>
          </div>
          <div className="bottom-card">
            <p>USD Market Price</p>
            <h2>$0</h2>
          </div>
        </div>
      </div>

      <div className="presale-banner">
        <div className="presale-card">
          <div className="presale-top">
            <h2>Paddas Sale</h2>
          </div>
          <div className="input-buy">
            <input
              type={"number"}
              placeholder="Amount of $ETH"
              value={amount}
              onChange={handleAmountChange}
            ></input>
          </div>
          <div className="info-presale">
            <div className="presale-row">
              <p>PADDAS Received</p>
              <p>0</p>
            </div>
            <div className="presale-row">
              <p>Discount Price</p>
              <p>-10%</p>
            </div>
            <div className="presale-row">
              <p>Max Wallet</p>
              <p>1.5 ETH</p>
            </div>
          </div>
          <div className="button-presale">
            {connected ? (
              <button onClick={handleUnlockWallet}>
                Buy Discounted $PADDAS
              </button>
            ) : (
              <button onClick={connectMetaMask}>Approve</button>
            )}
          </div>
        </div>
      </div>

      <div className="wallet-info">
        <div className="top-wallet">
          <img src={Wallet}></img>
        </div>
        <div className="wallet">
          <div className="row">
            <p>Your wallet balance</p>
            <p>0</p>
          </div>
          <div className="row">
            <p>Next Reward Amount</p>
            <p>0</p>
          </div>
          <div className="row">
            <p>Next Reward Yield</p>
            <p>0%</p>
          </div>
          <div className="row">
            <p>ROI (5-Day Rate)</p>
            <p>0%</p>
          </div>
        </div>
        <div className="message">
          <img src={Panel}></img>
          <p>
            We recommend connecting your wallet in order to see more
            information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
