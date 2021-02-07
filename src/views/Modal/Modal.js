import "./Modal.css";

const Modal = () => (
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
);

export default Modal;