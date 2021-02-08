import { useState } from 'react';
import './Modal.css';

const Modal = ({
  onCloseClick,
  submitLoginForm,
  modalError,
  setModalError,
  modalLoading,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setModalError('');
  };

  const onPasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setModalError('');
  };

  const onSubmit = () => {
    submitLoginForm(email, password);
  };

  return (
    <div className='modal'>
      <div className='modal__dialog'>
        <div className='modal__header'>
          <h3 className='modal__title'>Личный Кабинет</h3>
          <button
            type='reset'
            form='form'
            className='close'
            onClick={onCloseClick}
          >
            &times;
          </button>
        </div>
        <div className='modal__body'>
          <input
            className='modal__body-item '
            type='text'
            name='login'
            placeholder='Логин:'
            required
            onChange={onEmailChange}
          />
          <input
            className='modal__body-item '
            type='password'
            name='password'
            placeholder='Пароль:'
            required
            onChange={onPasswordChange}
          />
          {modalError ? (
            <p className='modal__error-text'>{modalError}</p>
          ) : null}
          <button
            autofocus
            className='note__btn-modal'
            disabled={modalLoading}
            onClick={onSubmit}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;