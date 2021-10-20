import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header/Header'
import { clientRoutes } from "./routes";
import "./App.scss";

function App() {
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
        <Header/>
        <Switch>{renderClientLayout(clientRoutes)}</Switch>
      </Router>
    </>
  );
}

export default App;
