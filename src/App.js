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
        <Route path="/1" component={BasicsRedux} />
        <Route path="/books" component={BooksView} />
        <Route path="/" component={HomeView} />
        <Route component={NotFoundView} />
      </Switch>
    </Container>
  );
};
export default App;
