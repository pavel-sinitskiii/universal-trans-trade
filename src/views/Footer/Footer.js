import './Footer.css'

const Footer = () => (
  <footer class="footer">
  <div class="container">
    <div class="footer__items">
      <div class="logo">
        <a href="index.html" class="header__left">
          <p>UNIVERSALTRANSTRADE</p>
        </a>
      </div>
      <div class="footer__contacts">
        <div class="footer__contacts-info">
          <p class="footer__contacts-info__phone">+7 (999) 999-99-99</p>
          <p class="footer__contacts-info__address">
            г.Москва, Перовский проезд, д.54
          </p>
        </div>
      </div>
      <div class="footer__menu">
        <nav class="menu__items">
          <ul class="menu__list">
            <li class="menu-item w-100">
              <a href="index.html" class="menu__item-link__footer">
                Главная
              </a>
            </li>
            <li class="menu-item w-100">
              <a href="services.html" class="menu__item-link__footer">
                Услуги
              </a>
            </li>
            <li class="menu-item w-100">
              <a href="#" class="menu__item-link__footer">
                О компании
              </a>
            </li>
            <li class="menu-item w-100">
              <a href="#" class="menu__item-link__footer">
                Цены
              </a>
            </li>
            <li class="menu-item w-100">
              <a href="#" class="menu__item-link__footer">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="copy">&copy 2021 UNIVERSALTRANSTRADE</div>
</footer>
)

export default Footer;