import React from 'react';

function Navigation(props) {
  return (
    <ul className='nav'>
      <li className={`nav__link ${props.round === 0 ? 'nav__link_active':'' }`}>Разминка</li>
      <li className={`nav__link ${props.round === 1 ? 'nav__link_active':'' }`}>Воробьиные</li>
      <li className={`nav__link ${props.round === 2 ? 'nav__link_active':'' }`}>Лесные птицы</li>
      <li className={`nav__link ${props.round === 3 ? 'nav__link_active':'' }`}>Певчие птицы</li>
      <li className={`nav__link ${props.round === 4 ? 'nav__link_active':'' }`}>Хищные птицы</li>
      <li className={`nav__link ${props.round === 5 ? 'nav__link_active':'' }`}>Морские птицы</li>
    </ul>
  );
}

export default Navigation;