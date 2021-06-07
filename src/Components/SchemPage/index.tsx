import React from "react";
import PageWrapper from "../Common/Wrappers";
import schem from "../../assets/image/трестьяны1.png";
import style from "./SchemPage.module.scss";

class SchemPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <div className={style.schem_page_wrapper}>
          <img src={schem} alt="schem" />
        </div>
      </PageWrapper>
    );
  }
}

export default SchemPage;
