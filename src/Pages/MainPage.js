import React from "react";

import Header from "../views/Header/Header";
import Menu from "../views/Menu/Menu";
import Content from "../views/Content/Content";
import Services from "../views/Services/Services";
import Categories from "../views/Categories/Categories";
import Advanteges from "../views/Advanteges/Advvanteges";
import Park from "../views/Park/Park";
import Contacts from "../views/Contacts/Contacts";
import Map from "../views/Map/Map";
import Footer from "../views/Footer/Footer";
import Modal from "../views/Modal/Modal";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Menu />

        <Content />

        <Services />

        <Categories />

        <Advanteges />

        <Park />

        <Contacts />

        <Map />

        <Footer />

        <Modal />
      </>
    );
  }
}

export default MainPage;
