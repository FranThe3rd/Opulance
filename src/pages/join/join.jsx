import React from 'react'
import './join.css'
import {DiscordLogo,InstagramLogo,TwitterLogo,YoutubeLogo} from 'phosphor-react';

const Join = () => {
return (
    <div className='join' style={{ color: 'white' }}>
            <h1>JOIN US VIA</h1>
            <h1>DISCORD</h1>
            <h3>Invest and manage all your crypto and stocks at one place.</h3>
            <button>Join via Discord</button>
            <div className='socials disappear'>
                    <DiscordLogo size={63} />
                    <InstagramLogo size={63} />
                    <TwitterLogo size={63} />
                    <YoutubeLogo size={63} />
            </div>
    </div>
)
}

export default Join
