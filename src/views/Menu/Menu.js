import './Menu.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';

const menuItems = [
  {
    text: 'Услуги',
    href: '#services'
  },
  {
    text: 'Классы Автомобилей',
    href: '#categories'
  },
  {
    text: 'Преимущества',
    href: '#advantages',
  },
  {
    text: 'Контакты',
    href: '#сontacts',
  },
];

const Menu = () => (
  <nav className='menu__head'>
    <ul className='menu__head-list'>
      {menuItems.map((item, index) => (
        <li className='menu__head-list__item' key={index}>
          <AnchorLink href={item.href} className='menu__head-list__link'>
            {item.text}
          </AnchorLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
