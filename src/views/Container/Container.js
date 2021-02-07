import "./Container.css";

const Container = (props) => <div className={`container ${props.flex && 'container_flex'}`}>{props.children}</div>;

export default Container;
