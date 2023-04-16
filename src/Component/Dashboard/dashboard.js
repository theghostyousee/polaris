import React, { useState }  from "react";
import './dashboard.css'
import Coin from "../../Media/coin.svg";
import Dollars from "../../Media/dollars.svg";
import Pourcentage from "../../Media/percentage.svg";
import Wallet from "../../Media/wallet.svg";
import Panel from "../../Media/panel.svg";
import Web3 from "web3";

function Dashboard() {


  return (
    <div className='dashboard-wrap'>
      <div className='top-dashboard'>
        <div className='welcome'>
          <p>Welcome!</p>
          <h1>This is your Paddas dashboard</h1>
        </div>
        <div className='rebase'>
          <p>Next Rebase</p>
          <h1>00 : 00 : 00</h1>
        </div>
      </div>
      <div className='card-dashboard'>

        <div className='card'>
          <div className='top-card'>
            <img src={Coin}></img>
          </div>
          <div className='bottom-card'>
            <p>Market Cap</p>
            <h2>$0</h2>
          </div>
        </div>
        <div className='card'>
          <div className='top-card'>
            <img src={Pourcentage}></img>
          </div>
          <div className='bottom-card'>
            <p>Current APY</p>
            <h2>160 000.02%</h2>
          </div>
        </div>
        <div className='card'>
          <div className='top-card'>
            <img src={Dollars}></img>
          </div>
          <div className='bottom-card'>
            <p>USD Market Price</p>
            <h2>$0</h2>
          </div>
        </div>

      </div>

      <div className='presale-banner'>
        <div className='presale-card'>
          <div className='presale-top'>
            <h2>Paddas Sale</h2>
          </div>
          <div className='input-buy'>
            <input type={'number'} placeholder='Amount of $ETH'></input>
          </div>
          <div className='info-presale'>
            <div className='presale-row'>
              <p>PADDAS Received</p>
              <p>0</p>
            </div>
            <div className='presale-row'>
              <p>Discount Price</p>
              <p>-10%</p>
            </div>
            <div className='presale-row'>
              <p>Max Wallet</p>
              <p>0</p>
            </div>
          </div>
          <div className='button-presale'>
            <button>Buy Discounted $PADDAS</button>
          </div>

        </div>
      </div>
      
      <div className='wallet-info'>
        <div className='top-wallet'>
          <img src={Wallet}></img>
        </div>
        <div className='wallet'>
          <div className='row'>
            <p>Your wallet balance</p>
            <p>0</p>
          </div>
          <div className='row'>
            <p>Next Reward Amount</p>
            <p>0</p>
          </div>
          <div className='row'>
            <p>Next Reward Yield</p>
            <p>0%</p>
          </div>
          <div className='row'>
            <p>ROI (5-Day Rate)</p>
            <p>0%</p>
          </div>
        </div>
        <div className='message'>
          <img src={Panel}></img>
          <p>We recommend connecting your wallet in order to see more information.</p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard