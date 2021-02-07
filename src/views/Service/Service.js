import "./Service.css";

const Service = (props) => (
  <a href="#" class={`services__item-${props.type} bg__item-${props.index}`}>
    <p class="services__item-text">{props.description}</p>
    <h3 class="services__item-title">
      {props.title}
    </h3>
  </a>
);

export default Service;
