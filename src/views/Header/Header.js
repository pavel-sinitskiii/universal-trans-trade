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
              <p className='contact'>+7 (495) 323 04 41</p>
            </div>
            <div className='contact'>
              <p>г.Москва, Перовский пр-д, д.54</p>
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
