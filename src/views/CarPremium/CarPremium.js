import "./CarPremium.css";

import CarClassItem from "../CarClassItem/CarClassItem";

import icon1 from "../../img/icon-motor.png";
import icon2 from "../../img/icon-kpp1.png";
import icon3 from "../../img/icon-color.png";
import icon4 from "../../img/icon-seat.png";

import img1 from "../../img/popular-img4.1.png";
import img2 from "../../img/bmw740-2018.png";
import img3 from "../../img/bmw740-2018.png";
import img4 from "../../img/bmw-730-white.png";
import img5 from "../../img/mercedes s450.png";
import img6 from "../../img/mercedes s450.png";
import img7 from "../../img/genesis g90.png";
import img8 from "../../img/genesis g80.png";
import img9 from "../../img/equus.png";


const items = [
  {
    title: "BMW 730Ld xDrive 2020",
    image: img1,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 3.0л., 265 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "BMW 740Li xDrive 2018",
    image: img2,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 3.0л., 326 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "BMW 750Li xDrive 2017",
    image: img3,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 4.4л., 450 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "BMW 730Ld xDrive 2018",
    image: img4,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 3.0л., 250 л/с",
    text2: "АКПП",
    text3: "Белый",
    text4: "Кожа",
  },
  {
    title: "Mercedes-Benz S-450 2018",
    image: img5,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 3.0л., 367 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Mercedes-Benz S-350d 2018",
    image: img6,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Дизель, 3.0л., 250 л/с",
    text2: "АКПП",
    text3: "Черный",
    text4: "Кожа",
  },
  {
    title: "Genesis G90 2020",
    image: img7,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 3.8л., 309 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "SGenesis G80 2018",
    image: img8,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 2.0л., 197 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
  {
    title: "Hyundai Eques 2016",
    image: img9,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1: "Бензин, 3.8л., 335 л/с",
    text2: "АКПП",
    text3: "Чёрный",
    text4: "Кожа",
  },
];

const CarPremium = () => (
  <div class="services__pg">
    <p class="services__description fz-16">
      Аренда автомобилей представительского класса – это не просто аренда
      транспортного средства, это статус и презентабельность. Это первое
      впечатление, которое вы произведете на ваших гостей или бизнес-партнеров.
      Независимо от того, куда и кому вам нужно ехать, аренда представительских
      автомобилей - безупречный вариант. Аренда автомобилей представительского
      класса поможет в решении многих проблем: Трансфер с аэропорта и в
      аэропорт. Если вам нужно встретить важных гостей в аэропорту или наоборот
      проводить их в аэропорт, то аренда представительского авто поможет вам в
      этом. Гости по достоинству смогут оценить вашу заботу о них. То же самое
      касается и трансфера на железнодорожный вокзал.
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

export default CarPremium;
