import "./Advant.css";

const Advant = (props) => (
  <div className="advanteges__item">
    <h3 className="advanteges__item-title">{props.title}</h3>
    <p className="advanteges__item-text">{props.description}</p>
  </div>
);

export default Advant;
