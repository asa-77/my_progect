
import React from "react";
import PageWrapper from "../Common/Wrappers";
import CustomCounter from "../Counter";

// import Content from "./Content";

class MainPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <CustomCounter title="Apple" limit={9}/>        
      </PageWrapper>
    );
  }
}

export default MainPage;
