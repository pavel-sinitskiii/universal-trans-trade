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
          <Link to='/'>
              <div className='header__left'>UNIVERSALTRANSTRADE</div>
            </Link>
          </div>
          <div className='footer__contacts'>
            <div className='footer__contacts-info'>
              <p className='footer__contacts-info__phone'>+7 (499) 403-19-19</p>
              <p className='footer__contacts-info__address'>
              г. Москва, пер. Тетеринский, дом 4, стр. 2, пом. 34 
              </p>
            </div>
          </div>
          <div className='footer__menu'>
            <nav className='menu__items'>
              <AnchorLink href='#header' className='menu__item-link__footer'>
                <Link to='/'>Главная Страница</Link>
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
