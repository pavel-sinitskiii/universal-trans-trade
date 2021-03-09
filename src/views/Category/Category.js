import "./Category.css";
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Categorie = (props) => (
  <div className="categories__item">
    <img className="categories__img" src={props.image} alt="car classes" />
    <h4 className="categories__item-title">{props.text}</h4>
    <Link to={props.to} className="categories__link">
      {props.link}
    </Link> 
  </div>
);

export default Categorie;
