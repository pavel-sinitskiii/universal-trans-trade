import './Registration.css';

import { useState } from 'react';

const Registration = ({
  toggleIsRegistration,
  setModalError,
  submitSignupForm,
  modalError,
  modalLoading,
  closeModal
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setModalError('');
  };

  const onPasswordChange = (e) => {
    const value = e.target.value;
    setPasswordConfirmation(value);
    setModalError('');
  };
  
  const onPasswordConfirmationChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setModalError('');
  };

  const onSubmit = () => {
    submitSignupForm(email, password, passwordConfirmation);
  };
  return (
    <div className='modal__reg'>
      <div className='modal__reg-dialog'>
        <div className='modal__reg-header'>
          <h3 className='modal__reg-title'>Регистрация</h3>
          <button type='reset' form='form' className='close' onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className='modal__reg-body'>
          <p className='modal__input-title'>Введите E-mail:</p>
          <input
            className='modal__reg-item '
            type='text'
            name='login'
            placeholder='E-mail:'
            required
            onChange={onEmailChange}
          />
          <p className='modal__input-title'>Введите пароль:</p>
          <input
            className='modal__reg-item '
            type='password'
            name='password'
            placeholder='Пароль:'
            required
            onChange={onPasswordChange}
          />
          <p className='modal__input-title'>Подтвердите пароль:</p>
          <input
            className='modal__reg-item '
            type='password'
            name='password'
            placeholder='Пароль:'
            required
            onChange={onPasswordConfirmationChange}
          />
          {modalError ? (
            <p className='modal__error-text'>{modalError}</p>
          ) : null}
          <button autofocus className='note__btn-modal' disabled={modalLoading} onClick={onSubmit}>
            Создать профиль
          </button>
          <p className='modal__login-link' onClick={toggleIsRegistration}>Уже есть аккаунт? Войти</p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
