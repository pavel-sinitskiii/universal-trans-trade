import './CarPanel.css';

const CarPanel = (props) => (
  <div class='account-panel'>
    <div class='account-panel__items'>
      {props.children}
    </div>
  </div>
);

export default CarPanel;