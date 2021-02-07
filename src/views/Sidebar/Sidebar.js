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
  },
  {
    title: 'Состояние Счёта',
  },
  {
    title: 'Количество Заявок',
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
