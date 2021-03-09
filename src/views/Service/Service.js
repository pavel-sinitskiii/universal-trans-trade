import "./Service.css";

import { Link, BrowserRouter as Router } from 'react-router-dom';

const Service = (props) => (
  <Link to={props.to} className={`services__item-${props.type} bg__item-${props.index}`}>
    <p className="services__item-text">{props.description}</p>
    <h3 className="services__item-title">
      {props.title}
    </h3>
  </Link>
);

export default Service;
