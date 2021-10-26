import {
  Route,
  BrowserRouter as Router,
  Switch,

} from "react-router-dom";
import Header from "./components/Header/Header";
import { clientRoutes } from "./routes";
import "./App.scss";
import Footer from "components/Footer/Footer";

function App(props) {
  const renderClientLayout = (routes) => {
    return routes.map((route) => {
      const { exact, isPrivate, component, path } = route;
      return (
        <Route
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  };
  const renderAdminLayout = () => {};
  return (
    <>
      <Router>
        <Header />
        <Switch>{renderClientLayout(clientRoutes)}</Switch>
        <Footer />
      </Router>
    </>
  );
}


export default App;
