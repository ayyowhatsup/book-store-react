import { Suspense } from "react";
import { Await, Form, useLoaderData, useSubmit } from "react-router-dom";

export default function CategoryEdit() {
  const { category } = useLoaderData();
  const submit = useSubmit()
  return (
    <Suspense>
      <Await
        resolve={category}
        children={(category) => (
          <Form
            className="tab-pane fade show active"
            action="." method="PATCH"
          >
            <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
              <div className="d-flex justify-content-between mb-lg-8">
                <h6 className="font-weight-medium font-size-7 ml-lg-1  pb-xl-1">
                  {category.name}
                </h6>
              </div>
              <div className="woocommerce-billing-fields__field-wrapper row">
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
                    placeholder={category.name}
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
                  <textarea name= "description" rows={10}
                    className="input-text form-control"
                    id="description"
                    placeholder={category.description}
                  />
                </p>
                <button type="submit" className="col border p-3 btn font-weight-bold">
                    Cập nhật
                </button>
                <div className="col-9">
                </div>
                <div onClick={()=> {submit(null, {action:`/admin/category/${category.slug}`, method: "DELETE"})}} className="col border p-3 btn font-weight-bold">
                    Xóa
                </div>
              </div>
            </div>
          </Form>
        )}
      />
    </Suspense>
  );
}
