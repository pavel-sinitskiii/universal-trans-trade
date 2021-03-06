import './Header.css';

import { useAuth } from '../../contexts/AuthContext';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import Container from '../Container/Container';
import Menu from '../Menu/Menu';

const Header = ({ onClick }) => {
  const { currentUser: user } = useAuth();

  return (
    <header className='header' id='header'>
      <Container>
        <div className='header__items'>
          <div className='logo'>
            <Link to='/'>
              <div className='header__left'>UNIVERSALTRANSTRADE</div>
            </Link>
          </div>
          <div className='header__right'>
            <div className='contact'>
              <p className='contact'>+7 (499) 403-19-19 </p>
            </div>
            <div className='contact'>
              <p>г. Москва,Тетеринский  пер., 4/2, пом. 34</p>
            </div>
            {user ? (
              <Link to='/account/user'>
                <div className='btn'>Личный кабинет</div>
              </Link>
            ) : null}
            <div className='btn' onClick={onClick}>
              {user ? 'Выйти' : 'Войти'}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
