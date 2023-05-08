import classNames from "classnames";
import { Suspense, useState } from "react";
import { Await, Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { CLOUDINARY_HOST } from "../endpoints";

export default function Product() {
  const { product } = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const submit = useSubmit();

  return (
    <Suspense>
      <Await
        resolve={product}
        children={(product) => (
          <>
            <div className="page-header border-bottom bg-punch-light">
              <div className="container">
                <div className="d-md-flex justify-content-between align-items-center py-4">
                  <h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">
                    {product.name}
                  </h1>
                  <nav className="woocommerce-breadcrumb font-size-2">
                    <Link to={"/"} className="h-primary">
                      Trang Chủ
                    </Link>
                    <span className="breadcrumb-separator mx-1">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    <Link to={"/category"} className="h-primary">
                      Sản Phẩm
                    </Link>
                    <span className="breadcrumb-separator mx-1">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    {product.name}
                  </nav>
                </div>
              </div>
            </div>
            <div id="primary" className="content-area">
              <main id="main" className="site-main ">
                <div className="product">
                  <div className="bg-punch-light">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 col-wd-5 woocommerce-product-gallery woocommerce-product-gallery--with-images images">
                          <figure className="woocommerce-product-gallery__wrapper pt-8 mb-0">
                            <div>
                              <img
                                src={`${CLOUDINARY_HOST}${product.image}`}
                                alt="Image Description"
                                className="mx-auto img-fluid"
                              />
                            </div>
                          </figure>
                        </div>
                        <div className="col-md-8 col-wd-7 pl-0 summary entry-summary">
                          <div className="space-top-2 px-4 px-xl-5 px-wd-7 pb-5">
                            <h1 className="product_title entry-title font-size-7 mb-3">
                              {product.name}
                            </h1>
                            <div className="font-size-2 mb-2">
                              <span className="font-weight-medium">
                                Tác giả:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {product.authors.map((author, index) =>
                                  index != product.authors.length - 1 ? (
                                    <>
                                      <Link
                                        to={`/author/${author.slug}`}
                                        children={author.name}
                                      />
                                      ,{" "}
                                    </>
                                  ) : (
                                    <Link
                                      to={`/author/${author.slug}`}
                                      children={author.name}
                                    />
                                  )
                                )}
                              </span>
                            </div>
                            <div className="font-size-2 mb-4">
                              <span className="font-weight-medium">
                                Thể loại:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {product.categories.map((category, index) =>
                                  index != product.categories.length - 1 ? (
                                    <>
                                      <Link
                                        to={`/category/${category.slug}`}
                                        children={category.name}
                                      />
                                      ,{" "}
                                    </>
                                  ) : (
                                    <Link
                                      to={`/category/${category.slug}`}
                                      children={category.name}
                                    />
                                  )
                                )}
                              </span>
                            </div>
                            <p className="price font-size-22 font-weight-medium mb-3">
                              <span className="woocommerce-Price-amount amount">
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(product.price)}
                              </span>
                            </p>
                            <Form
                              method="POST"
                              action="/cart"
                              className="cart d-md-flex align-items-center flex-wrap"
                            >
                              <div className="quantity mb-4 mb-md-0 d-flex align-items-center">
                                <div className="border px-3 width-120">
                                  <div className="js-quantity">
                                    <div className="d-flex align-items-center">
                                      <div
                                        className="text-dark"
                                        onClick={() =>
                                          setQuantity((prev) =>
                                            prev > 1 ? prev - 1 : 1
                                          )
                                        }
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          width="10px"
                                          height="1px"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            fill="rgb(22, 22, 25)"
                                            d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"
                                          />
                                        </svg>
                                      </div>
                                      <input
                                        type="number"
                                        className="bg-punch-light input-text qty text js-result form-control text-center border-0"
                                        step="1"
                                        min="1"
                                        max="100"
                                        name="quantity"
                                        value={quantity}
                                        onChange={(e) => {
                                          const a = parseInt(e.target.value);
                                          if (a > 100) {
                                            setQuantity(100);
                                          } else if (a < 1) {
                                            setQuantity(1);
                                          } else {
                                            setQuantity(a);
                                          }
                                        }}
                                        title="Quantity"
                                      />
                                      <input
                                        type="hidden"
                                        name="product_slug"
                                        value={product.slug}
                                      />
                                      <div
                                        className="text-dark"
                                        onClick={() =>
                                          setQuantity((prev) => prev + 1)
                                        }
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          width="10px"
                                          height="10px"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            fill="rgb(22, 22, 25)"
                                            d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="mb-4 mb-md-0 btn btn-dark border-0 rounded-0 p-3 min-width-250 ml-md-4 single_add_to_cart_button button alt"
                              >
                                Thêm vào giỏ hàng
                              </button>
                              <ul className="list-unstyled nav ml-xl-5 mt-md-4 mt-xl-0">
                                <li className="mr-6 mb-4 mb-md-0">
                                  <div
                                    onClick={() => {
                                      const formData = new FormData();
                                      formData.append(
                                        "product_slug",
                                        product.slug
                                      );
                                      submit(formData, {
                                        method: "POST",
                                        action: "/account/wishlist",
                                      });
                                    }}
                                    className="h-primary"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <i className="flaticon-heart mr-2"></i> Yêu
                                    thích
                                  </div>
                                </li>
                              </ul>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="woocommerce-tabs wc-tabs-wrapper mb-10">
                    <ul
                      className="tabs wc-tabs nav bg-punch-light pb-6 pt-6 justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li
                        className={classNames(
                          "flex-shrink-0 flex-md-shrink-1 nav-item",
                          { "border-bottom border-dark": tabIndex == 0 }
                        )}
                        onClick={() => setTabIndex(0)}
                      >
                        <div
                          className="py-2 nav-link font-weight-medium active"
                          id="pills-one-example1-tab"
                          data-toggle="pill"
                          href="#pills-one-example1"
                          role="tab"
                          aria-controls="pills-one-example1"
                          aria-selected="true"
                          style={{ cursor: "pointer" }}
                        >
                          Mô tả
                        </div>
                      </li>
                      <li
                        className={classNames(
                          "flex-shrink-0 flex-md-shrink-1 nav-item",
                          { "border-bottom border-dark": tabIndex == 1 }
                        )}
                        onClick={() => setTabIndex(1)}
                      >
                        <div
                          className="py-2 nav-link font-weight-medium "
                          id="pills-two-example1-tab"
                          data-toggle="pill"
                          href="#pills-two-example1"
                          role="tab"
                          aria-controls="pills-two-example1"
                          aria-selected="false"
                          style={{ cursor: "pointer" }}
                        >
                          Thông tin sản phẩm
                        </div>
                      </li>
                    </ul>

                    <div
                      className="tab-content container"
                      id="pills-tabContent"
                    >
                      {tabIndex == 0 && (
                        <div
                          className="woocommerce-Tabs-panel panel col-xl-8 offset-xl-2 entry-content wc-tab tab-pane fade pt-9 show active"
                          id="pills-one-example1"
                          role="tabpanel"
                          aria-labelledby="pills-one-example1-tab"
                        >
                          {product.description.split("\n").map((line) => (
                            <p className="mb-4">{line}</p>
                          ))}
                        </div>
                      )}
                      {tabIndex == 1 && (
                        <div
                          className="woocommerce-Tabs-panel panel col-xl-8 offset-xl-2 entry-content wc-tab tab-pane fade pt-9 show active"
                          id="pills-two-example1"
                          role="tabpanel"
                          aria-labelledby="pills-two-example1-tab"
                        >
                          <div className="table-responsive mb-4">
                            <table className="table table-hover table-borderless">
                              <tbody>
                                <tr>
                                  <th className="px-4 px-xl-5">Khối lượng</th>
                                  <td>{product?.weight}g</td>
                                </tr>
                                <tr>
                                  <th className="px-4 px-xl-5">
                                    Năm xuất bản:{" "}
                                  </th>
                                  <td>{product?.publish_year}</td>
                                </tr>
                                <tr>
                                  <th className="px-4 px-xl-5">
                                    Nhà xuất bản:
                                  </th>
                                  <td>{product?.publisher}</td>
                                </tr>
                                <tr>
                                  <th className="px-4 px-xl-5">Ngôn ngữ:</th>
                                  <td>{product.language}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </>
        )}
      />
    </Suspense>
  );
}
