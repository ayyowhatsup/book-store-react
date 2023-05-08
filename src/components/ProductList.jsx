import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export default function ProductList() {
    const {products } = useLoaderData()
    return (
        <Suspense>
      <Await
        resolve={products}
        children={(products) => (
          <div
            className="tab-pane fade show active"
            id="pills-one-example1"
            role="tabpanel"
            aria-labelledby="pills-one-example1-tab"
          >
            <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
              <div className="d-flex justify-content-between mb-lg-8">
                <h6 className="font-weight-medium font-size-7 ml-lg-1  pb-xl-1">
                  Danh mục sách
                </h6>
                <Link to={"add"} className="btn font-size-2 border font-weight-bold">Thêm mới</Link>
              </div>

              {products.map((product) => (
                <div className="row">
                  <div className="col">
                    <Link to={product.slug} className="d-block border p-3">{product.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      />
    </Suspense>
    )
};
