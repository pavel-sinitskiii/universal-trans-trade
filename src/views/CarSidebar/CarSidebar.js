import './CarSidebar.css';

import CarSidebarItem from '../CarSidebarItem/CarSidebarItem';

const carSidebarItems = [
  {
    title: 'Эконом класс',
    href: '/economy-class',
  },
  {
    title: 'Бизнес класс',
    href: '/business-class',
  },
  {
    title: 'Премиум класс',
    href: '/premium-class',
  },
  {
    title: 'Кроссоверы',
    href: '/crossovers',
  },
  {
    title: 'Микроавтобусы',
    href: '/minibuses',
  },

];

const CarSidebar = ({matchUrl}) => (
  <div class='sidebar__services'>
    <div class='sidebar__items-services'>
      {carSidebarItems.map((item, index) => (
        <CarSidebarItem title={item.title} href={`${matchUrl}${item.href}`} key={index} />
      ))}
    </div>
  </div>
);

export default CarSidebar;