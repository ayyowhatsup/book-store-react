import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export default function OrderList() {
  const { orders } = useLoaderData();
  return (
    <Suspense>
      <Await
        resolve={orders}
        children={(orders) => (
          <div
            className="tab-pane fade show active"
            id="pills-three-example1"
            role="tabpanel"
            aria-labelledby="pills-three-example1-tab"
          >
            <div className="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-2 mb-lg-4">
              <h6 className="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
                Đơn hàng
              </h6>
              <table className="table">
                <thead>
                  <tr className="border">
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium pl-3 pl-md-5"
                    >
                      Đơn hàng
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      Ngày đặt hàng
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      Khách hàng
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr className="border">
                      <th className="pl-3 pl-md-5 font-weight-normal align-middle py-6">
                        {order.id}
                      </th>
                      <td className="align-middle py-5">
                        {
                          new Date(order.created_at).toLocaleString({timeZone: "Asia/Saigon"})
                        }
                      </td>
                      <td className="align-middle py-5">
                        <span className="text-primary">
                          {order.name} - {order.shipping_province}
                        </span>
                      </td>
                      <td className="align-middle py-5">
                        <div className="d-flex justify-content-center">
                          <Link
                            to={`${order.id}`}
                            className="btn btn-dark rounded-0 btn-wide font-weight-medium"
                          >
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      />
    </Suspense>
  );
}
