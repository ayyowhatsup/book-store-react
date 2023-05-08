import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export default function OrderDetail() {
  const { order } = useLoaderData();
  return (
    <Suspense>
      <Await
        resolve={order}
        children={(order) => (
          <div
            className="tab-pane fade show active"
            id="pills-three-example1"
            role="tabpanel"
            aria-labelledby="pills-three-example1-tab"
          >
            <div className="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-2 mb-lg-4">
              <h6 className="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
                Thông tin đơn hàng {order.id}
              </h6>
              <table className="table">
                <thead>
                  <tr className="border">
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium pl-3 pl-md-5"
                    >
                      Sản phẩm
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      Số lượng
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    ></th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      Thành tiền
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.order_items.map((item) => (
                    <tr className="border">
                      <th className="pl-3 pl-md-5 font-weight-normal align-middle py-6">
                        <Link to={`/product/${item.product.slug}`}>{item.product.name}</Link>
                        
                      </th>
                      <td className="align-middle py-5">{item.quantity}</td>
                      <td className="align-middle py-5">
                        {/* <span className="text-primary">{order.name} - {order.shipping_province}</span>  */}
                      </td>
                      <td className="align-middle py-5">
                        <span>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.total)}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="border">
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium pl-3 pl-md-5"
                    >
                      Giá sản phẩm
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      Phí vận chuyển
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    ></th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      Tổng
                    </th>
                  </tr>
                  <tr className="border">
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium pl-3 pl-md-5"
                    >
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(order.product_price)}
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(order.shipping_fee)}
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    ></th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(order.total)}
                    </th>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-around">
                <div>
                  <div className="mb-2">Thông tin nhận hàng</div>
                  <div>
                    <b>Họ và tên: </b>
                    <span>{order.name}</span>
                  </div>
                  <div>
                    <b>Email: </b>
                    <span>{order.email}</span>
                  </div>
                  <div>
                    <b>Số điện thoại:</b> <span>{order.phone_number}</span>
                  </div>
                  </div>
                  <div>
                    <div className="mb-2">Địa chỉ</div>
                    <div>
                      <b>Tỉnh/Thành phố: </b><span>{order.shipping_province}</span>
                    </div>
                    <div>
                      <b>Quận/ Huyện: </b><span>{order.shipping_district}</span>
                    </div>
                    <div>
                      <b>Thị trấn/ Thị xã: </b><span>{order.shipping_ward}</span>
                    </div>
                  </div>
                
              </div>

              <div></div>
            </div>
          </div>
        )}
      />
    </Suspense>
  );
}
