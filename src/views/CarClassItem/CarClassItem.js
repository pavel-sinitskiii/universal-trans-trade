import './CarClassItem.css'

const CarClassItem = (props) => (
  <div class="categories__pg-items">
  <h3 class="categories__pg-item__title">
  {props.title}
</h3>
<div class="categories__pg-item">
  <div class="categories__pg-item__img">
  <img src={props.image} alt="" class="categories__pg-item__icon" />
</div>
  <div class="categories__pg-item__desk">
    <div class="categoriea__pg-specifications">
      <img src={props.icon1} alt="" class="categoriea__pg-specifications-img" />
      <p class="categoriea__pg-specifications-text">
        Двигатель : {props.text1}
      </p>
    </div>
    <div class="categoriea__pg-specifications">
      <img src={props.icon2} alt="" class="categoriea__pg-specifications-img" />
      <p class="categoriea__pg-specifications-text">
        Тип трансмиссии : {props.text2}
      </p>
    </div>
    <div class="categoriea__pg-specifications">
      <img src={props.icon3} alt="" class="categoriea__pg-specifications-img" />
      <p class="categoriea__pg-specifications-text">
        Цвет : {props.text3}
      </p>
    </div>
    <div class="categoriea__pg-specifications">
      <img src={props.icon4} alt="" class="categoriea__pg-specifications-img" />
      <p class="categoriea__pg-specifications-text">
        Салон : {props.text4}
      </p>
    </div>
  </div>
</div>
</div>
);

export default CarClassItem;