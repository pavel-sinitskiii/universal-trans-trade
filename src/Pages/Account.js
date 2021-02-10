import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

import AccountTitle from '../views/AccountTitle/AccountTitle';
import Container from '../views/Container/Container';
import Sidebar from '../views/Sidebar/Sidebar';
import AccountPanel from '../views/AccountPanel/AccountPanel';
import Request from '../views/Request/Request';
import Refuse from '../views/Refuse/Refuse'
import Balance from '../views/Balance/Balance'
import Quantity from '../views/Quantity/Quantity'

import UserInfo from '../views/UserInfo/UserInfo'

const Account = () => {
  const match = useRouteMatch();

  return (
    <>
      <AccountTitle />
      <Container flex>
        <Router>
          <Sidebar matchUrl={match.url} />
          <Switch>
            <Route path={`${match.path}/user`}>
              <AccountPanel title='Профиль'>
                <UserInfo />
              </AccountPanel>
            </Route>
            <Route path={`${match.path}/request`}>
              <AccountPanel title='Оформить заявку'>
                <Request />
              </AccountPanel>
            </Route>
            <Route path={`${match.path}/refuse`}>
              <AccountPanel title='Отказ от услуги'>
                <Refuse />
              </AccountPanel>
            </Route>
            <Route path={`${match.path}/balance`}>
              <AccountPanel title='Состояние счёта'>
                <Balance />
              </AccountPanel>
            </Route>
            <Route path={`${match.path}/quantity`}>
              <AccountPanel title='Количество заявок'>
                <Quantity />
              </AccountPanel>
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default Account;
