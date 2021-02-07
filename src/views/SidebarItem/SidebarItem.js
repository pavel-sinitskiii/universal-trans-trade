import "./SidebarItem.css";

import { Link } from 'react-router-dom';

const SidebarItem = (props) => (
  <Link to={props.href} class="sidebar__item ">
    {props.title}
  </Link>
);

export default SidebarItem;