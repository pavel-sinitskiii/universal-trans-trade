import './InfoSidebar.css';

import InfoSidebarItem from '../InfoSidebarItem/InfoSidebarItem';

const infoSidebarItems = [
  {
    title: 'Длительная аренда авто с водителем',
    href: '/with-a-driver',
  },
  {
    title: 'Корпоративное такси',
    href: '/taxi',
  },
  {
    title: 'Трансфер',
    href: '/transfer',
  },
  {
    title: 'Аренда автомобиля на свадьбу',
    href: '/wedding',
  },
  {
    title: 'Доставка сотрудников',
    href: '/delivery',
  },
  {
    title: 'Аренда без водителя',
    href: '/without-driver',
  },

];

const InfoSidebar = ({matchUrl}) => (
  <div class='sidebar__services'>
    <div class='sidebar__items-services'>
      {infoSidebarItems.map((item, index) => (
        <InfoSidebarItem title={item.title} href={`${matchUrl}${item.href}`} key={index} />
      ))}
    </div>
  </div>
);

export default InfoSidebar;