import "./CarCrossovers.css";

import CarClassItem from "../CarClassItem/CarClassItem";

import icon1 from "../../img/icon-motor.png";
import icon2 from "../../img/icon-kpp1.png";
import icon3 from "../../img/icon-color.png";
import icon4 from "../../img/icon-seat.png";

import img1 from "../../img/popular-img5.png";
import img2 from "../../img/LC-200.jpg";
import img3 from "../../img/audi-q5.png";
import img4 from "../../img/duster.jpeg";
import img5 from "../../img/terrano.png";

const items = [
  {
    title: "BMW X7d 2019",
    image: img1,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 3.0л., 250 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Toyota Land Cruiser 200 2019",
    image: img2,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 4.5л., 249 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Audi Q5 2019",
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
    title: "Renault Duster 2020",
    image: img4,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 143 л/с",
    text2: "АКПП",
    text3: "Белый",
    text4: "Ткань",
  },
  {
    title: "Nissan Terrano 2017",
    image: img5,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 143 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Ткань",
  },
];

const CarCrossovers = () => (
  <div class="services__pg">
    <p class="services__description fz-16">
      Аренда кроссоверов в Москве - прекрасная возможность активно провести
      время. На городской трассе для джипа также нет преград – уникальные
      характеристики предоставляют водителю много преимуществ перед другими
      авто.
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

export default CarCrossovers;
