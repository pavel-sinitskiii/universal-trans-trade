import "./CarSidebarItem.css";

import { Link } from 'react-router-dom';

const CarSidebarItem = (props) => (
  <Link to={props.href} class="sidebar__item-services">
    {props.title}
  </Link>
);

export default CarSidebarItem;