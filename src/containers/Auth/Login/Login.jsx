import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "../module/actions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { UserIcon, LockClosedIcon } from "@heroicons/react/solid";
import "./Login.scss";
import Button from "components/Button/Button";

const LoginSchema = yup.object().shape({
  taiKhoan: yup.string().required("(*) Tài khoản không được bỏ trống"),
  matKhau: yup.string().required("(*) Mật khẩu không được bỏ trống"),
});

export default function Login(props) {

  const history = props.history
  const dispatch = useDispatch();
  const { error } = useSelector(
    (state) => state.authReducer
  );

  const handleSubmit = (values) => {
    dispatch(actLogin(values,history));
  };
  return (
    <div className="container login__container">
      <div className="mx-auto w-2/6 py-5">
        <h3 className="text-center">Log in to Your Udemy Account</h3>
        <hr />
        {error ? <div className="alert alert-danger text-center">{error}</div> : ""}
        <Formik
          initialValues={{ taiKhoan: "", matKhau: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <div className="input__control">
                  <span>
                    <UserIcon className="w-5" />
                  </span>
                  <Field
                    className="w-100 outline-none border-none"
                    type="text"
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                  />
                </div>
                <ErrorMessage name="taiKhoan">
                  {(msg) => <p className="alert alert-danger">{msg}</p>}
                </ErrorMessage>
                <div className="input__control">
                  <span>
                    <LockClosedIcon className="w-5" />
                  </span>
                  <Field
                    className="w-100 outline-none border-none"
                    type="password"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                  />
                </div>
                <ErrorMessage name="matKhau">
                  {(msg) => <p className="alert alert-danger">{msg}</p>}
                </ErrorMessage>
              </div>
              <div className="text-center">
                <Button styleBtn={"login__button"} type={"submit"}>
                  Log in
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
}
