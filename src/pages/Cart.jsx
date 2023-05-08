import { Await, Form, Link, useLoaderData } from "react-router-dom";
import CartItem from "../components/CartItem";
import { Suspense } from "react";
import CartNoItem from "../components/CartNoItem";
export default function Cart() {
  const { cart } = useLoaderData();
  return (
    <div className="right-sidebar">
      <div className="page-header border-bottom">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center py-4">
            <h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">
              Giỏ hàng
            </h1>
            <nav className="font-size-2">
              <Link to={"/"} className="h-primary">
                Trang chủ
              </Link>
              <span className="mx-1">
                <i className="fas fa-angle-right"></i>
              </span>
              Giỏ hàng
            </nav>
          </div>
        </div>
      </div>
      <Suspense>
        <Await
          resolve={cart}
          children={(cart) =>
            cart.cart_items.length > 0 ? (
              <div
                className="site-content bg-punch-light overflow-hidden"
                id="content"
              >
                <div className="container">
                  <header className="entry-header space-top-2 space-bottom-1 mb-2"></header>
                  <div className="row pb-8">
                    <div id="primary" className="content-area">
                      <main id="main" className="site-main ">
                        <div className="page type-page status-publish hentry">
                          <div className="entry-content">
                            <div>
                              <Form
                                className="table-responsive"
                                action="/cart"
                                method="PUT"
                              >
                                <table className="shop_table shop_table_responsive cart">
                                  <thead>
                                    <tr>
                                      <th className="product-name">Sản phẩm</th>
                                      <th className="product-price">Đơn giá</th>
                                      <th className="product-quantity">
                                        Số lượng
                                      </th>
                                      <th
                                        colSpan={2}
                                        className="product-subtotal"
                                      >
                                        Thành tiền
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {cart.cart_items.map((cartItem) => (
                                      <CartItem cartItem={cartItem} />
                                    ))}
                                    <tr>
                                      <td colSpan="5" className="actions">
                                        <input
                                          type="submit"
                                          className="button"
                                          value="Update cart"
                                        ></input>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </main>
                    </div>
                    <div
                      id="secondary"
                      className="sidebar cart-collaterals order-1"
                      role="complementary"
                    >
                      <div
                        id="cartAccordion"
                        className="border border-gray-900 bg-white mb-5"
                      >
                        <div className="p-4d875 border">
                          <div id="cartHeadingOne" className="cart-head">
                            <div
                              className="d-flex align-items-center justify-content-between text-dark"
                              data-toggle="collapse"
                              data-target="#cartCollapseOne"
                              aria-expanded="true"
                              aria-controls="cartCollapseOne"
                            >
                              <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                                Tóm tắt
                              </h3>
                            </div>
                          </div>
                          <div
                            id="cartCollapseOne"
                            className="mt-4 cart-content collapse show"
                            aria-labelledby="cartHeadingOne"
                            data-parent="#cartAccordion"
                          >
                            <table className="shop_table shop_table_responsive">
                              <tbody>
                                <tr className="cart-subtotal">
                                  <th>Tổng tiền</th>
                                  <td data-title="Subtotal">
                                    <span className="woocommerce-Price-amount amount">
                                      {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                      }).format(cart.sub_total)}
                                    </span>
                                  </td>
                                </tr>
                                <tr className="order-shipping">
                                  <th>Tổng số sản phẩm</th>
                                  <td data-title="Shipping">{cart.item_num_total}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="wc-proceed-to-checkout">
                        <Link
                          to={"/checkout"}
                          className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4"
                        >
                          Thanh toán
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <CartNoItem />
            )
          }
        />
      </Suspense>
    </div>
  );
}
