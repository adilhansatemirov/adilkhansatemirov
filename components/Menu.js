import { useState, useRef } from 'react';
import jump from 'jump.js';

import menuItems from '../constants/menu';
import OutsideClickHandler from './utils/OutsideClickHandler';

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBackgroundRef = useRef(null);
  const menuMainRef = useRef(null);

  const handleOpenMenu = () => {
    setMenuOpen(true);
    menuBackgroundRef.current.classList.add('menu__background--open');
    menuMainRef.current.classList.add('menu__main--open');
  };

  const handleCloseMenu = () => {
    if (menuOpen) {
      menuBackgroundRef.current.classList.remove('menu__background--open');
      menuMainRef.current.classList.remove('menu__main--open');
      setMenuOpen(false);
    }
  };

  const handleSlideToSection = (target) => {
    handleCloseMenu();
    jump(`#${target}`);
  };

  return (
    <>
      <div className="container">
        <button className="menu__button" onClick={handleOpenMenu}>
          <span className="menu__button-bar"></span>
          <span className="menu__button-bar"></span>
          <span className="menu__button-bar"></span>
        </button>
      </div>
      <div ref={menuBackgroundRef} className="menu__background">
        <OutsideClickHandler handleClickOutside={handleCloseMenu}>
          <div ref={menuMainRef} className="menu__main">
            <button className="menu__logo" onClick={() => handleSlideToSection('adilkhanSatemirov')}>
              Adilkhan Satemirov
            </button>
            <ul className="menu__list">
              {menuItems.map((menuItem) => (
                <li className="menu__item" key={menuItem.id}>
                  <button className="menu__item-button" onClick={() => handleSlideToSection(menuItem.target)}>
                    {menuItem.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </OutsideClickHandler>
      </div>
    </>
  );
};
