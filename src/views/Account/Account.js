import React from "react";
import './Account.css';

import Header from "../Header/Header";
import AccountTitle from '../AccountTitle/AccountTitle'
import Footer from "../Footer/Footer";
import Container from '../Container/Container'
import Sidebar from '../Sidebar/Sidebar'
import SidebarItem from "../SidebarItem/SidebarItem";
import User from '../User/User'

class Account extends React.Component {
  render() {
    return (
      <>
        <Header />

        <AccountTitle />

        <Container>

        <Sidebar />

        <User />

        </Container>  



        <Footer />
      </>
    );
  }
}

export default Account;