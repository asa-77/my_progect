import React from "react";
import style from "./Footer.module.scss";

class Footer extends React.PureComponent {
  render() {
    return (
      <>
        <footer className={style.footer_wrapper}>
          <div className={style.description}>
            Продажа земельных участков ИЖС Нижегородская обл. Богородский р-н д.
            Трестьяны
          </div>
          <div className={style.location}>
            т. +7 920 079 80 28 email: asa-77.06.10@yandex.ru
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
