import "./Contact.css";

const Contact = (props) => (
  <div className="contacts__item">
    <div className="contacts__img-items">
      <img src={props.image} alt="" className="contacts__img-item" />
    </div>
    <div className="contacts__info">
      <h3 className="contacts__info-title">{props.title}</h3>
      <p className="contacts__info-text">{props.text}</p>
    </div>
  </div>
);

export default Contact;