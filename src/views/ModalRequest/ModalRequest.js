import './ModalRequest.css';

const ModalRequest = ({ closeConfirmation }) => (
  <div class='modal__password'>
<<<<<<< HEAD
    <div class='modal__request-dialog'>
      <div class='modal__request-header'>
        <h3 class='modal__title-sent'>Форма отправлена</h3>
=======
    <div class='modal__password-dialog'>
      <div class='modal__password-header'>
        <h3 class='modal__title-sent'>Заявка отправлена</h3>
>>>>>>> cf08c524171fee5562cd607781cf2b677337cd00
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

<<<<<<< HEAD
export default ModalRequest;
=======
export default ModalRequest;
>>>>>>> cf08c524171fee5562cd607781cf2b677337cd00
