import "./Header.css";

import Container from "../Container/Container";

import Menu from "../Menu/Menu";

const Header = () => (
  <header class="header">
    <Container>
      <div class="header__items">
        <div class="logo">
          <a href="index.html" class="header__left">
            UNIVERSALTRANSTRADE
          </a>
        </div>
        <div class="header__right">
          <div class="contact">
            <p class="contact">+7 (999) 999-99-99</p>
          </div>
          <div class="contact">
            <p>г.Москва, Перовский пр-д, д.54</p>
          </div>
          <div class="btn">
            <a href="#" class="btn__link" id="cart-btn">
              Личный кабинет
            </a>
          </div>
        </div>
      </div>
    </Container>
    <Menu />
  </header>
);

export default Header;
