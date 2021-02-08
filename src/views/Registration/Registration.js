import "./Registration";

const Registration = () => (
  <div className="modal__reg">
    <div className="modal__reg-dialog">
      <div className="modal__reg-header">
        <h3 className="modal__reg-itle">Регистрация</h3>
        <button type="reset" form="form" className="close">
          &times;
        </button>
      </div>
      <div className="modal__reg-body">
        <form action="account.html" target="_blank" id="form">
          <p className="modal__input-title">Введите E-mail:</p>
          <input
            className="modal__reg-item "
            type="text"
            name="login"
            placeholder="E-mail:"
            required
          />
          <p className="modal__input-title">Введите пароль:</p>
          <input
            className="modal__reg-item "
            type="password"
            name="password"
            placeholder="Пароль:"
            required
          />
          <p className="modal__reg-title">Подтвердите пароль:</p>
          <input
            className="modal__reg-item "
            type="password"
            name="password"
            placeholder="Пароль:"
            required
          />

          <button autofocus className="note__btn-modal">
            Создать профиль
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Registration;
