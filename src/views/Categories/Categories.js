import "./Categories.css";
import Category from "../Category/Category";

import Title from "../Title/Title";

import img1 from "../../img/popular-img1.1.jpeg";
import img2 from "../../img/popular-img3.png";
import img3 from "../../img/popular-img4.1.png";
import img4 from "../../img/popular-img5.png";
import img5 from "../../img/popular-img6.1.png";

const categories = [
  {
    image: img1,
    text: "Эконом Класс",
    link: "детали",
  },
  {
    image: img2,
    text: "Средний Класс",
    link: "детали",
  },
  {
    image: img3,
    text: "Премиум Класс",
    link: "детали",
  },
  {
    image: img4,
    text: "Кроссоверы",
    link: "детали",
  },
  {
    image: img5,
    text: "Микроавтобусы",
    link: "детали",
  },
];

const Categories = () => (
  <section className="categories" id="categories">
    <Title text="Класс Автомобилей" />
    <div className="container">
      <div className="categories__items">
        {categories.map((categorie, index) => (
          <Category
            image={categorie.image}
            text={categorie.text}
            link={categorie.link}
            key={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
