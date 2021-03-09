import './Services.css';

import Title from '../Title/Title';
import Service from '../Service/Service';

const services = [
  {
    title: 'Длительная аренда автомобиля с водителем',
    description: 'От 600р./час',
    type: 'top',
    to: '/services/with-a-driver',
  },
  {
    title: 'Корпоративное такси',
    description: 'От 900р./час',
    type: 'top',
    to: '/services/taxi',
  },
  {
    title: 'Трансфер',
    description: 'От 1000р./час',
    type: 'bottom',
    to: '/services/transfer',
  },
  {
    title: 'Аренда авто на свадьбу',
    description: 'От 900р./час',
    type: 'bottom',
    to: '/services/wedding',
  },
  {
    title: 'Доставка сотрудников',
    description: 'От 600р./час',
    type: 'bottom',
    to: '/services/delivery',
  },
  {
    title: 'Аренда авто без водителя',
    description: 'От 1200р./сут.',
    type: 'bottom',
    to: '/services/without-driver',
  },
];

const Services = () => (
  <section className='services' id='services'>
    <Title text='Наши услуги' />
    <div className='container'>
      <div className='services__items'>
        {services.map((service, index) => (
          <Service
            title={service.title}
            description={service.description}
            type={service.type}
            to={service.to}
            index={index + 1}
            key={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
