import React from 'react'
import './join.css'
import {DiscordLogo,InstagramLogo,TwitterLogo,YoutubeLogo} from 'phosphor-react';
import ethereum from '../../img/join/lodge-eth.gif'
import usd from '../../img/join/lodge-usdc.gif'

const Join = () => {
return (
    <div className='join' style={{ color: 'white' }}>
        <img className='disappear' src={ethereum} alt="" />
        
        <div className='join-container'>
            <h1 className='joinh1'>JOIN US VIA</h1>
            <h1 className='discordh1'>DISCORD</h1>
            <h3>Invest and manage all your crypto and stocks at one place.</h3>
            <button>Join via Discord</button>
            <div className='socials disappear'>
                    <DiscordLogo size={63} />
                    <InstagramLogo size={63} />
                    <TwitterLogo size={63} />
                    <YoutubeLogo size={63} />
            </div>
    </div>
        <img className='disappear' src={usd} alt="" />
    </div>
)
}

export default Join
