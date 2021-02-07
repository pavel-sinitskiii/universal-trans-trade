import "./Service.css";

const Service = (props) => (
  <a href="#" className={`services__item-${props.type} bg__item-${props.index}`}>
    <p className="services__item-text">{props.description}</p>
    <h3 className="services__item-title">
      {props.title}
    </h3>
  </a>
);

export default Service;
