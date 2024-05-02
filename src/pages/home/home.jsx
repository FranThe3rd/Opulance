import './home.css';
import { Users, DownloadSimple, Coins, Bank, CurrencyBtc, Money,CurrencyEth,CurrencyCircleDollar,ShieldCheck,Lock,Wallet, GooglePlayLogo} from 'phosphor-react';
import { useEffect } from 'react';
import mainLogo from '../../img/logo.png'


export const Home = () => {
     

    return (
        <div className="home">
            <div className='home-header'>
                <img src={mainLogo} alt="" />
                <h1>Opulance</h1>
            </div>

            <div className='home-grid'>

                <div className='home-info disappear'>
                    <h1>
                        Get the essential financial app for yourself
                    </h1>
                    <h3>By installing this application on your phone, you will benefit from excellent financial services</h3>

                    <div className='home-info-buttons'>
                        <button className='home-get-bttn'>
                            Get Started
                        </button>
                        <button className='home-download-bttn'>
                            <GooglePlayLogo color='white'  /> Download For IOS
                        </button>
                    </div>
                    <div className='home-active-info'>
                        <div className='active-grid'>
                            <h3> Active users</h3>
                            <h1><Users size={32} /> 4780+</h1>
                        </div>
                        <div className='active-grid'>
                            <h3> Downloaded</h3>
                            <h1><DownloadSimple size={32} /> 23k</h1>
                        </div>
                    </div>
                </div>



                <div className='home-app'>
                    <div className="home-item1 hidden"><h2><Money size={64} /></h2> <h3>Save Your Money</h3></div>
                    <div className="home-item2 hidden2"><h2><Coins size={64}/></h2><h3>Convert Coin To US Dollar</h3> </div>
                    <div className="home-item3 hidden3"><h2><Bank size={64} /></h2><h3>FDIC Insured</h3></div>
                    <div className="home-item4 hidden4"><h2><CurrencyBtc size={64} /></h2><h3>Invest In Bitcoin</h3></div>
                    <div className="home-item5 hidden5"><h2><CurrencyEth size={64} /></h2><h3>Invest In Ethereum </h3></div>
                    <div className="home-item6 hidden6"><h2><CurrencyCircleDollar size={64} /></h2><h3>Invest Your Cash</h3></div>
                    <div className="home-item7 hidden7"><h2>< ShieldCheck size={64} /></h2><h3>Most Trusted Bank</h3></div>
                    <div className="home-item8 hidden8"><h2><Lock size={64} /></h2><h3>Protect Your Investments</h3></div>
                    <div className="home-item9 hidden9"><h2><Wallet size={64} /></h2><h3>Withdraw Your Money</h3></div>


                </div>

            </div>
        </div>
    )
}

export default Home;