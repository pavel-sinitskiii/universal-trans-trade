import './Menu.css';

import { Link, BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const menuItems = [
  {
    text: 'Услуги',
    to: '/services/services',
  },
  {
    text: 'Автомобили',
    to: '/car-park/car-park'
  },
  {
    text: 'О Компании',
    to: '/about-us/about-us',
  },
  {
    text: 'Контакты',
    to: '/contacts/contacts',
  },
];

const Menu = () => (
  <nav className='menu__head'>
    <ul className='menu__head-list'>
      {menuItems.map((item, index) => (
        <li className='menu__head-list__item' key={index}>
          <Link to={item.to} className='menu__head-list__link'>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
