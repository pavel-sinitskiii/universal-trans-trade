import './ModalRequest.css';

const ModalRequest = ({ closeConfirmation }) => (
  <div class='modal__password'>

    <div class='modal__request-dialog'>
      <div class='modal__request-header'>
        <h3 class='modal__title-sent'>Форма отправлена</h3>
        <button
          type='reset'
          form='form'
          class='close'
          onClick={closeConfirmation}
        >
          &times;
        </button>
      </div>
    </div>
  </div>
);

export default ModalRequest;

