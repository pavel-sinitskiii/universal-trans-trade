import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Menu from "../views/Menu/Menu";
import InfoTitle from "../views/InfoTitle/InfoTitle";
import Container from "../views/Container/Container";
import InfoSidebar from "../views/InfoSidebar/InfoSidebar";
import InfoPanel from "../views/InfoPanel/InfoPanel";
import InfoServices from "../views/InfoServices/InfoServices";
import InfoWithDriver from "../views/InfoWithDriver/InfoWithDriver";
import InfoTaxi from "../views/InfoTaxi/InfoTaxi";
import InfoTransfer from "../views/InfoTransfer/InfoTransfer";
import InfoWedding from "../views/InfoWedding/InfoWedding";
import InfoDelivery from "../views/InfoDelivery/InfoDelivery";
import InfoWithoutDriver from "../views/InfoWithoutDriver/InfoWithoutDriver";

const InfoPage = () => {
  const match = useRouteMatch();

  return (
    <>
      <Menu />
      <Router>
        <Switch>
          <Route path={`${match.path}/services`}>
            <InfoTitle title="Наши Услуги" />
            <Container flex>
              <InfoSidebar matchUrl={match.url} />
              <InfoPanel>
                <InfoServices />
              </InfoPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/with-a-driver`}>
            <InfoTitle title="Длительная аренда автомобиля с водителем" />
            <Container flex>
              <InfoSidebar matchUrl={match.url} />
              <InfoPanel>
                <InfoWithDriver />
              </InfoPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/taxi`}>
            <InfoTitle title="Корпоративное такси" />
            <Container flex>
              <InfoSidebar matchUrl={match.url} />
              <InfoPanel>
                <InfoTaxi />
              </InfoPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/transfer`}>
            <InfoTitle title="Трансфер" />
            <Container flex>
              <InfoSidebar matchUrl={match.url} />
              <InfoPanel>
                <InfoTransfer />
              </InfoPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/wedding`}>
            <InfoTitle title="Аренда автомобиля на свадьбу" />
            <Container flex>
              <InfoSidebar matchUrl={match.url} />
              <InfoPanel>
                <InfoWedding />
              </InfoPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/delivery`}>
            <InfoTitle title="Доставка сотрудников" />
            <Container flex>
              <InfoSidebar matchUrl={match.url} />
              <InfoPanel>
                <InfoDelivery />
              </InfoPanel>
            </Container>
          </Route>
          <Route path={`${match.path}/without-driver`}>
            <InfoTitle title="Аренда без водителя" />
            <Container flex>
              <InfoSidebar matchUrl={match.url} />
              <InfoPanel>
                <InfoWithoutDriver />
              </InfoPanel>
            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default InfoPage;
