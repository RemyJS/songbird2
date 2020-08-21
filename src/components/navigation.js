import React from 'react';

function Navigation() {
  return (
    <nav className='nav'>
      <a href='#' className='nav__link nav__link_left nav__link_active'>Разминка</a>
      <a href='#' className='nav__link'>Воробьиные</a>
      <a href='#' className='nav__link'>Лесные птицы</a>
      <a href='#' className='nav__link'>Певчие птицы</a>
      <a href='#' className='nav__link'>Хищные птицы</a>
      <a href='#' className='nav__link nav__link_right'>Морские птицы</a>
    </nav>
  );
}

export default Navigation;