import Menu from '../views/Menu/Menu';
import ContactsPageTitle from '../views/ContactsPageTitle/ContactsPageTitle';
import Container from '../views/Container/Container';
import ContactsPageItems from '../views/ContactsPageItems/ContactPageItems';
import Map from '../views/Map/Map';


const ContactsPage = () => (
  <>
    <Menu />
    <ContactsPageTitle />
    <Container>
    <ContactsPageItems />
    <Map />
    </Container>
  </>
);

export default ContactsPage;