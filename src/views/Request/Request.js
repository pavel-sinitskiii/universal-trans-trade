import "./Request.css";

const Request = () => (
  <>
    <table className="profile__table">
      <tr className="profile__table-items">
        <td colspan="8" className="profile__table-item">
          Период оказания услуг: с <input type="date" /> по{" "}
          <input type="date" />{" "}
        </td>
      </tr>

      <tr className="profile__table-items">
        <th className="request__table-item">№ п/п</th>
        <th className="request__table-item">
          Марка и модель транспортного средства
        </th>
        <th className="request__table-item">
          Комплектация транспортного средства
        </th>
        <th className="request__table-item">
          Государственный регистрационный номер транспортного средства
        </th>
        <th className="request__table-item">
          Адрес подачи транспортного средства
        </th>
        <th className="request__table-item">Время начала оказания услуг</th>
        <th className="request__table-item">Время окончания окозания услуг</th>
        <th className="request__table-item">Примечание</th>
      </tr>

      <tr className="profile__table-items">
        <th className="profile__table-item">1</th>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="16" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="15" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <input type="time" />
        </td>
        <td className="profile__table-item ">
          <input type="time" />
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
      </tr>

      <tr className="profile__table-items">
        <th className="profile__table-item">2</th>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="16" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="15" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <input type="time" />
        </td>
        <td className="profile__table-item ">
          <input type="time" />
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
      </tr>

      <tr className="profile__table-items">
        <th className="profile__table-item">3</th>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="16" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="15" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
        <td className="profile__table-item ">
          <input type="time" />
        </td>
        <td className="profile__table-item ">
          <input type="time" />
        </td>
        <td className="profile__table-item ">
          <textarea name="" id="" cols="13" rows="2"></textarea>
        </td>
      </tr>
    </table>

    <button autofocus class="profile__btn">
      Отправить
    </button>
  </>
);

export default Request;
