import React from "react";
import { Route, Switch } from "react-router-dom";
import RegPageContainer from "../RegPageContainer";
import AuthPageContainer from "../AuthPageContainer";
import MainPageContainer from "../MainPageContainer";
import SchemPageContainer from "../SchemPageContainer";
import ContactsPageContainer from "../ContactsPageContainer";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPageContainer} />
        <Route path="/auth" exact component={AuthPageContainer} />
        <Route path="/reg" exact component={RegPageContainer} />
        <Route path="/schem" exact component={SchemPageContainer} />
        <Route path="/contacts" exact component={ContactsPageContainer} />
      </Switch>
    </>
  );
}

export default App;
