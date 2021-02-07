import "./SidebarItem.css";

const SidebarItem = (props) => (
  <a href="account.html" class="sidebar__item ">
    {props.title}
  </a>
);

export default SidebarItem;