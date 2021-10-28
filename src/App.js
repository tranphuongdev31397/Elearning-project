import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { adminRoutes, clientRoutes } from "./routes";
import "./App.scss";
import Footer from "components/Footer/Footer";
import ClientLayout from "layouts/ClientLayout";
import AdminLayout from "layouts/AdminLayout";

function App(props) {
  const renderClientLayout = (routes, Layout) => {
    return routes.map((route) => {
      const { exact, isPrivate, component, path } = route;
      return (
        <Layout
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  };
  const renderAdminLayout = (routes, Layout) => {
    return routes.map((route) => {
      const { exact, isPrivate, component, path } = route;
      return (
        <Layout
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  };
  return (
    <>
      <Router>
        <Switch>{renderClientLayout(clientRoutes, ClientLayout)}</Switch>
        <Switch>{renderAdminLayout(adminRoutes, AdminLayout)}</Switch>
      </Router>
    </>
  );
}

export default App;
