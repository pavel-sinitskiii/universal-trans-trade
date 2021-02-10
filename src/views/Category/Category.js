import "./Category.css";

const Categorie = (props) => (
  <div className="categories__item">
    <img className="categories__img" src={props.image} alt="vcv" />
    <h4 className="categories__item-title">{props.text}</h4>
    <a className="categories__link" href="">
      {props.link}
    </a>
  </div>
);

export default Categorie;
