import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header state={props.store} />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route
          path="/users_page"
          render={() => <UsersPageContainer store={props.store} />}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
