import React from 'react';
import '../styles/BotControl.css';

/**
 * BotControl Component
 * @param {Array} bots - An array representing the active bots in the system.
 * @param {Function} increaseBot - Function to increase the number of active bots.
 * @param {Function} decreaseBot - Function to decrease the number of active bots.
 * 
 * Displays the number of active bots and provides buttons to increase or decrease the bot count.
 */
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
