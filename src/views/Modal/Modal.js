import "./Modal.css";

const Modal = () => (
  <div className="modal">
    <div className="modal__dialog">
      <div className="modal__header">
        <h3 className="modal__title">Личный Кабинет</h3>
        <button type="reset" form="form" className="close">
          &times;
        </button>
      </div>
      <div className="modal__body">
        <form action="account.html" target="_blank" id="form">
          <input
            className="modal__body-item "
            type="text"
            name="login"
            placeholder="Логин:"
            required
          />
          <input
            className="modal__body-item "
            type="password"
            name="password"
            placeholder="Пароль:"
            required
          />
          <button autofocus className="note__btn-modal">
            Войти
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Modal;