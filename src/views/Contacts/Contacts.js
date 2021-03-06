import './Contacts.css';

import Title from '../Title/Title';
import Contact from '../Contact/Contact';
import img1 from '../../img/map.png';
import img2 from '../../img/call.png';
import img3 from '../../img/clock.png';
import img4 from '../../img/mail.png';

const contact = [
  {
    image: img1,
    title: 'Адрес :',
    text: 'г. Москва, пер. Тетеринский, дом 4, стр. 2, пом. 34 ',
  },
  {
    image: img2,
    title: 'Телефон :',
    text: '+7 (499) 403-19-19',
  },
  {
    image: img3,
    title: 'Время работы :',
    text: 'пн - пт: с 08:30 до 21:00, сб - вс: с 10:00 до 18:00.',
  },
  {
    image: img4,
    title: 'E-mail :',
    text: 'utt2003@yandex.ru',
  },
];

const Contacts = () => (
  <section className='contacts' id='сontacts'>
    <Title text='Контакты' />
    <div className='container'>
      <div className='contacts__text'>
        <h3>UniversalTransTrade в Москве:</h3>
      </div>

      <div className='contacts__items'>
        {contact.map((contact, index) => (
          <Contact
            image={contact.image}
            title={contact.title}
            text={contact.text}
            key={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Contacts;
