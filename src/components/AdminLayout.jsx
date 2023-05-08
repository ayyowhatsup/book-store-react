import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <main id="content">
      <div className="container">
        <div className="row">
          <div className="col-md-3 border-right">
            <h6 className="font-weight-medium font-size-7 pt-5 pt-lg-8  mb-5 mb-lg-7">
              Quản trị viên
            </h6>
            <div className="tab-wrapper">
              <ul
                className="my__account-nav nav flex-column mb-0"
                role="tablist"
                id="pills-tab"
              >
                <li className="nav-item mx-0">
                  <Link
                    className="nav-link d-flex align-items-center px-0 active"
                    id="pills-one-example1-tab"
                    data-toggle="pill"
                    to={"/admin/order"}
                    role="tab"
                    aria-controls="pills-one-example1"
                    aria-selected="false"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Đơn hàng
                    </span>
                  </Link>
                </li>
                <li className="nav-item mx-0">
                  <Link
                    className="nav-link d-flex align-items-center px-0"
                    id="pills-five-example1-tab"
                    data-toggle="pill"
                    to={"/admin/category"}
                    role="tab"
                    aria-controls="pills-five-example1"
                    aria-selected="false"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Thể loại
                    </span>
                  </Link>
                </li>
                <li className="nav-item mx-0">
                  <Link
                    className="nav-link d-flex align-items-center px-0"
                    id="pills-two-example1-tab"
                    data-toggle="pill"
                    to={"/admin/book"}
                    role="tab"
                    aria-controls="pills-two-example1"
                    aria-selected="false"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Sản phẩm
                    </span>
                  </Link>
                </li>
                <li className="nav-item mx-0">
                  <Link
                    className="nav-link d-flex align-items-center px-0"
                    id="pills-four-example1-tab"
                    data-toggle="pill"
                    to={"/admin/author"}
                    role="tab"
                    aria-controls="pills-four-example1"
                    aria-selected="false"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Tác giả
                    </span>
                  </Link>
                </li>
                <li className="nav-item mx-0">
                  <Link
                    className="nav-link d-flex align-items-center px-0"
                    id="pills-four-example1-tab"
                    data-toggle="pill"
                    to={"/admin/user"}
                    role="tab"
                    aria-controls="pills-four-example1"
                    aria-selected="false"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Người dùng
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content" id="pills-tabContent">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
