import "./Balance.css";

const Balance = () => (
  <>
    <table className="balance__table">
      <tr className="profile__table-items">
        <td colspan="6" className="balance__table-title">
          Состояние счета{" "}
        </td>
      </tr>

      <tr className="profile__table-items">
        <th className="balance__table-item">Баланс</th>
        <td className="balance__table-item ">290.000 руб</td>
      </tr>

      <tr className="profile__table-items">
        <th className="balance__table-item">
          Поступившие платежи в текущем месяце
        </th>
        <td className="balance__table-item">400.000 руб</td>
      </tr>

      <tr className="profile__table-items">
        <th className="balance__table-item">Расход в текущем месяце</th>
        <td className="balance__table-item ">110.000 руб</td>
      </tr>
    </table>
  </>
);

export default Balance;
