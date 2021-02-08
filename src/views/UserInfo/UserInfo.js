import "./UserInfo.css";

const UserInfo = () => (
  <div class="account__items">
    <table class="profile__table">
      <tr class="profile__table-items">
        <th class="user__table-item">Логин :</th>
        <td class="user__table-item">ttt@gmail.com</td>
      </tr>
      <tr class="profile__table-items">
        <th class="user__table-item">Организация :</th>
        <td class="user__table-item">Газпром</td>
      </tr>
      <tr class="profile__table-items">
        <th class="user__table-item">Город :</th>
        <td class="user__table-item">Москва</td>
      </tr>
    </table>
    <button class="profile__btn">Изменить пароль</button>
  </div>
);
export default UserInfo;
