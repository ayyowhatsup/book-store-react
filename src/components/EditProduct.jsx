import { Suspense } from "react";
import { Await, Form, Link, useLoaderData, useSubmit } from "react-router-dom";

export default function EditProduct() {
  const { product, authors, categories } = useLoaderData();
  const submit = useSubmit()
  return (
    <Suspense>
      <Await
        resolve={product}
        children={(product) => (
          <div
            className="tab-pane fade show active"
            id="pills-one-example1"
            role="tabpanel"
            aria-labelledby="pills-one-example1-tab"
          >
            <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
              <div className="d-flex justify-content-between mb-lg-8">
                <h6 className="font-weight-medium font-size-7 ml-lg-1  pb-xl-1">
                  {product.name}
                </h6>
              </div>
              <Form action="." method="PATCH" encType="multipart/form-data" className="woocommerce-billing-fields__field-wrapper row">
                <p
                  className="col-lg-12 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                  id="billing_first_name_field"
                  data-priority="10"
                >
                  <label htmlFor="billing_first_name" className="form-label">
                    Tên{" "}
                  </label>
                  <input
                    type="text"
                    className="input-text form-control"
                    name="name"
                    value={product.name}
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
                    Nhà Xuất Bản{" "}
                  </label>
                  <input
                    type="text"
                    name="publisher"
                    className="input-text form-control"
                    id="billing_first_name"
                    autoFocus="autofocus"
                    value={product.publisher}
                  />
                </p>
                <p
                  className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                  id="billing_first_name_field"
                  data-priority="10"
                >
                  <label htmlFor="billing_first_name" className="form-label">
                    Năm Xuất Bản{" "}
                  </label>
                  <input
                    type="number"
                    name="publish_year"
                    className="input-text form-control"
                    id="billing_first_name"
                    autoFocus="autofocus"
                    value={product.publish_year}
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
                    value={product.language}
                  />
                </p>
                <p
                  className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                  id="billing_first_name_field"
                  data-priority="10"
                >
                  <label htmlFor="billing_first_name" className="form-label">
                    Trọng lượng{" "}
                  </label>
                  <input
                    type="number"
                    name="weight"
                    className="input-text form-control"
                    id="billing_first_name"
                    autoFocus="autofocus"
                    value={product.weight}
                  />
                </p>
                <p
                  className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                  id="billing_first_name_field"
                  data-priority="10"
                >
                  <label htmlFor="billing_first_name" className="form-label">
                    Đơn giá{" "}
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="input-text form-control"
                    id="billing_first_name"
                    autoFocus="autofocus"
                    value={product.price}
                  />
                </p>
                <p
                  className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                  id="billing_first_name_field"
                  data-priority="10"
                >
                  <label htmlFor="billing_first_name" className="form-label">
                    Tồn kho{" "}
                  </label>
                  <input
                    type="number"
                    className="input-text form-control"
                    id="billing_first_name"
                    autoFocus="autofocus"
                    value={product.inventory}
                  />
                </p>
                <p
                  className="col-lg-12 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                  id="billing_first_name_field"
                  data-priority="10"
                >
                  <label htmlFor="billing_first_name" className="form-label">
                    Ảnh{" "}<small>{" "}hiện tại{" "}<Link target="_blank" to={product.image}>{product.image}</Link></small>
                  </label>
                  <input
                    type="file"
                    className="input-text form-control"
                    name="image"
                    accept="image/png, image/jpeg"
                    autoFocus="autofocus"
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
                  <select multiple size={10}
                    className="form-control"
                    id="billing_first_name"
                    name="categories"
                    autoFocus="autofocus"
                    required
                  >
                    {categories.map(category => (
                        <option selected={product.categories.map(item => item.slug).includes(category.slug)} value={category.slug}>{category.name}</option>
                    ))}
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
                  <select multiple size={10}
                    className="form-control"
                    id="billing_first_name"
                    name="authors"
                    autoFocus="autofocus"
                    required
                  >
                    {authors.map(author => (
                        <option value={author.slug} selected={product.authors.map(item => item.slug).includes(author.slug)}>{author.name}</option>
                    ))}
                  </select>
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
                    value={product.description}
                  />
                </p>
                <button type="submit" className="col border p-3 btn font-weight-bold">Cập nhật</button>
                <div className="col-9"></div>
                <div onClick={() => {submit(null, {action: `admin/book/${product.slug}`, method: "DELETE"})}} className="col border p-3 btn">Xóa</div>
              </Form>
            </div>
          </div>
        )}
      />
    </Suspense>
  );
}
