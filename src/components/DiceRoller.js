import React, { useState } from 'react';

const DiceRoller = () => {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        style={{
          fontSize: '5em',
          margin: '20px auto',
          width: '100px',
          height: '100px',
          lineHeight: '100px',
          border: '2px solid #333',
          borderRadius: '12px',
          display: 'inline-block',
          backgroundColor: '#f7f7f7',
        }}
      >
        {diceValue}
      </div>
      <br />
      <button
        onClick={rollDice}
        style={{
          padding: '10px 20px',
          fontSize: '1.2em',
          cursor: 'pointer',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Roll Dice
      </button>
    </div>
  );
};

export default DiceRoller;
