import './AccountPanel.css';

import AccountPanelTitle from '../AccountPanelTitle/AccountPanelTitle';

const AccountPanel = (props) => (
  <div class='account-panel'>
    <AccountPanelTitle title={props.title} />
    <div class='account-panel__items'>
      {props.children}
    </div>
  </div>
);

export default AccountPanel;
