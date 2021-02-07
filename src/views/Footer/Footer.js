import './Footer.css'

const Footer = () => (
  <footer className="footer">
  <div className="container">
    <div className="footer__items">
      <div className="logo">
        <a href="index.html" className="header__left">
          <p>UNIVERSALTRANSTRADE</p>
        </a>
      </div>
      <div className="footer__contacts">
        <div className="footer__contacts-info">
          <p className="footer__contacts-info__phone">+7 (999) 999-99-99</p>
          <p className="footer__contacts-info__address">
            г.Москва, Перовский проезд, д.54
          </p>
        </div>
      </div>
      <div className="footer__menu">
        <nav className="menu__items">
          <ul className="menu__list">
            <li className="menu-item w-100">
              <a href="index.html" className="menu__item-link__footer">
                Главная
              </a>
            </li>
            <li className="menu-item w-100">
              <a href="services.html" className="menu__item-link__footer">
                Услуги
              </a>
            </li>
            <li className="menu-item w-100">
              <a href="#" className="menu__item-link__footer">
                О компании
              </a>
            </li>
            <li className="menu-item w-100">
              <a href="#" className="menu__item-link__footer">
                Цены
              </a>
            </li>
            <li className="menu-item w-100">
              <a href="#" className="menu__item-link__footer">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div className="copy">&copy 2021 UNIVERSALTRANSTRADE</div>
</footer>
)

export default Footer;