import React from "react";
import "./App.css";

import Header from "./views/Header/Header";
import Content from "./views/Content/Content";
import Services from "./views/Services/Services";
import Categories from "./views/Categories/Categories";
import Advanteges from './views/Advanteges/Advvanteges';
import Park from './views/Park/Park'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Content />

        <Services />

        <Categories />

        <Advanteges />

        <Park />


        <section class="contacts">
          <h3 class="section__title">Контакты</h3>
          <div class="container">
            <div class="contacts__text">
              <h3>UniversalTransTrade в Москве:</h3>
            </div>

            <div class="contacts__items">
              <div class="contacts__item">
                <div class="contacts__img-items">
                  <img src="/img/map.png" alt="" class="contacts__img-item" />
                </div>
                <div class="contacts__info">
                  <h3 class="contacts__info-title">Адрес :</h3>
                  <p class="contacts__info-text">
                    г.Москва, Перовский проезд, д.54
                  </p>
                </div>
              </div>

              <div class="contacts__item">
                <div class="contacts__img-items">
                  <img src="/img/call.png" alt="" class="contacts__img-item" />
                </div>
                <div class="contacts__info">
                  <h3 class="contacts__info-title">Телефон :</h3>
                  <p class="contacts__info-text">+7 (999) 999-99-99</p>
                </div>
              </div>

              <div class="contacts__item">
                <div class="contacts__img-items">
                  <img src="/img/clock.png" alt="" class="contacts__img-item" />
                </div>
                <div class="contacts__info">
                  <h3 class="contacts__info-title">Время работы :</h3>
                  <p class="contacts__info-text">
                    пн - пт: с 08:30 до 21:00,
                    <br />
                    сб - вс: с 10:00 до 18:00.
                  </p>
                </div>
              </div>

              <div class="contacts__item">
                <div class="contacts__img-items">
                  <img src="/img/mail.png" alt="" class="contacts__img-item" />
                </div>
                <div class="contacts__info">
                  <h3 class="contacts__info-title">E-mail :</h3>
                  <p class="contacts__info-text">
                    universaltranstrade@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="map">
          <div class="wrap__map">
            <script
              type="text/javascript"
              charset="utf-8"
              async
              src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acff40df89b07007da32d2c44e63ff892dee23acc84ff77ad06f7aee3c58b8a4d&amp;width=1230&amp;height=430&amp;lang=ru_RU&amp;scroll=false"
            ></script>
          </div>
        </section>

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

        <div class="modal">
          <div class="modal__dialog">
            <div class="modal__header">
              <h3 class="modal__title">Личный Кабинет</h3>
              <button type="reset" form="form" class="close">
                &times;
              </button>
            </div>
            <div class="modal__body">
              <form action="account.html" target="_blank" id="form">
                <input
                  class="modal__body-item "
                  type="text"
                  name="login"
                  placeholder="Логин:"
                  required
                />
                <input
                  class="modal__body-item "
                  type="password"
                  name="password"
                  placeholder="Пароль:"
                  required
                />
                <button autofocus class="note__btn-modal">
                  Войти
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
