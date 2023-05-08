import { Suspense } from "react";
import { Await, Form, useLoaderData } from "react-router-dom";

export default function AddCategory() {
  return (
    <Form
      className="tab-pane fade show active"
      action="/admin/category/add" method="POST"
    >
      <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
        <div className="d-flex justify-content-between mb-lg-8">
          <h6 className="font-weight-medium font-size-7 ml-lg-1  pb-xl-1">
            Thêm thể loại
          </h6>
        </div>
        <div className="row">
          <p
            className="col-lg-12 mb-4d75 form-row form-row-first"
          >
            <label htmlFor="name" className="form-label">
              Tên{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              className="input-text form-control"
              name="name"
              id="name"
              autoFocus="autofocus"
              required
            />
          </p>
          <p
            className="col-12 mb-4d75 form-row form-row-first"
          >
            <label htmlFor="description" className="form-label">
              Mô tả
            </label>
            <textarea
              name="description"
              rows={10}
              className="input-text form-control"
              id="description"
            />
          </p>
          <button type="submit" className="col border p-3 btn font-weight-bold">Tạo mới</button>
          <div className="col-9"></div>
        </div>
      </div>
    </Form>
  );
}
