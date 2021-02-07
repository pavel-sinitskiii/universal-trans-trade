import "./Header.css";

import Container from "../Container/Container";



const Header = () => (
  <header className="header">
    <Container>
      <div className="header__items">
        <div className="logo">
          <a href="index.html" className="header__left">
            UNIVERSALTRANSTRADE
          </a>
        </div>
        <div className="header__right">
          <div className="contact">
            <p className="contact">+7 (999) 999-99-99</p>
          </div>
          <div className="contact">
            <p>г.Москва, Перовский пр-д, д.54</p>
          </div>
          <div className="btn">
            <a href="#" className="btn__link" id="cart-btn">
              Личный кабинет
            </a>
          </div>
        </div>
      </div>
    </Container>
  
  </header>
);

export default Header;
