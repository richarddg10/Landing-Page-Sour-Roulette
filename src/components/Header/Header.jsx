import React, { useState } from 'react'
import './Header.css'

export function Header ({ onSendMessage }) {

  const [message, setMessage] = useState('')

  const onClickMessage = (msg) => {
    setMessage(msg)
    onSendMessage(msg)
  }

  return (
    <>
      <header>
        <img className='sour-logo' src='/logo.png' onClick={() => navigate('/')} />
        <div className='buttonsContainer'>
          <button className='home-button' onClick={() => onClickMessage('home')}>Home</button>
          <button className='about-us-button' onClick={() => onClickMessage('about-us')}>About us</button>
          <button className='description-button' onClick={() => onClickMessage('description')}>Description</button>
          <button className='rules-button' onClick={() => onClickMessage('rules')}>rules</button>
          <a href='https://sour-roulette-game-kappa.vercel.app/'>
            <button className='play-header-button'>Play</button>
          </a>
        </div>
      </header>
    </>
  )
}
