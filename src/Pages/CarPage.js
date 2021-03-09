import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Menu from "../views/Menu/Menu";
import CarTitle from "../views/CarTitle/CarTitle";
import Container from "../views/Container/Container";
import CarSidebar from "../views/CarSidebar/CarSidebar";
import CarPanel from "../views/CarPanel/CarPanel";
import CarInfo from "../views/CarInfo/CarInfo";
import CarEconomy from "../views/CarEconomy/CarEconomy";
import CarBusiness from "../views/CarBusiness/CarBusiness";
import CarPremium from "../views/CarPremium/CarPremium";
import CarCrossovers from "../views/CarCrossovers/CarCrossovers";
import CarMinibuses from "../views/CarMinibuses/CarMinibuses";

const CarPage = () => {
  const match = useRouteMatch();

  return (
    <>
      <Menu />
      <Router>
        <Switch>
          <Route path={`${match.path}/car-park`}>
            <CarTitle title="Наши Автомобили" />
            <Container flex>
              <CarSidebar matchUrl={match.url} />
              <CarPanel>
                <CarInfo />
              </CarPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/economy-class`}>
            <CarTitle title="Автомобили Эконом Класса" />
            <Container flex>
              <CarSidebar matchUrl={match.url} />
              <CarPanel>
                <CarEconomy />
              </CarPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/business-class`}>
            <CarTitle title="Автомобили Бизнес Класса" />
            <Container flex>
              <CarSidebar matchUrl={match.url} />
              <CarPanel>
                <CarBusiness />
              </CarPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/premium-class`}>
            <CarTitle title="Автомобили Премиум Класса" />
            <Container flex>
              <CarSidebar matchUrl={match.url} />
              <CarPanel>
                <CarPremium />
              </CarPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/crossovers`}>
            <CarTitle title="Кроссоверы" />
            <Container flex>
              <CarSidebar matchUrl={match.url} />
              <CarPanel>
                <CarCrossovers />
              </CarPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/minibuses`}>
            <CarTitle title="Микроавтобусы" />
            <Container flex>
              <CarSidebar matchUrl={match.url} />
              <CarPanel>
                <CarMinibuses />
              </CarPanel>
            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default CarPage;
