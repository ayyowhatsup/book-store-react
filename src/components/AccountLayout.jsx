import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function AccountLayout() {
  const {signOut} = useContext(AuthContext)
  return (
    <main id="content">
      <div className="container">
        <div className="row">
          <div className="col-md-3 border-right">
            <h6 className="font-weight-medium font-size-7 pt-5 pt-lg-8  mb-5 mb-lg-7">
              Cá nhân
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
                    to={"/account"}
                    role="tab"
                    aria-controls="pills-one-example1"
                    aria-selected="false"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <li className="nav-item mx-0">
                  <Link
                    className="nav-link d-flex align-items-center px-0"
                    id="pills-five-example1-tab"
                    data-toggle="pill"
                    to={"/account/info"}
                    role="tab"
                    aria-controls="pills-five-example1"
                    aria-selected="false"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Thông tin cá nhân
                    </span>
                  </Link>
                </li>
                <li className="nav-item mx-0">
                  <Link
                    className="nav-link d-flex align-items-center px-0"
                    id="pills-two-example1-tab"
                    data-toggle="pill"
                    to={"/account/order"}
                    role="tab"
                    aria-controls="pills-two-example1"
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
                    id="pills-six-example1-tab"
                    data-toggle="pill"
                    to={"/account/wishlist"}
                    role="tab"
                    aria-controls="pills-six-example1"
                    aria-selected="false"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Danh sách yêu thích
                    </span>
                  </Link>
                </li>
                <li className="nav-item mx-0">
                  <div onClick={() => signOut()}
                    className="nav-link d-flex align-items-center px-0"
                  >
                    <span className="font-weight-normal text-gray-600">
                      Đăng xuất
                    </span>
                  </div>
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
