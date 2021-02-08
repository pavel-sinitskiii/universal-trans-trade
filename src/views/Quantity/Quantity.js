import "./Quantity.css";

const Quantity = () => (
  <>
    <table className="profile__table">
      <tr className="profile__table-items">
        <td colspan="6" className="balance__table-title ">
          Статус Заявок{" "}
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
        <th className="request__table-item">Время начала оказания услуг</th>
        <th className="request__table-item">Статус заявки</th>
      </tr>

      <tr className="profile__table-items">
        <th className="profile__table-item">1</th>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
      </tr>

      <tr className="profile__table-items">
        <th className="profile__table-item">2</th>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
      </tr>

      <tr className="profile__table-items">
        <th className="profile__table-item">3</th>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
        <td className="profile__table-item "></td>
      </tr>
    </table>
  </>
);
export default Quantity;
