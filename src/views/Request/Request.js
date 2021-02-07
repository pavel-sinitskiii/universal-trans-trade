import '../UserItem/UserItem.css'


const Request = () => (
  <>
<table class="profile__table">
    <tr class="profile__table-items">
        <td colspan="8" class="profile__table-item">Период оказания услуг: с <input type="date" /> по <input type="date" /> </td>
    </tr>

    <tr class="profile__table-items">
        <th class="request__table-item">№ п/п</th>
        <th class="request__table-item">Марка и модель транспортного средства</th>
        <th class="request__table-item">Комплектация транспортного средства</th>
        <th class="request__table-item">Государственный регистрационный номер транспортного средства</th>
        <th class="request__table-item">Адрес подачи транспортного средства</th>
        <th class="request__table-item">Время начала оказания услуг</th>
        <th class="request__table-item">Время окончания окозания услуг</th>
        <th class="request__table-item">Примечание</th>
    </tr>

    <tr class="profile__table-items">
        <th class="profile__table-item">1</th>
        <td class="profile__table-item "><textarea name="" id="" cols="16" rows="2"></textarea></td>
        <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
        <td class="profile__table-item "><textarea name="" id="" cols="15" rows="2"></textarea></td>
        <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
        <td class="profile__table-item "><input type="time" /></td>
        <td class="profile__table-item "><input type="time" /></td>
        <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
    </tr>

    <tr class="profile__table-items">
      <th class="profile__table-item">2</th>
      <td class="profile__table-item "><textarea name="" id="" cols="16" rows="2"></textarea></td>
      <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
      <td class="profile__table-item "><textarea name="" id="" cols="15" rows="2"></textarea></td>
      <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
      <td class="profile__table-item "><input type="time" /></td>
      <td class="profile__table-item "><input type="time" /></td>
      <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
    </tr>

    <tr class="profile__table-items">
      <th class="profile__table-item">3</th>
      <td class="profile__table-item "><textarea name="" id="" cols="16" rows="2"></textarea></td>
      <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
      <td class="profile__table-item "><textarea name="" id="" cols="15" rows="2"></textarea></td>
      <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
      <td class="profile__table-item "><input type="time" /></td>
      <td class="profile__table-item "><input type="time" /></td>
      <td class="profile__table-item "><textarea name="" id="" cols="13" rows="2"></textarea></td>
    </tr>

</table>

<button autofocus class="profile__btn">Отправить</button> 
</>
);

export default Request;
