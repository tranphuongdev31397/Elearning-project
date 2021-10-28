import { React } from "react";
import { Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {errorAlert} from 'components/Notification/SweetAlert.js'

const withLayout = (WrappedComponent) => {
  return ({ component: Component, isPrivate, ...rest }) => {
    const content = (
      <Route
        {...rest}
        render={(routeProps) => (
          <WrappedComponent>
            <Component {...routeProps} />
          </WrappedComponent>
        )}
      />
    );

    //Protect private routes

    const currentUser = useSelector((state) => state.authReducer.currentUser);

    if (isPrivate) {
      if (currentUser) {
        return content;
      }
      errorAlert('Vui lòng đăng nhập để thực hiện chức năng này!')
      return <Redirect to="/" />;
    }
    return content
  };
};

export default withLayout;