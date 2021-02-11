import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Account from './pages/Account';

import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Modal from './views/Modal/Modal';
import Registration from './views/Registration/Registration';
import ModalPassword from './views/ModalPassword/ModalPassword';
import ModalRequest from './views/ModalRequest/ModalRequest';

import { useAuth } from './contexts/AuthContext';

const App = () => {
  const {
    currentUser: user,
    login,
    logout,
    signup,
    updatePassword,
  } = useAuth();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isModalConfirmationOpened, setIsModalConfirmationOpened] = useState(
    false
  );
  const [modalError, setModalError] = useState('');
  const [modalLoading, setModalLoading] = useState(false);

  const onHeaderBtnClick = () => {
    if (!user) {
      setIsModalOpened(true);
    } else {
      logout();
    }
  };

  const toggleIsRegistration = () => {
    setIsRegistration(!isRegistration);
  };

  const closeModal = () => {
    setIsModalOpened(false);
    setIsRegistration(false);
    setIsChangePassword(false);
    setModalError('');
  };

  const submitLoginForm = async (email, password) => {
    if (!email || !password) {
      setModalError('Введите логин и пароль');
      return;
    }

    setModalLoading(true);
    const err = await login(email, password);

    if (err) {
      setModalError('Неверные логин или пароль. Попробуйте снова');
    } else {
      closeModal();
    }

    setModalLoading(false);
  };

  const submitSignupForm = async (email, password, passwordConfirmation) => {
    if (!email || !password || !passwordConfirmation) {
      setModalError('Введите логин, пароль и подтверждение пароля');
      return;
    }

    if (password !== passwordConfirmation) {
      setModalError('Подтверждение не совпадает с паролем');
      return;
    }

    if (password.length < 6) {
      setModalError('Пароль должен состоять из не менее чем 6 символов');
      return;
    }

    setModalLoading(true);
    const err = await signup(email, password);

    if (err) {
      setModalError('Что-то пошло не так. Попробуйте снова');
    } else {
      closeModal();
    }

    setModalLoading(false);
  };

  const openChangePasswordModal = () => {
    setIsChangePassword(true);
    setIsModalOpened(true);
  };

  const submitPasswordChangeForm = async (password, confirmation) => {
    if (!password || !confirmation) {
      setModalError('Введите пароль и подтверждение пароля');
      return;
    }

    if (password !== confirmation) {
      setModalError('Подтверждение не совпадает с паролем');
      return;
    }

    if (password.length < 6) {
      setModalError('Пароль должен состоять из не менее чем 6 символов');
      return;
    }

    setModalLoading(true);
    const err = await updatePassword(password);

    if (err) {
      if (err.code === 'auth/requires-recent-login') {
        setModalError(
          'Выйдите и зайдите в учетную запись снова. После этого повторите попытку'
        );
      } else {
        setModalError('Что-то пошло не так. Попробуйте снова');
      }
    } else {
      closeModal();
    }

    setModalLoading(false);
  };

  const showConfirmation = () => {
    setIsModalConfirmationOpened(true);
  };

  const closeConfirmation = () => {
    setIsModalConfirmationOpened(false);
  };

  return (
    <>
      <Router>
        <Header onClick={onHeaderBtnClick} />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/account'>
            <Account
              openChangePasswordModal={openChangePasswordModal}
              showConfirmation={showConfirmation}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {isModalOpened ? (
        isRegistration ? (
          <Registration
            toggleIsRegistration={toggleIsRegistration}
            submitSignupForm={submitSignupForm}
            modalError={modalError}
            setModalError={setModalError}
            modalLoading={modalLoading}
            closeModal={closeModal}
          />
        ) : isChangePassword ? (
          <ModalPassword
            closeModal={closeModal}
            modalError={modalError}
            setModalError={setModalError}
            submitPasswordChangeForm={submitPasswordChangeForm}
          />
        ) : (
          <Modal
            onCloseClick={closeModal}
            submitLoginForm={submitLoginForm}
            setModalError={setModalError}
            modalError={modalError}
            modalLoading={modalLoading}
            toggleIsRegistration={toggleIsRegistration}
          />
        )
      ) : null}
      {isModalConfirmationOpened ? <ModalRequest closeConfirmation={closeConfirmation} /> : null}
    </>
  );
};

export default App;
