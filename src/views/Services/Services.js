import "./Services.css";

import Title from "../Title/Title";
import Service from "../Service/Service";

const services = [
  {
    title: "Длительная аренда автомобиля с водителем",
    description: "От 900р./час",
    type: "top",
  },
  {
    title: "Корпоративное такси",
    description: "От 900р./час",
    type: "top",
  },
  {
    title: "Трансфер",
    description: "От 900р./час",
    type: "bottom",
  },
  {
    title: "Аренда авто на свадьбу",
    description: "От 900р./час",
    type: "bottom",
  },
  {
    title: "Доставка сотрудников",
    description: "От 900р./час",
    type: "bottom",
  },
  {
    title: "Аренда авто без водителя",
    description: "От 900р./час",
    type: "bottom",
  },
];

const Services = () => (
  <section className="services">
    <Title text="Наши услуги" />
    <div className="container">
      <div className="services__items">
        {services.map((service, index) => (
          <Service
            title={service.title}
            description={service.description}
            type={service.type}
            index={index + 1}
            key={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
