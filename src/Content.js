import React from 'react';

const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log('CLick it');
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e);
  };
  return (
    <main>
      {/* <img src={logo} className ="App-logo" alt="logo" /> */}
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Abdallah')}>Clicked It</button>
      <button onClick={(e) => handleClick3('Abdallah')}>Was It</button>
    </main>
  );
};

export default Content;
