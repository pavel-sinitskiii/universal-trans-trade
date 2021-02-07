import './Footer.css';

import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  const getCopyrightText = () => ({ __html: '&copy 2021 UNIVERSALTRANSTRADE' });

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__items'>
          <div className='logo'>
            <a href='index.html' className='header__left'>
              <p>UNIVERSALTRANSTRADE</p>
            </a>
          </div>
          <div className='footer__contacts'>
            <div className='footer__contacts-info'>
              <p className='footer__contacts-info__phone'>+7 (999) 999-99-99</p>
              <p className='footer__contacts-info__address'>
                г.Москва, Перовский проезд, д.54
              </p>
            </div>
          </div>
          <div className='footer__menu'>
            <nav className='menu__items'>
              <AnchorLink href='#header' className='menu__item-link__footer'>
                <Link to='/'>Главная</Link>
              </AnchorLink>
            </nav>
          </div>
        </div>
      </div>
      <div className='copy' dangerouslySetInnerHTML={getCopyrightText()}></div>
    </footer>
  );
};

export default Footer;
