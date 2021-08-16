import "./App.css";
import { Route, Switch } from "react-router-dom";

import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container";
import HomeView from "./components/views/HomeView";
import BasicsRedux from "./components/views/BasicsRedux";
import BooksView from "./components/views/BooksView";
import NotFoundView from "./components/views/NotFoundView";


const App = () => {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/1">
          <BasicsRedux />
        </Route>
        <Route path="/books">
          <BooksView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
};
export default App;
