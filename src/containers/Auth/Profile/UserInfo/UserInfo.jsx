import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../Profile";
import { actEditProfile, actFetchUserInfo } from "../module/actions";
import Button from "components/Button/Button";
import "./UserInfo.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function UserInfo() {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const { userInfo, loading } = useSelector((state) => state.userInfoReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchUserInfo(currentUser.accessToken));
  }, []);
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(actEditProfile(currentUser.accessToken, values));
  };
  if (loading) return <div>Loading</div>;
  return (
    <Profile>
      <div class="infoForm">
        <Formik
          initialValues={{
            taiKhoan: userInfo.taiKhoan,
            matKhau: userInfo.matKhau,
            hoTen: userInfo.hoTen,
            soDT: userInfo.soDT,
            maLoaiNguoiDung: userInfo.maLoaiNguoiDung,
            maNhom: userInfo.maNhom,
            email: userInfo.email,
          }}
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
              </div>
              <div className="form__field">
                <label>Số điện thoại</label>
                <Field
                  type="text"
                  className="input__control userInfo__input"
                  name="soDT"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="form__field">
                <label>Email</label>
                <Field
                  type="text"
                  className="input__control userInfo__input"
                  name="email"
                  onChange={formikProps.handleChange}
                />
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
