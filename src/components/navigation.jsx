import React from 'react';

function Navigation() {
  return (
    <ul className='nav'>
      <li className='nav__link nav__link_left nav__link_active'>Разминка</li>
      <li className='nav__link'>Воробьиные</li>
      <li className='nav__link'>Лесные птицы</li>
      <li className='nav__link'>Певчие птицы</li>
      <li className='nav__link'>Хищные птицы</li>
      <li className='nav__link nav__link_right'>Морские птицы</li>
    </ul>
  );
}

export default Navigation;