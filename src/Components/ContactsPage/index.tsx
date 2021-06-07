import React from "react";
import PageWrapper from "../Common/Wrappers";
import contacts from "../../assets/image/3.jpg";
import style from "./ContactsPage.module.scss";

class ContactsPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <div className={style.contacts_page_wrapper}>
          <img src={contacts} alt="contacts" />
        </div>
      </PageWrapper>
    );
  }
}

export default ContactsPage;
