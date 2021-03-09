
import './Refuse.css';

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
