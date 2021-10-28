import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../Profile";
import { actEditProfile, actFetchUserInfo } from "../module/actions";
import Button from "components/Button/Button";
import "./UserInfo.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";

import * as yup from "yup";
import Loader from "components/Loader";

export default function UserInfo() {
  const UserInfoSchema = yup.object().shape({
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
      .matches(
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        "(*) Số điện thoại không đúng, số điện thoại phải có 10 số và đúng mã vùng VN,"
      ),
  });
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const { userInfo, loading } = useSelector((state) => state.userInfoReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchUserInfo(currentUser.accessToken));
  }, []);
  const handleSubmit = (values) => {
    dispatch(actEditProfile(currentUser.accessToken, values));
  };


  if (loading) return <Loader />;
  return (
    <Profile>
      <div class="infoForm">
        <Formik
          initialValues={userInfo}
          validationSchema={UserInfoSchema}
          onSubmit={handleSubmit}
          render={(formikProps) => (
            <Form className="grid grid-cols-2 gap-4">
              <div className="form__field">
                <label>Tài khoản</label>
                <Field
                  type="text"
                  className="input__control userInfo__input"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.taiKhoan}
                  disabled
                />
              </div>
              <div className="form__field">
                <label>Họ và tên</label>
                <Field
                  type="text"
                  className="input__control userInfo__input"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hoTen">
                  {(msg) => <p className="alert alert-danger w-75">{msg}</p>}
                </ErrorMessage>
              </div>
              <div className="form__field">
                <label>Số điện thoại</label>
                <Field
                  type="text"
                  className="input__control userInfo__input"
                  name="soDT"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="soDT">
                  {(msg) => <p className="alert alert-danger w-75">{msg}</p>}
                </ErrorMessage>
              </div>
              <div className="form__field">
                <label>Email</label>
                <Field
                  type="text"
                  className="input__control userInfo__input"
                  name="email"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="email">
                  {(msg) => <p className="alert alert-danger w-75">{msg}</p>}
                </ErrorMessage>
              </div>
              <div className="form__submit mt-10">
                <Button styleBtn={"login__button w-75"} type={"submit"}>
                  Change
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </Profile>
  );
}
