import './UserInfo.css';

import { useAuth } from '../../contexts/AuthContext';

const UserInfo = ({ openChangePasswordModal }) => {
  const { currentUser: user } = useAuth();

  return user ? (
    <div class='account__items'>
      <table class='profile__table'>
        <tr class='profile__table-items'>
          <th class='user__table-item'>Логин :</th>
          <td class='user__table-item'>{user.email}</td>
        </tr>
      </table>
      <button class='profile__btn' onClick={openChangePasswordModal}>
        Изменить пароль
      </button>
    </div>
  ) : null;
};
export default UserInfo;
