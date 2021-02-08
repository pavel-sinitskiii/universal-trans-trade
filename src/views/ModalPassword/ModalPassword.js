import "./ModalPassword.css";

const ModalPassword = () => (
  <div className="modal__password">
    <div className="modal__password-dialog">
      <div className="modal__password-header">
        <h3 className="modal__password-title">Изменить пароль</h3>
        <button type="reset" form="form" className="close">
          &times;
        </button>
      </div>
      <div className="modal__password-body">
        <form action="account.html" target="_blank" id="form">
        <p className="modal__input-title">Введите текущий пароль:</p>
        <input
          className="modal__password-item "
          type="text"
          name="login"
          placeholder="Пароль:"
          required
        />
        <p className="modal__input-title">Введите новай пароль:</p>
        <input
          className="modal__password-item "
          type="password"
          name="password"
          placeholder="Новый пароль:"
          required
        />
        <p className="modal__input-title">Введите новай пароль еще раз:</p>
        <input
          className="modal__password-item "
          type="password"
          name="password"
          placeholder="Новый пароль:"
          required
        />

        <button autofocus className="note__btn-modal">
          Изменить
        </button>
      </form>
    </div>
  </div>
  </div>
);

export default ModalPassword;