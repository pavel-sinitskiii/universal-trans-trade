import Menu from '../views/Menu/Menu';
import AboutTitle from '../views/AboutTitle/AboutTitle'
import Container from '../views/Container/Container';
import AboutItems from '../views/AboutItems/AboutItems';

const MainPage = () => (
  <>
    <Menu />
    <AboutTitle />
    <Container>
    <AboutItems />
    </Container>
  </>
);

export default MainPage;