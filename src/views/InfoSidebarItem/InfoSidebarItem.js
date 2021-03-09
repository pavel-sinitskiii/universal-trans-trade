import "./InfoSidebarItem.css";

import { Link } from 'react-router-dom';

const InfoSidebarItem = (props) => (
  <Link to={props.href} class="sidebar__item-services">
    {props.title}
  </Link>
);

export default InfoSidebarItem;