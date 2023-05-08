import { Suspense } from "react";
import { Await, Form, useLoaderData, useSubmit } from "react-router-dom";

export default function AddUser() {
  return (
    <Form
      action="."
      method="POST"
      className="tab-pane fade show active"
      role="tabpanel"
    >
      <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
        <div className="d-flex justify-content-between mb-lg-8">
          <h6 className="font-weight-medium font-size-7 ml-lg-1 pb-xl-1">
            Thêm mới người dùng
          </h6>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="js-form-message">
              <label for="exampleFormControlInput3">Họ và tên</label>
              <input
                type="text"
                className="form-control rounded-0"
                name="name"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="js-form-message">
              <label for="exampleFormControlInput3">Số điện thoại</label>
              <input
                type="number"
                className="form-control rounded-0"
                name="phone_number"
                id="exampleFormControlInput3"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-md-12 mb-4 mb-md-0">
            <div className="js-form-message">
              <label for="exampleFormControlInput4">Địa chỉ email</label>
              <input
                type="email"
                className="form-control rounded-0"
                name="email"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-md-12 mb-4 mb-md-0">
            <div className="js-form-message">
              <label for="exampleFormControlInput4">Mật khẩu</label>
              <input
                type="password"
                className="form-control rounded-0"
                name="password"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-md-3 my-4 mb-md-0">
            <p className="js-form-message" data-priority="10">
              <label className="form-label">Là quản trị viên</label>
              <input
                type="checkbox"
                name="is_superuser"
                className="input-checkbox form-control"
                autoFocus="autofocus"
              />
            </p>
          </div>
          <div className="col-md-3 my-4 mb-md-0">
            <button
              type="submit"
              className="col border p-3 btn font-weight-bold"
            >
              Tạo mới
            </button>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </Form>
  );
}
