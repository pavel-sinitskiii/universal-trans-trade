import './CarEconomy.css';

import CarClassItem from '../CarClassItem/CarClassItem';

import icon1 from "../../img/icon-motor.png";
import icon2 from "../../img/icon-kpp1.png";
import icon3 from "../../img/icon-color.png";
import icon4 from "../../img/icon-seat.png";

import img1 from "../../img/polo2021-black.jpeg";
import img2 from "../../img/polo2020-white1.jpeg";
import img3 from "../../img/polo2020-gray.jpeg";
import img4 from "../../img/rapid2020-gray.png";
import img5 from "../../img/rapid2020-black.jpeg";
import img6 from "../../img/solaris2020.png";
import img7 from "../../img/solaris2018.png";
import img8 from "../../img/focus12018.png";
import img9 from "../../img/almera2018.png";
import img10 from "../../img/almera2018-black.png";
import img11 from "../../img/chevrolet-cruze.png";

const items = [
  {
    title: "Volkswagen Polo sedan 2021",
    image: img1,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 110 л/с",
    text2:"АКПП",
    text3:"Чёрный",
    text4:"Ткань",
  },
  {
    title: "Volkswagen Polo sedan 2020",
    image: img2,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 110 л/с",
    text2:"АКПП",
    text3:"Белый",
    text4:"Ткань",
  },
  {
    title: "Volkswagen Polo sedan 2020",
    image: img3,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 110 л/с",
    text2:"АКПП",
    text3:"Серый",
    text4:"Ткань",
  },
  {
    title: "Skoda Rapid 2020",
    image: img4,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 110 л/с",
    text2:"АКПП",
    text3:"Серый",
    text4:"Ткань",
  },
  {
    title: "Skoda Rapid 2020",
    image: img5,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 110 л/с",
    text2:"АКПП",
    text3:"Чёрный",
    text4:"Ткань",
  },
  {
    title: "Hyundai Solaris 2020",
    image: img6,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 123 л/с",
    text2:"АКПП",
    text3:"Белый",
    text4:"Ткань",
  },
  {
    title: "Hyundai Solaris 2018",
    image: img7,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 123 л/с",
    text2:"АКПП",
    text3:"Чёрный",
    text4:"Ткань",
  },
  {
    title: "Ford Focus 2018",
    image: img8,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.5л., 149 л/с",
    text2:"АКПП",
    text3:"Чёрный",
    text4:"Ткань",
  },
  {
    title: "Nissan Almera 2018",
    image: img9,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 102 л/с",
    text2:"МКПП",
    text3:"Белый",
    text4:"Ткань",
  },
  {
    title: "Nissan Almera 2018",
    image: img10,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 102 л/с",
    text2:"АКПП",
    text3:"Чёрный",
    text4:"Ткань",
  },
  {
    title: "Chevrolet Cruze 2015",
    image: img11,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4,
    text1:"Бензин, 1.6л., 109 л/с",
    text2:"МКПП",
    text3:"Чёрный",
    text4:"Ткань",
  },

];

const CarEconomy = () => (
  <div class="services__pg">
  <p class="services__description fz-16">
    Аренда автомобилей эконом в Москве - выгодная и
    востребованная услуга сегодня. Возможность комфортно
    передвигаться по городу, выехать на пикник, встретить знакомых,
    друзей в аэропорту без дополнительных затрат выглядит
    привлекательно. Многие клиенты престижность марки авто ставят на
    второй уровень, считая, что такие характеристики как
    маневренность, надежность и дополнительные функции важнее.
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

export default CarEconomy;