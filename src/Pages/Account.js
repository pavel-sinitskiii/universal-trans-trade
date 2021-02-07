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
import User from '../views/User/User';

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
                <User />
              </AccountPanel>
            </Route>
            <Route path={`${match.path}/request`}>
              <AccountPanel title='Оформить заявки'>
                <Request />
              </AccountPanel>
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default Account;
