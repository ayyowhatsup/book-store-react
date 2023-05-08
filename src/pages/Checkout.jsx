import { Suspense, useEffect, useRef, useState } from "react";
import { Await, Form, Link, Navigate, useActionData, useFetcher, useLoaderData } from "react-router-dom";
import { getGHNShippingAddressDistrict, getGHNShippingAddressProvince, getGHNShippingFee } from "../endpoints";
import { getGHNShippingAddressWard } from "../endpoints";

export default function Checkout() {
  const { cart } = useLoaderData();
  const fetcher = useFetcher()
  const [VietNamAddress, setVietNamAddress] = useState({province: undefined, district: undefined, ward: undefined})
  const [selected, setSelected] = useState({province: "",district: "", ward: ""})
  const [shippingPrice, setShippingPrice] = useState(0)
  
  useEffect(() =>{
    getGHNShippingAddressProvince().then(data => setVietNamAddress(prev => ({...prev, province: data.data})))
  }, [])

  useEffect(()=>{
    if(selected.province){
      getGHNShippingAddressDistrict(parseInt(selected.province.split('-')[0])).then(data => {
        setVietNamAddress(prev => ({...prev, district: data.data, ward: undefined}))
      })
    }else{
      setVietNamAddress(prev => ({...prev, district: undefined, ward: undefined}))
    }
    setSelected(prev => ({...prev, district: "", ward: ""}))
    setShippingPrice(0)
  }, [selected.province])

  useEffect(()=>{
    if(selected.district){
      getGHNShippingAddressWard(parseInt(selected.district.split('-')[0])).then(data => {
        setVietNamAddress(prev => ({...prev, ward: data.data}))})
    }else{
      setVietNamAddress(prev => ({...prev, ward: undefined}))
    }
    setSelected(prev => ({...prev, ward: ""}))
    setShippingPrice(0)
  },[selected.district])

  useEffect(() => {
    if(selected.district && selected.province && selected.ward){
      cart.then(data => {
        let weight = 0
        data.cart_items.forEach(item => {
          weight += item.product.weight
        })
        return getGHNShippingFee(parseInt(selected.district.split('-')[0]), parseInt(selected.ward.split('-')[0]), weight, cart.sub_total)
      })
      .then(data => setShippingPrice(data.data.service_fee))
    }
  }, [selected.district,selected.province, selected.ward])

  return (
    <Suspense>
      <Await
        resolve={cart}
        children={(cart) =>
          cart.cart_items.length > 0 ? (
            <>
              <div className="page-header border-bottom">
                <div className="container">
                  <div className="d-md-flex justify-content-between align-items-center py-4">
                    <h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">
                      Thanh toán
                    </h1>
                    <nav className="font-size-2">
                      <Link to={"/"} className="h-primary">
                        Trang chủ
                      </Link>
                      <span className="mx-1">
                        <i className="fas fa-angle-right"></i>
                      </span>
                      <Link to={"/cart"} className="h-primary">
                        Giỏ hàng
                      </Link>
                      <span className="mx-1">
                        <i className="fas fa-angle-right"></i>
                      </span>
                      Thanh toán
                    </nav>
                  </div>
                </div>
              </div>

              <div
                id="content"
                className="site-content bg-punch-light space-bottom-3"
              >
                <div className="col-full container">
                  <div id="primary" className="content-area">
                    <main id="main" className="site-main">
                      <article
                        id="post-6"
                        className="post-6 page type-page status-publish hentry"
                      >
                        <header className="entry-header space-bottom-1">
                        </header>

                        <div className="entry-content">
                          <div>
                            <fetcher.Form
                              name="checkout"
                              method="post"
                              className="checkout row mt-8"
                              action=""
                            >
                              <div
                                className="col2-set col-md-6 col-lg-7 col-xl-8 mb-6 mb-md-0"
                                id="customer_details"
                              >
                                <div className="px-4 pt-5 bg-white border">
                                  <div>
                                    <h3 className="mb-4 font-size-3">
                                      Thông tin vận chuyển
                                    </h3>
                                    <div className="row">
                                      <p
                                        className="col-lg-12 mb-4d75 form-row form-row-first"
                                      >
                                        <label
                                          htmlFor="to_name"
                                          className="form-label"
                                        >
                                          Họ và tên {" "}
                                          <abbr
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <input
                                          type="text"
                                          className="input-text form-control"
                                          name="name"
                                          id="to_name"
                                          autoFocus="autofocus"
                                          required
                                        />
                                      </p>
                                      <p
                                        className="col-12 mb-4d75 form-row form-row-first"
                                      >
                                        <label
                                          htmlFor="to_phone"
                                          className="form-label"
                                        >
                                          Số điện thoại{" "}
                                          <abbr
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <input
                                          type="tel"
                                          className="input-text form-control"
                                          name="phone_number"
                                          id="to_phone"
                                          required
                                        />
                                      </p>
                                      <p
                                        className="col-12 mb-4d75 form-row form-row-last"
                                      >
                                        <label
                                          htmlFor="to_email"
                                          className="form-label"
                                        >
                                          Địa chỉ email{" "}
                                          <abbr
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <input
                                          type="email"
                                          className="input-text form-control"
                                          name="email"
                                          id="to_email"
                                          required
                                        />
                                      </p>
                                      <p
                                        className="col-12 mb-4d75 form-row form-row-wide"
                                      >
                                        <label
                                          htmlFor="shipping_province"
                                          className="form-label"
                                        >
                                          Tỉnh/ Thành phố{" "}
                                          <abbr
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <select value={selected.province} onChange={(e) => {setSelected(prev => ({...prev, province:e.target.value}))}}
                                          name="shipping_province"
                                          id="shipping_province"
                                          className="form-control"
                                          tabIndex="-1"
                                          aria-hidden="true"
                                          required
                                        >
                                          <option value={""}>
                                            Chọn Tỉnh/ Thành phố
                                          </option>
                                          {VietNamAddress.province && VietNamAddress.province.map(item => (
                                            <option value={`${item.ProvinceID}-${item.ProvinceName}`}>
                                            {item.ProvinceName}
                                          </option>
                                          ))}
                                        </select>
                                      </p>
                                      <p
                                        className="col-12 mb-4d75 form-row form-row-wide"
                                      >
                                        <label
                                          htmlFor="shipping_district"
                                          className="form-label"
                                        >
                                          Quận/ Huyện{" "}
                                          <abbr
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <select value={selected.district} onChange={(e) => {setSelected(prev => ({...prev, district:e.target.value}))}}
                                          name="shipping_district"
                                          id="shipping_district"
                                          className="form-control"
                                          tabIndex="-1"
                                          aria-hidden="true"
                                          required
                                        >
                                          <option value={""}>
                                            Chọn Quận/ Huyện
                                          </option>
                                          {VietNamAddress.district && VietNamAddress.district.map(item => (
                                            <option value={`${item.DistrictID}-${item.DistrictName}`}>
                                            {item.DistrictName}
                                          </option>
                                          ))}
                                        </select>
                                      </p>
                                      <p
                                        className="col-12 mb-4d75 form-row form-row-wide"
                                      >
                                        <label
                                          htmlFor="shipping_ward"
                                          className="form-label"
                                        >
                                          Phường/ Xã{" "}
                                          <abbr
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <select value={selected.ward} onChange={(e) => {setSelected(prev => ({...prev, ward:e.target.value}))}}
                                          name="shipping_ward"
                                          id="shipping_ward"
                                          className="form-control"
                                          tabIndex="-1"
                                          aria-hidden="true"
                                          required
                                        >
                                          <option value={""}>
                                            Chọn Phường/ Xã
                                          </option>
                                          {VietNamAddress.ward && VietNamAddress.ward.map(item => (
                                            <option value={`${item.WardCode}-${item.WardName}`}>
                                            {item.WardName}
                                          </option>
                                          ))}
                                        </select>
                                      </p>
                                      <p
                                        className="col-12 mb-4d75 form-row form-row-wide"
                                        data-o_class="form-row form-row-wide"
                                      >
                                        <label
                                          htmlFor="shipping_address"
                                          className="form-label"
                                        >
                                          Địa chỉ cụ thể{" "}
                                          <abbr
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <input
                                          type="text"
                                          className="input-text form-control"
                                          name="shipping_address"
                                          id="shipping_address"
                                          required
                                        />
                                      </p>                                   
                                    </div>
                                  </div>
                                </div>
                                <div className="px-4 pt-5 bg-white border border-top-0 mt-n-one">
                                  <div className="woocommerce-additional-fields">
                                    <h3 className="mb-4 font-size-3">
                                      Thông tin bổ sung
                                    </h3>
                                    <div className="woocommerce-additional-fields__field-wrapper">
                                      <p
                                        className="col-12 mb-4d75 px-0 form-row notes"
                                        id="order_comments_field"
                                        data-priority
                                      >
                                        <label
                                          htmlFor="additional_note"
                                          className="form-label"
                                        >
                                          Ghi chú (Nếu có)
                                        </label>
                                        <textarea
                                          name="additional_note"
                                          className="input-text form-control"
                                          id="order_comments"
                                          placeholder="Thêm ghi chú cho đơn hàng..."
                                          rows="8"
                                          cols="5"
                                        ></textarea>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="order_review"
                                className="col-md-6 col-lg-5 col-xl-4 woocommerce-checkout-review-order"
                              >
                                <div
                                  id="checkoutAccordion"
                                  className="border border-gray-900 bg-white mb-5"
                                >
                                  <div className="p-4d875 border">
                                    <div
                                      id="checkoutHeadingOnee"
                                      className="checkout-head"
                                    >
                                      <div
                                        className="text-dark d-flex align-items-center justify-content-between"
                                      >
                                        <h3 className="checkout-title mb-0 font-weight-medium font-size-3">
                                          Đơn hàng của bạn
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      className="mt-4 checkout-content collapse show"
                                    >
                                      <table className="shop_table woocommerce-checkout-review-order-table">
                                        <tbody>
                                            {cart.cart_items.map(item => (
                                                <tr className="cart_item">
                                            <td className="product-name">
                                              {item.product.name}&nbsp;{" "}
                                              <strong className="product-quantity">
                                                × {item.quantity}
                                              </strong>
                                            </td>
                                            <td className="product-total">
                                              <span className="woocommerce-Price-amount amount">
                                                {new Intl.NumberFormat("vi-VN", {style: 'currency',currency: "VND"}).format(item.product.price * item.quantity)}
                                              </span>
                                            </td>
                                          </tr>
                                            ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="p-4d875 border">
                                    <div
                                    >
                                      <div
                                        className="text-dark d-flex align-items-center justify-content-between"
                                      >
                                        <h3 className="checkout-title mb-0 font-weight-medium font-size-3">
                                          Tóm tắt
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      id="checkoutCollapseOne"
                                      className="mt-4 checkout-content collapse show"
                                    >
                                      <table className="shop_table shop_table_responsive">
                                        <tbody>
                                          <tr className="checkout-subtotal">
                                            <th>Tổng tiền</th>
                                            <td data-title="Subtotal">
                                              <span className="amount">
                                                {new Intl.NumberFormat("vi-VN", {style: 'currency',currency: "VND"}).format(cart.sub_total)}
                                              </span>
                                            </td>
                                          </tr>
                                          <tr className="order-shipping">
                                            <th>Phí vận chuyển</th>
                                            <td data-title="Shipping">
                                              {new Intl.NumberFormat("vi-VN", {style: 'currency',currency: "VND"}).format(shippingPrice)}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <input type="hidden" name="shipping_fee" value={shippingPrice}/>
                                    </div>
                                  </div>
                                  <div className="p-4d875 border">
                                    <table className="shop_table shop_table_responsive">
                                      <tbody>
                                        <tr className="order-total">
                                          <th>Tổng cộng</th>
                                          <td data-title="Total">
                                            <strong>
                                              <span className="amount">
                                                {new Intl.NumberFormat("vi-VN", {style: 'currency',currency: "VND"}).format(cart.sub_total + shippingPrice)}
                                              </span>
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="p-4d875 border">
                                    <div
                                    >
                                      <div
                                        className="text-dark d-flex align-items-center justify-content-between"
                                      >
                                        <h3 className="checkout-title mb-0 font-weight-medium font-size-3">
                                          Thanh toán
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      id="checkoutCollapseThreee"
                                      className="mt-4 checkout-content collapse show"
                                    >
                                      <div
                                        id="payment"
                                      >
                                        <ul className="methods">
                                          <li className="payment_method_bacs">
                                            <label htmlFor="payment_method_bacs">
                                              Ví VNPAY
                                            </label>
                                            <div
                                              className="payment_box payment_method_bacs"
                                              style={{ display: "block" }}
                                            >
                                              <p>
                                                Thanh toán trực tiếp với Ví
                                                VNPAY. Hỗ trợ tất cả các ngân
                                                hàng trong nước hoặc sử dụng
                                                VISA / Mastercard
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-row place-order">
                                  <button type="submit" 
                                    className="button alt btn btn-dark btn-block rounded-0 py-4"
                                  >
                                    Tiến hành thanh toán
                                  </button>
                                </div>
                              </div>
                            </fetcher.Form>
                          </div>
                        </div>
                      </article>
                    </main>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Navigate to={"/"} replace />
          )
        }
      />
    </Suspense>
  );
}
