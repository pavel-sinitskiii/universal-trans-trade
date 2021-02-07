import "./Title.css";

const Title = (props) => (
  <div className="section__title border-top">
    <h2>{props.text}</h2>
  </div>
);

export default Title;
