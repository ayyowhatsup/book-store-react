import { Fragment, useContext } from "react";
import { Form, Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Header() {
  const { user, signOut } = useContext(AuthContext);
  const handleClick = () => {
    signOut();
  };
  return (
    <Fragment>
      <header id="site-header" className="site-header__v7">
        <div className="topbar d-none d-md-block bg-punch-light">
          <div className="container">
            <div className="topbar__nav d-lg-flex justify-content-between align-items-center font-size-2">
              <ul className="topbar__nav--left nav ml-lg-n3 justify-content-center">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link text-dark">
                    <i className="font-size-3 glph-icon flaticon-question mr-2"></i>
                    Can we help you?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"tel:0123456789"} className="nav-link text-dark">
                    <i className="font-size-3 glph-icon flaticon-phone mr-2"></i>
                    +0123-456-789
                  </Link>
                </li>
              </ul>
              <ul className="topbar__nav--right nav justify-content-center">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link p-2 link-black-100 d-flex align-items-center"
                  >
                    <i className="glph-icon flaticon-pin mr-2 font-size-3"></i>
                    Hệ thống cửa hàng
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/order-tracking'} className="nav-link p-2 link-black-100 d-flex align-items-center">
                    <i className="glph-icon flaticon-sent mr-2 font-size-3"></i>
                    Theo dõi đơn hàng
                  </Link>
                </li>
                {user && (
                  <li className="nav-item d-flex align-items-center">
                    <div className="nav-link p-2 link-black-100 d-flex align-items-center">
                      Xin chào, {user.name}
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={handleClick}
                        className="ml-2"
                      >
                        <i className="glph-icon flaticon-exit mr-2 font-size-2"></i>
                        Đăng xuất
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="masthead">
          <div className="bg-white border-bottom">
            <div className="container pt-3 pb-2 pt-lg-5 pb-lg-5">
              <div className="d-flex align-items-center justify-content-between position-relative flex-wrap">
                <div className="site-branding pr-md-11 mx-auto mx-md-0">
                  <Link to={"/"} className="d-block mb-1">
                  <svg
                      width="94.94"
                      height="23.19"
                      viewBox="0 0 94.94 23.19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="svgGroup"
                        strokeLinecap="round"
                        fillRule="evenodd"
                        fontSize="9pt"
                        stroke="#ab8787"
                        strokeWidth="0.25mm"
                        fill="#d945cc"
                        style={{stroke: '#ab8787', strokeWidth: '0.25mm', fill: '#d945cc'}}
                      >
                        <path
                          d="M 45.78 22.83 L 43.08 22.83 L 43.08 0.63 L 45.78 0.63 L 45.78 9.72 Q 46.62 8.49 47.91 7.68 A 5.272 5.272 0 0 1 50.047 6.927 A 6.779 6.779 0 0 1 50.94 6.87 Q 52.956 6.87 54.194 7.797 A 3.978 3.978 0 0 1 54.885 8.46 A 5.521 5.521 0 0 1 55.966 10.673 Q 56.162 11.466 56.187 12.393 A 10.129 10.129 0 0 1 56.19 12.66 L 56.19 22.83 L 53.49 22.83 L 53.49 12.96 A 5.887 5.887 0 0 0 53.389 11.838 Q 53.21 10.913 52.71 10.26 A 2.526 2.526 0 0 0 50.863 9.256 A 3.594 3.594 0 0 0 50.52 9.24 A 3.969 3.969 0 0 0 48.506 9.8 A 5.276 5.276 0 0 0 47.895 10.215 Q 46.65 11.19 45.78 12.51 L 45.78 22.83 Z M 28.02 22.83 L 25.32 22.83 L 25.32 7.23 L 27.93 7.23 L 27.93 9.84 Q 28.77 8.58 30.075 7.725 A 5.195 5.195 0 0 1 32.207 6.938 A 6.789 6.789 0 0 1 33.18 6.87 Q 35.196 6.87 36.434 7.797 A 3.978 3.978 0 0 1 37.125 8.46 A 5.521 5.521 0 0 1 38.206 10.673 Q 38.402 11.466 38.427 12.393 A 10.129 10.129 0 0 1 38.43 12.66 L 38.43 22.83 L 35.73 22.83 L 35.73 12.96 A 5.779 5.779 0 0 0 35.627 11.838 Q 35.496 11.173 35.196 10.649 A 3.29 3.29 0 0 0 34.935 10.26 A 2.574 2.574 0 0 0 33.052 9.254 A 3.618 3.618 0 0 0 32.73 9.24 A 3.937 3.937 0 0 0 30.675 9.829 A 5.206 5.206 0 0 0 30.12 10.215 Q 28.89 11.19 28.02 12.51 L 28.02 22.83 Z M 2.52 21.54 L 2.52 22.83 L 0 22.83 L 0 0.63 L 2.7 0.63 L 2.7 8.85 A 4.653 4.653 0 0 1 3.266 8.307 Q 3.571 8.058 3.952 7.814 A 9.994 9.994 0 0 1 4.455 7.515 A 4.975 4.975 0 0 1 6.024 6.968 A 6.727 6.727 0 0 1 7.2 6.87 Q 9 6.87 10.575 7.815 A 6.699 6.699 0 0 1 12.728 9.905 A 8.239 8.239 0 0 1 13.11 10.545 A 7.705 7.705 0 0 1 13.859 12.657 Q 14.05 13.588 14.068 14.657 A 13.282 13.282 0 0 1 14.07 14.88 A 9.995 9.995 0 0 1 13.864 16.946 A 8.325 8.325 0 0 1 13.47 18.27 A 8.81 8.81 0 0 1 12.522 20.071 A 7.645 7.645 0 0 1 11.865 20.895 A 7.468 7.468 0 0 1 10.026 22.369 A 6.991 6.991 0 0 1 9.6 22.59 A 6.002 6.002 0 0 1 7.39 23.178 A 5.763 5.763 0 0 1 7.02 23.19 Q 5.67 23.19 4.485 22.695 A 9.082 9.082 0 0 1 3.494 22.213 Q 2.947 21.901 2.52 21.54 Z M 92.85 16.14 L 81.93 16.14 A 7.226 7.226 0 0 0 82.272 17.648 Q 82.673 18.791 83.46 19.56 A 4.243 4.243 0 0 0 85.747 20.703 A 6.006 6.006 0 0 0 86.79 20.79 A 11.019 11.019 0 0 0 88.073 20.719 A 8.273 8.273 0 0 0 89.22 20.505 Q 90.3 20.22 91.29 19.77 L 91.92 22.08 A 12.231 12.231 0 0 1 90.62 22.568 A 15.559 15.559 0 0 1 89.49 22.875 A 11.674 11.674 0 0 1 87.962 23.121 A 15.608 15.608 0 0 1 86.46 23.19 A 8.495 8.495 0 0 1 84.136 22.888 A 6.332 6.332 0 0 1 81.135 21.045 A 7.056 7.056 0 0 1 79.573 18.183 Q 79.17 16.784 79.17 15.03 A 10.608 10.608 0 0 1 79.42 12.683 A 8.652 8.652 0 0 1 80.055 10.845 A 7.393 7.393 0 0 1 81.56 8.72 A 6.866 6.866 0 0 1 82.53 7.935 Q 84.12 6.87 86.22 6.87 A 8.566 8.566 0 0 1 87.861 7.019 Q 88.864 7.215 89.665 7.668 A 5.164 5.164 0 0 1 89.955 7.845 Q 91.44 8.82 92.19 10.47 A 8.456 8.456 0 0 1 92.918 13.429 A 10.03 10.03 0 0 1 92.94 14.1 A 22.561 22.561 0 0 1 92.853 16.109 A 20.779 20.779 0 0 1 92.85 16.14 Z M 69.69 17.94 L 69.69 0.63 L 72.39 0.63 L 72.39 17.67 Q 72.39 18.642 72.633 19.312 A 2.392 2.392 0 0 0 73.065 20.07 A 2.209 2.209 0 0 0 74.44 20.813 A 3.217 3.217 0 0 0 74.94 20.85 Q 75.51 20.85 76.065 20.715 A 6.658 6.658 0 0 0 76.504 20.593 Q 76.785 20.504 77.01 20.4 L 77.67 22.59 A 5.445 5.445 0 0 1 77.189 22.775 Q 76.807 22.903 76.335 23.01 A 7.145 7.145 0 0 1 75.388 23.156 A 9.154 9.154 0 0 1 74.58 23.19 A 6.259 6.259 0 0 1 73.113 23.024 A 5.263 5.263 0 0 1 72.09 22.665 A 3.805 3.805 0 0 1 70.493 21.235 A 4.757 4.757 0 0 1 70.335 20.97 Q 69.69 19.8 69.69 17.94 Z M 20.52 22.83 L 17.82 22.83 L 17.82 7.23 L 20.52 7.23 L 20.52 22.83 Z M 2.7 11.25 L 2.7 19.59 A 5.397 5.397 0 0 0 3.789 20.246 A 6.541 6.541 0 0 0 4.32 20.46 A 5.839 5.839 0 0 0 6.169 20.789 A 6.611 6.611 0 0 0 6.3 20.79 A 5.097 5.097 0 0 0 7.805 20.575 A 4.424 4.424 0 0 0 8.895 20.07 A 4.785 4.785 0 0 0 10.44 18.447 A 5.894 5.894 0 0 0 10.665 18.03 A 6.26 6.26 0 0 0 11.219 16.216 A 8.243 8.243 0 0 0 11.31 14.97 Q 11.31 13.234 10.71 11.973 A 5.202 5.202 0 0 0 10.665 11.88 Q 10.02 10.59 8.955 9.9 Q 7.89 9.21 6.6 9.21 A 4.422 4.422 0 0 0 4.912 9.529 A 4.216 4.216 0 0 0 4.275 9.855 Q 3.24 10.5 2.7 11.25 Z M 81.9 13.95 L 90.45 13.95 A 7.307 7.307 0 0 0 90.329 12.574 Q 90.18 11.799 89.849 11.192 A 3.727 3.727 0 0 0 89.31 10.44 A 3.747 3.747 0 0 0 87.222 9.307 A 5.519 5.519 0 0 0 86.16 9.21 Q 84.42 9.21 83.28 10.425 Q 82.14 11.64 81.9 13.95 Z M 22.62 2.52 L 16.62 5.58 L 15.69 3.75 L 21.36 0 L 22.62 2.52 Z"
                          vectorEffect="non-scaling-stroke"
                        />
                      </g>
                    </svg>
                  </Link>
                  
                </div>
                <div className="site-search ml-xl-0 ml-md-auto w-r-100 flex-grow-1 mr-md-5 py-2 py-md-0">
                  <Form action="/category" method="get" className="form-inline my-2 my-xl-0">
                    <div className="input-group w-100">
                      <div className="input-group-prepend z-index-2 d-block d-xl-block">
                      </div>
                      <input
                        type="search"
                        name="q"
                        className="form-control border-right-0 px-3"
                        placeholder="Tìm kiếm sản phẩm theo tên"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <div className="input-group-append border-left">
                        <button
                          className="btn btn-dark px-3 rounded-0 py-2"
                          type="submit"
                        >
                          <i className="mx-1 glph-icon flaticon-loupe "></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
                <ul className="nav align-self-center d-none d-md-flex">
                  <li className="nav-item">
                    <Link
                      to={"/account/wishlist"}
                      className="nav-link text-dark"
                    >
                      <i className="glph-icon flaticon-heart font-size-4"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/account"}
                      role="button"
                      className="nav-link text-dark"
                    >
                      <i className="glph-icon flaticon-user font-size-4"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/cart"}
                      role="button"
                      className="nav-link pr-0 text-dark position-relative"
                    >
                      <i className="glph-icon flaticon-icon-126515 font-size-4"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-bottom py-3 py-md-0">
            <div className="container">
              <div className="d-md-flex position-relative">
                <div className="offcanvas-toggler align-self-center mr-md-8 d-flex d-md-block">
                  <Link to={"/"} role="button" className="cat-menu text-dark">
                    <span className="ml-3 font-weight-medium">
                      (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
                    </span>
                  </Link>
                </div>
                <div className="site-navigation mr-auto d-none d-xl-block">
                  <ul className="nav">
                    <li className="nav-item">
                      <NavLink
                        to={"/"}
                        end
                        // className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium d-flex align-items-center"
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link link-black-100 mx-3 px-0 py-3 font-weight-medium border-bottom border-danger"
                            : "nav-link link-black-100 mx-3 px-0 py-3 font-weight-medium"
                        }
                      >
                        Trang Chủ
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={"/category"}
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link link-black-100 mx-3 px-0 py-3 font-weight-medium border-bottom border-danger"
                            : "nav-link link-black-100 mx-3 px-0 py-3 font-weight-medium"
                        }
                      >
                        Thể Loại
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={"/author"}
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link link-black-100 mx-3 px-0 py-3 font-weight-medium border-bottom border-danger"
                            : "nav-link link-black-100 mx-3 px-0 py-3 font-weight-medium"
                        }
                      >
                        Tác giả
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="d-none d-md-block ml-md-auto secondary-navigation">
                  <ul className="nav">
                    {user?.is_admin &&
                    <li className="nav-item">
                      <Link
                        to={"/admin"}
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium"
                      >
                        Quản trị viên
                      </Link>
                    </li>
                    }
                    <li className="nav-item">
                      <Link
                        to={"/"}
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium"
                      >
                        Về chúng tôi
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/"}
                        className="nav-link link-black-100 mx-2 px-0 py-3 font-weight-medium"
                      >
                        Liên hệ hỗ trợ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
