import "./CarBusiness.css";

import CarClassItem from "../CarClassItem/CarClassItem";

import icon1 from "../../img/icon-motor.png";
import icon2 from "../../img/icon-kpp1.png";
import icon3 from "../../img/icon-color.png";
import icon4 from "../../img/icon-seat.png";

import img1 from "../../img/popular-img3.png";
import img2 from "../../img/e-class2020.jpeg";
import img3 from "../../img/audi-A62020.jpeg";
import img4 from "../../img/camry2020.jpeg";
import img5 from "../../img/sonata2020.jpeg";
import img6 from "../../img/kia-k52020.png";
import img7 from "../../img/kia-optima.png";
import img8 from "../../img/octavia2020.jpeg";
import img9 from "../../img/sonata2019.png";
import img10 from "../../img/i40.png";
import img11 from "../../img/citroen-c4.png";
import img12 from "../../img/kia-cerato.png";

const items = [
  {
    title: "BMW 520d xDrive 2019",
    image: img1,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 2.0л., 190 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Mercedes-Benz E200 2020",
    image: img2,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 2.0л., 194 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Audi A6 Quattro 2020",
    image: img3,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 250 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Toyota Camry 2020",
    image: img4,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.5л., 181 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Hyundai Sonata 2020",
    image: img5,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 150 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Kia K5 2020",
    image: img6,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 194 л/с",
    text2: "АКПП",
    text3: "Черный",
    text4: "Кожа",
  },
  {
    title: "Kia Optima 2020",
    image: img7,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 150 л/с",
    text2: "АКПП",
    text3: "Белый",
    text4: "Кожа",
  },
  {
    title: "Skoda Octavia 2020",
    image: img8,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 1.4л., 149 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Ткань",
  },
  {
    title: "Hyundai Sonata 2019",
    image: img9,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 150 л/с",
    text2: "АКПП",
    text3: "Белый",
    text4: "Кожа",
  },
  {
    title: "Hyundai i40 2017",
    image: img10,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 150 л/с",
    text2: "АКПП",
    text3: "Серый",
    text4: "Кожа",
  },
  {
    title: "Citroen C4 2018",
    image: img11,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 1.6л., 150 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Ткань",
  },
  {
    title: "Kia Cerato 2020",
    image: img12,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 150 л/с",
    text2: "АКПП",
    text3: "Серый",
    text4: "Ткань",
  },
];

const CarBusiness = () => (
  <div class="services__pg">
    <p class="services__description fz-16">
      Предоставляемые автомобили отвечают высоким требованиям клиентов: -
      во-первых, находятся в отличном техническом состоянии и имеют весь
      стандартный набор оборудования для автомобилей бизнес класса; - во-вторых,
      салон каждого автомобиля имеет эксклюзивную отделку и всегда в идеальном
      состоянии. Перед предоставлением в пользование клиенту полностью готовится
      на соответствующем уровне; - в-третьих, к вашим услугам превосходно
      подготовленные водители «первой категории», которые имеют большой опыт
      вождения авто вип-персон.
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

export default CarBusiness;
