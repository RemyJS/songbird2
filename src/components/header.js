import React from 'react';

function Header(props) {
  console.log(props);
  return (
    <div className='header' >
      <div className='header__logo'></div>
      <div className='header__score'>{props.score}</div>
    </div>
  );
}

export default Header;