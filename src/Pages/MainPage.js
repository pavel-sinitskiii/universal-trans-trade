import Menu from '../views/Menu/Menu';
import Content from '../views/Content/Content';
import Services from '../views/Services/Services';
import Categories from '../views/Categories/Categories';
import Advanteges from '../views/Advanteges/Advvanteges';
import Park from '../views/Park/Park';
import Contacts from '../views/Contacts/Contacts';
import Map from '../views/Map/Map';
import Container from '../views/Container/Container';

const MainPage = () => (
  <>
    <Menu />
    <Content />
    <Services />
    <Categories />
    <Advanteges />
    <Park />
    <Contacts />
    <Container>
    <Map />
    </Container>
  </>
);

export default MainPage;
