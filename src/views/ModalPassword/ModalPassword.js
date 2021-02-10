import './ModalPassword.css';

import { useState } from 'react';

const ModalPassword = ({ closeModal, setModalError, submitPasswordChangeForm, modalError }) => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

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
    submitPasswordChangeForm(password, passwordConfirmation);
  };

  return (
    <div className='modal__password'>
      <div className='modal__password-dialog'>
        <div className='modal__password-header'>
          <h3 className='modal__password-title'>Изменить пароль</h3>
          <button
            type='reset'
            form='form'
            className='close'
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className='modal__password-body'>
          <p className='modal__input-title'>Введите новай пароль:</p>
          <input
            className='modal__password-item '
            type='password'
            name='password'
            placeholder='Новый пароль:'
            required
            onChange={onPasswordChange}
          />
          <p className='modal__input-title'>Введите новай пароль еще раз:</p>
          <input
            className='modal__password-item '
            type='password'
            name='password'
            placeholder='Новый пароль:'
            required
            onChange={onPasswordConfirmationChange}
          />
          {modalError ? (
            <p className='modal__error-text'>{modalError}</p>
          ) : null}
          <button autofocus className='note__btn-modal' onClick={onSubmit}>
            Изменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPassword;
