import { Suspense } from "react";
import { Await, Form, useLoaderData, useSubmit } from "react-router-dom";

export default function EditAuthor() {
  const { author } = useLoaderData();
  const submit = useSubmit();
  return (
    <Suspense>
      <Await
        resolve={author}
        children={(author) => (
          <Form
            action="."
            method="PATCH"
            encType="multipart/form-data"
            className="tab-pane fade show active"
            role="tabpanel"
          >
            <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
              <div className="d-flex justify-content-between mb-lg-8">
                <h6 className="font-weight-medium font-size-7 ml-lg-1 pb-xl-1">
                    {author.name}
                </h6>
              </div>
              <div className="row">
                <p className="col-lg-12 mb-4d75 form-row form-row-first">
                  <label className="form-label">
                    Tên{" "}
                  </label>
                  <input
                    type="text"
                    className="input-text form-control"
                    name="name"
                    autoFocus="autofocus"
                    placeholder={author.name}
                  />
                </p>
                <p className="col-lg-12 mb-4d75 form-row form-row-first">
                  <label className="form-label">Bút danh </label>
                  <input
                    type="text"
                    className="input-text form-control"
                    name="alias"
                    placeholder={author.alias}
                  />
                </p>
                <p className="col-lg-12 mb-4d75 form-row form-row-first">
                  <label className="form-label">Ảnh </label>
                  <input
                    type="file"
                    className="input-text form-control"
                    name="image"
                    accept="image/png, image/jpeg"
                  />
                </p>
                <p className="col-12 mb-4d75 form-row form-row-first">
                  <label className="form-label">Mô tả</label>
                  <textarea
                    name="description"
                    rows={10}
                    className="input-text form-control"
                    placeholder={author.description}
                  />
                </p>
                <button
                  type="submit"
                  className="font-weight-bold col border p-3 btn"
                >
                  Cập nhật
                </button>
                <div className="col-9"></div>
                <div onClick={() => {submit(null, {action:`/admin/author/${author.slug}`, method:"DELETE"})}} className="col btn border p-3">Xóa</div>
              </div>
            </div>
          </Form>
        )}
      />
    </Suspense>
  );
}
