import { Suspense } from "react";
import { Await, Form, useLoaderData } from "react-router-dom";

export default function AddProduct() {
  const { categories, authors } = useLoaderData();
  return (
    <div
      className="tab-pane fade show active"
      id="pills-one-example1"
      role="tabpanel"
      aria-labelledby="pills-one-example1-tab"
    >
      <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
        <div className="d-flex justify-content-between mb-lg-8">
          <h6 className="font-weight-medium font-size-7 ml-lg-1  pb-xl-1">
            Thêm sản phẩm mới
          </h6>
        </div>
        <Form
          action="."
          method="POST"
          encType="multipart/form-data"
          className="row"   
        >
          <p
            className="col-lg-12 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Tên{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              className="input-text form-control"
              name="name"
              id="billing_first_name"
              autoFocus="autofocus"
              required
            />
          </p>
          <p
            className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Nhà Xuất Bản{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              name="publisher"
              className="input-text form-control"
              id="billing_first_name"
              autoFocus="autofocus"
              required
            />
          </p>
          <p
            className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Năm Xuất Bản{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="number"
              name="publish_year"
              className="input-text form-control"
              id="billing_first_name"
              autoFocus="autofocus"
              required
            />
          </p>
          <p
            className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Ngôn ngữ{" "}
            </label>
            <input
              type="text"
              name="language"
              className="input-text form-control"
              id="billing_first_name"
              autoFocus="autofocus"
            />
          </p>
          <p
            className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Trọng lượng{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="number"
              name="weight"
              className="input-text form-control"
              id="billing_first_name"
              autoFocus="autofocus"
              required
            />
          </p>
          <p
            className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Đơn giá{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="number"
              name="price"
              className="input-text form-control"
              id="billing_first_name"
              autoFocus="autofocus"
              required
            />
          </p>
          <p
            className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Tồn kho{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="number"
              name="inventory"
              className="input-text form-control"
              id="billing_first_name"
              autoFocus="autofocus"
              required
            />
          </p>
          <p
            className="col-lg-12 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Ảnh{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <input
              type="file"
              className="input-text form-control"
              name="image"
              accept="image/png, image/jpeg"
              autoFocus="autofocus"
              required
            />
          </p>
          <p
            className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Thể loại{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <select
              multiple
              size={10}
              className="form-control"
              required
              name="categories"
              autoFocus="autofocus"
            >
              <Suspense>
                <Await resolve={categories} children={(categories)=> (
                    categories.map((category) => (
                        <option value={category.slug}>{category.name}</option>
                      ))
                )}/>
              </Suspense>
              
            </select>
          </p>
          <p
            className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
            id="billing_first_name_field"
            data-priority="10"
          >
            <label htmlFor="billing_first_name" className="form-label">
              Tác giả{" "}
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <select
              multiple
              size={10}
              className="form-control"
              id="billing_first_name"
              name="authors"
              autoFocus="autofocus"
              required
            >
            <Suspense>
                <Await resolve={authors} children={(authors)=>(
                    authors.map((author) => (
                        <option value={author.slug}>{author.name}</option>
                    ))
                )}/>
            </Suspense>
              
            </select>
          </p>
          <p className="d-flex align-items-center"
            data-priority="10"
          >
            <label className="form-label">
              Sản phẩm nổi bật{" "}
            </label>
            <input
              type="checkbox"
              name="is_featured"
              className="input-checkbox form-control"
              autoFocus="autofocus"
            />
          </p>
          <p
            className="col-12 mb-4d75 form-row form-row-first validate-required validate-phone"
            id="billing_phone_field"
            data-priority="100"
          >
            <label htmlFor="billing_phone" className="form-label">
              Mô tả
            </label>
            <textarea
              name="description"
              rows={10}
              className="input-text form-control"
              id="billing_phone"
            />
          </p>
          
          <button type="submit" className="col border p-3 btn font-size-3 font-weight-bold">
            Tạo mới
          </button>
          <div className="col-10 "></div>
        </Form>
      </div>
    </div>
  );
}
