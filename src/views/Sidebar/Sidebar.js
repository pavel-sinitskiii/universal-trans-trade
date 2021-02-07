import "./Sidebar.css";
import SidebarItem from "../SidebarItem/SidebarItem";

const sidebar = [
  {
    title: "Профиль",
  },
  {
    title: "Оформить Заявку",
  },
  {
    title: "Отказаться",
  },
  {
    title: "Состояние Счёта",
  },
  {
    title: "Количество Заявок",
  },
  {
    title: "Лицензионный договор",
  },
  {
    title: "Перейти на главную страницу",
  },
];

const Sidebar = () => (
  <div class="sidebar">
    <div class="sidebar__items">
      {sidebar.map((sidebar, index) => (
        <SidebarItem title={sidebar.title} key={index} />
      ))}
    </div>
  </div>
);

export default Sidebar;
