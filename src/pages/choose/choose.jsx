import React from 'react'
import './choose.css'
import { Users, DownloadSimple, Coins, Bank, CurrencyBtc, Money,CurrencyEth,CurrencyCircleDollar,ShieldCheck,Lock,Wallet, GooglePlayLogo,ShoppingCart,ChartLine,MagnifyingGlass} from 'phosphor-react';

import handMoney from '../../img/choose/source.gif'
const Choose = () => {
  return (
    <div className='choose'>

      <h1 className='disappear'>WHY CHOOSE US</h1>

      <div className='choose-grid'>

        <div className='choose-grid-left '>
        <div className='choose-item'>
            <Wallet size={65} />
            <div className='choose-item-text'>
              <h4>CONNECT YOUR WALLET</h4>
              <p>Use Trust Wallet, Metamask or to connect to the app.</p>
            </div>
          </div>
          <div className='choose-item'>
            <Coins size={65} />
            <div className='choose-item-text'>
              <h4>SELECT YOUR QUANTITY</h4>
              <p>Upload your crypto and set a title, description and price.</p>
            </div>
          </div>
          <div className='choose-item'>
            <ShieldCheck size={65} />
            <div className='choose-item-text'>
              <h4>CONFIRM TRANSACTION</h4>
              <p>Earn by selling your crypto on our marketplace.</p>
            </div>
          </div>
        </div>

        <div className='choose-grid-center'>
          <img className='' src={handMoney} alt="" />
        </div>

        <div className='choose-grid-right '>
          <div className='choose-item'>
            <ShoppingCart size={65} />
            <div className='choose-item-text'>
              <h4>RECEIVE YOUR OWN NFTS</h4>
              <p>Invest all your crypto at one place on one platform.</p>
            </div>
          </div>
          <div className='choose-item'>
            <ChartLine size={65} />
            <div className='choose-item-text'>
              <h4>TAKE A MARKET TO SELL</h4>
              <p>Discover, collect the right crypto collections to buy or sell.</p>
            </div>
          </div>
          <div className='choose-item'>
            <MagnifyingGlass size={65} />
            <div className='choose-item-text'>
              <h4>DRIVE YOUR COLLECTION</h4>
              <p>We make it easy to Discover, Invest and manage.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Choose
