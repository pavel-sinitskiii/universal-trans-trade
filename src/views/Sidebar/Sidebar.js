import './Sidebar.css';

import SidebarItem from '../SidebarItem/SidebarItem';

const sidebarItems = [
  {
    title: 'Профиль',
    href: '/user',
  },
  {
    title: 'Оформить Заявку',
    href: '/request',
  },
  {
    title: 'Отказаться',
    href: '/refuse',
  },
  {
    title: 'Состояние Счёта',
    href: '/balance',
  },
  {
    title: 'Количество Заявок',
    href: '/quantity',
  },
  {
    title: 'Лицензионный договор',
  },
  {
    title: 'Перейти на главную страницу',
  },
];

const Sidebar = ({matchUrl}) => (
  <div class='sidebar'>
    <div class='sidebar__items'>
      {sidebarItems.map((item, index) => (
        <SidebarItem title={item.title} href={`${matchUrl}${item.href}`} key={index} />
      ))}
    </div>
  </div>
);

export default Sidebar;
