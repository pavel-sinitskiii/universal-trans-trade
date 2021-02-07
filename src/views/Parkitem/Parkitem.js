import "./Parkitem.css";

const Parkitem = (props) => (
  <>
    <div className="park__item">
      <div className="park__img">
        <img src={props.image} alt="ggh" className="park__item-img" />
      </div>
      <div className="park__info">
        <h3 className="park__info-title">{props.title}</h3>
        <p className="park__info-text">{props.text}</p>
      </div>
    </div>
  </>
);

export default Parkitem;
