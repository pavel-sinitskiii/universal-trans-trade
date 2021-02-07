import "./Contact.css";

const Contact = (props) => (
  <div class="contacts__item">
    <div class="contacts__img-items">
      <img src={props.image} alt="" class="contacts__img-item" />
    </div>
    <div class="contacts__info">
      <h3 class="contacts__info-title">{props.title}</h3>
      <p class="contacts__info-text">{props.text}</p>
    </div>
  </div>
);

export default Contact;