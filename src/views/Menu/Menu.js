import "./Menu.css";

const menuItems = [
  {
    text: "О нас",
    link: "#",
  },
  {
    text: "Услуги",
    link: "#",
  },
  {
    text: "Цены",
    link: "#",
  },
  {
    text: "Контакты",
    link: "#",
  },
];

const Menu = () => (
  <nav className="menu__head">
    <ul className="menu__head-list">
      {menuItems.map((item, index) => (
        <li className="menu__head-list__item" key={index}>
          <a href={item.link} className="menu__head-list__link">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
