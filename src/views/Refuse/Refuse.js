<<<<<<< HEAD

import './Refuse.css';

=======
import './Refuse.css';

>>>>>>> cf08c524171fee5562cd607781cf2b677337cd00
const Refuse = ({ showConfirmation }) => (
  <>
    <textarea
      name=''
      id=''
      cols='110'
      rows='10'
      placeholder='Причина отказа от услуги:'
    ></textarea>
    <button autofocus className='profile__btn' onClick={showConfirmation}>
      Отказаться
    </button>
  </>
);

export default Refuse;
