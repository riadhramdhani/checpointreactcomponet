import React from 'react'

function Fullname({name}) {
  const handleClick = () => {
    alert(`The user's name is ${name}.`);
  };
  

  return (
    <div>
      <h1>{name}'s Profile</h1>
      <button onClick={handleClick}>Show Name</button>
    </div>
  );
}

  

export default Fullname