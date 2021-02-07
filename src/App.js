import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import Account from './Pages/Account';

import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Modal from './views/Modal/Modal';

import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { currentUser: user, login, logout } = useAuth();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalError, setModalError] = useState('');
  const [modalLoading, setModalLoading] = useState(false);

  const onHeaderBtnClick = () => {
    if (!user) {
      setIsModalOpened(true);
    } else {
      logout();
    }
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const submitLoginForm = async (email, password) => {
    if (!email || !password) {
      setModalError('Введите логин и пароль');
      return;
    }

    setModalLoading(true);
    const err = await login(email, password);

    if (err) {
      setModalError('Неверные логин или пароль. Попробуйте снова.');
    } else {
      closeModal();
    }

    setModalLoading(false);
  };

  return (
    <>
      <Router>
        <Header onClick={onHeaderBtnClick} />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/account' component={Account} />
        </Switch>
        <Footer />
      </Router>
      {isModalOpened ? (
        <Modal
          onCloseClick={closeModal}
          submitLoginForm={submitLoginForm}
          setModalError={setModalError}
          modalError={modalError}
          modalLoading={modalLoading}
        />
      ) : null}
    </>
  );
};

export default App;
