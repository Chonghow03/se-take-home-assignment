import React from 'react';
import '../styles/BotControl.css';

const BotControl = ({ bots, increaseBot, decreaseBot }) => {
  return (
    <div className='bot-control'>
      <button className='bot-button' onClick={increaseBot}>+ Bot</button>
      <p className="bots-count">Active Bots: {bots.length}</p>
      <button className='bot-button' onClick={decreaseBot}>- Bot</button>
    </div>
  );
};

export default BotControl;
