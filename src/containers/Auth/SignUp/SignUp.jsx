import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { UserIcon, LockClosedIcon, PhoneIcon, MailIcon, UserCircleIcon } from "@heroicons/react/solid";
import Button from "components/Button/Button";
import { GROUP_ID } from "settings/apiConfig";
import { userApi } from "apis/userApi";
import { successAlert } from "components/Notification/SweetAlert";

const SignupSchema = yup.object().shape({
  taiKhoan: yup.string().required("(*) Tài khoản không được để trống"),
  matKhau: yup.string().required("(*) Mật khẩu không được để trống"),
  hoTen: yup
    .string()
    .required("(*) Họ tên không được để trống")
    .matches(
      /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
      "(*) Họ tên không đúng định dạng"
    ),
  email: yup
    .string()
    .required("(*) Email không được để trống")
    .email("(*) Email không đúng định dạng, Vd: abc@xyz.com"),
  soDT: yup
    .string()
    .required("(*) Số điện thoại không được để trống")
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "(*) Số điện thoại không đúng, số điện thoại phải có 10 số và đúng mã vùng VN,"),
});

export default function SignUp(props) {
  const history = props.history;
  const [err, seterr] = useState(null)

  const handleSubmit = (values) => {
    userApi.signupApi(values)
      .then(res => {
        if (res.status === 200) {
          seterr(null)
          successAlert("Đăng kí thành công")
        }
      })
      .catch(err => {
        err = 'Tài khoản hoặc email đã có,vui lòng kiểm tra lại'
        seterr(err)
      })
  };
  return (
    <div className="container login__container">

      <div className="mx-auto w-2/6 py-5">
        <h3 className="text-center">Sign up Your Udemy Account</h3>
        <hr />
        {err ? <div className="alert alert-danger text-center">{err}</div> : ""}
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: GROUP_ID,
            email: "",
          }}
          validationSchema={SignupSchema}
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
                    placeholder="Tài khoản"
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
                    placeholder="Mật khẩu"
                  />
                </div>
                <ErrorMessage name="matKhau">
                  {(msg) => <p className="alert alert-danger">{msg}</p>}
                </ErrorMessage>
                <div className="input__control">
                  <span>
                    <UserCircleIcon className="w-5" />
                  </span>
                  <Field
                    className="w-100 outline-none border-none"
                    type="text"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                    placeholder="Họ và tên"
                  />
                </div>
                <ErrorMessage name="hoTen">
                  {(msg) => <p className="alert alert-danger">{msg}</p>}
                </ErrorMessage>
                <div className="input__control">
                  <span>
                    <PhoneIcon className="w-5" />
                  </span>
                  <Field
                    className="w-100 outline-none border-none"
                    type="text"
                    name="soDT"
                    onChange={formikProps.handleChange}
                    placeholder="Số điện thoại"
                  />
                </div>
                <ErrorMessage name="soDT">
                  {(msg) => <p className="alert alert-danger">{msg}</p>}
                </ErrorMessage>
                <div className="input__control">
                  <span>
                    <MailIcon className="w-5" />
                  </span>
                  <Field
                    className="w-100 outline-none border-none"
                    type="email"
                    name="email"
                    onChange={formikProps.handleChange}
                    placeholder="Email"
                  />
                </div>
                <ErrorMessage name="email">
                  {(msg) => <p className="alert alert-danger">{msg}</p>}
                </ErrorMessage>
              </div>
              <div className="text-center">
                <Button styleBtn={"login__button"} type={"submit"}>
                  Sign up
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
}
