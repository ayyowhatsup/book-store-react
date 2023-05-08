import { Suspense, useRef, useState } from "react";
import { Await, Form, useFetcher, useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem"
import ViewListIcon from "./ViewListIcon"
import ViewGridIcon from "./ViewGridIcon"
import ProductItemLandscape from "./ProductItemLandscape"
import classNames from "classnames";
export default function CategoryProduct() {
  const { products } = useLoaderData();
  const ref = useRef();
  const [isGridView, setIsGridView] = useState(true)
  return (
    <Suspense>
      <Await
        resolve={products}
        children={(products) => (
          <div id="primary" className="content-area order-2">
            <div className="shop-control-bar d-lg-flex justify-content-between align-items-center mb-5 text-center text-md-left">
              <div className="shop-control-bar__left mb-4 m-lg-0">
                <p className="woocommerce-result-count m-0">
                  Hiển thị {products.length} kết quả
                </p>
              </div>
              <div className="shop-control-bar__right d-md-flex align-items-center">
                <Form onSubmit={(e) => e.preventDefault()} ref={ref} className="woocommerce-ordering mb-4 m-md-0" action="" method="get">
                  <select onChange={() => ref.current.submit()}
                    className="js-select selectpicker dropdown-select orderby"
                    name="orderby"
                    data-style="border-bottom shadow-none outline-none py-2"
                  >
                    <option value="" defaultValue>
                      Mặc định
                    </option>
                    <option value="created_at">Mới cập nhật</option>
                    <option value="price">Sắp theo giá: Thấp đến cao</option>
                    <option value="-price">Sắp theo giá: Cao đến thấp</option>
                  </select>
                </Form>
                <ul
                  className="nav nav-tab ml-lg-4 justify-content-center justify-content-md-start ml-md-auto"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item border">
                    <div
                      className={classNames("nav-link p-0 height-38 width-38 justify-content-center d-flex align-items-center", {"active": isGridView})}
                      data-toggle="pill"
                      role="tab"
                      aria-controls="pills-one-example1"
                      aria-selected={isGridView?"true":"false"} onClick={() => setIsGridView(true)}
                    >
                      <ViewGridIcon/>
                    </div>
                  </li>
                  <li className="nav-item border">
                    <div
                      className={classNames("nav-link p-0 height-38 width-38 justify-content-center d-flex align-items-center", {"active": isGridView==false})}
                      data-toggle="pill"
                      role="tab"
                      aria-controls="pills-two-example1"
                      aria-selected={isGridView?"false":"true"} onClick={() => setIsGridView(false)}
                    >
                      <ViewListIcon/>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-content" id="pills-tabContent">
              {isGridView && <div
                className="tab-pane fade show active"
                id="pills-one-example1"
                role="tabpanel"
                aria-labelledby="pills-one-example1-tab"
              >
                <ul className="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-wd-4 border-top border-left mb-6">
                  {products.map((book) => (
                      <ProductItem product={book} />
                  ))}
                </ul>
              </div>}
              {isGridView == false && <div
                className="tab-pane fade show active"
                id="pills-two-example1"
                role="tabpanel"
                aria-labelledby="pills-two-example1-tab"
              >
                <ul className="products list-unstyled mb-6">
                  {products.map(product => (
                    <ProductItemLandscape product={product}/>
                  ))}
                </ul>
              </div>}
            </div>

            {/* <nav aria-label="Page navigation example">
              <ul className="pagination pagination__custom justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li
                  className="flex-shrink-0 flex-md-shrink-1 page-item active"
                  aria-current="page"
                >
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="flex-shrink-0 flex-md-shrink-1 page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        )}
      />
    </Suspense>
  );
}
