import "./CarMinibuses.css";

import CarClassItem from "../CarClassItem/CarClassItem";

import icon1 from "../../img/icon-motor.png";
import icon2 from "../../img/icon-kpp1.png";
import icon3 from "../../img/icon-color.png";
import icon4 from "../../img/icon-seat.png";

import img1 from "../../img/sprinter.png";
import img2 from "../../img/transporter1.png";
import img3 from "../../img/vito.png";
import img4 from "../../img/alphard.png";
import img5 from "../../img/traveller .png";
import img6 from "../../img/spacetourer .jpeg";


const items = [
  {
    title: "Mercedes-Benz Sprinter",
    image: img1,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 2.0л., 109 л/с",
    text2: "МКПП",
    text3: "Белый",
    text4: "20 Мест",
  },
  {
    title: "Volkswagen Multivan 2019",
    image: img2,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 204 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "8 Мест",
  },
  {
    title: "Mercedes-Benz Vito 2016",
    image: img3,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.2л., 190 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "8 Мест",
  },
  {
    title: "Toyota Alphard 2016",
    image: img4,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 3.5л., 275 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "6 Мест",
  },
  {
    title: "Peugeot Traveller 2020",
    image: img5,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 2.0л., 150 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "8 Мест",
  },
  {
    title: "Citroen SpaceTourer 2020",
    image: img6,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 2.0л., 150 л/с",
    text2: "АКПП",
    text3: "Белый",
    text4: "8 Мест",
  },
];

const CarMinibuses = () => (
  <div class="services__pg">
    <p class="services__description fz-16">
      Наша компания предоставляет в аренду микроавтобусов различной ценовой
      категории вместительностью до 20 мест с водителем. Пассажирские
      микроавтобусы предоставляемые в аренду имеют большое багажное отделение,
      оборудованы кондиционерами и удобными сиденьями поездка в которых пройдёт
      безопасно, комфортно и не утомительно.
    </p>
    {items.map((item, index) => (
      <CarClassItem
        key={index}
        title={item.title}
        image={item.image}
        icon1={item.icon1}
        icon2={item.icon2}
        icon3={item.icon3}
        icon4={item.icon4}
        text1={item.text1}
        text2={item.text2}
        text3={item.text3}
        text4={item.text4}
      />
    ))}
  </div>
);

export default CarMinibuses;
