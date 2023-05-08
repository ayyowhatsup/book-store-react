import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

export default function AccountDashboard() {
  const {user, signOut} = useContext(AuthContext)
  return (
    <div
      className="tab-pane fade show active"
      id="pills-one-example1"
      role="tabpanel"
      aria-labelledby="pills-one-example1-tab"
    >
      <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 space-bottom-2 space-bottom-lg-3 mb-xl-1">
        <h6 className="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
          Dashboard
        </h6>
        <div className="ml-lg-1 mb-4">
          <span className="font-size-22">Xin chào {user.name}</span>
          <span className="font-size-2">
            {" "}
            (Không phải {user.name}?{" "}
            <div onClick={() => signOut()} className="d-inline text-primary" style={{cursor: 'pointer'}} >
              Đăng xuất
            </div>
            )
          </span>
        </div>
        <div className="mb-4">
          <p className="mb-0 font-size-2 ml-lg-1 text-gray-600">
            Bạn có thể xem thông tin <span className="text-dark">đơn hàng</span>
            , quản lí <span className="text-dark">địa chỉ của bạn</span> và thay
            đổi <span className="text-dark">thông tin cá nhân và mật khẩu</span>
          </p>
        </div>
        <div className="row no-gutters row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col">
            <div className="border py-6 text-center">
              <Link to={'info'}  className="btn bg-gray-200 rounded-circle px-4 mb-2">
                <span className="flaticon-user-1 font-size-10 btn-icon__inner text-primary"></span>
              </Link>
              <div className="font-size-3 mb-xl-1">Thông tin cá nhân</div>
            </div>
          </div>
          <div className="col">
            <div className="border py-6 border-left-0 text-center">
              <Link to={'order'} className="btn btn-primary rounded-circle px-4 mb-2">
                <span className="flaticon-order font-size-10 btn-icon__inner"></span>
              </Link>
              <div className="font-size-3 mb-xl-1">Đơn hàng</div>
            </div>
          </div>
          <div className="col">
            <div className="border border-top-0 py-6 text-center">
              <Link to={'wishlist'} className="btn bg-gray-200  rounded-circle px-4 mb-2">
                <span className="flaticon-heart font-size-10 btn-icon__inner text-primary"></span>
              </Link>
              <div className="font-size-3 mb-xl-1">Danh sách yêu thích</div>
            </div>
          </div>
          <div className="col">
            <div className="border border-left-0 border-top-0 py-6 text-center">
              <div onClick={() => signOut()} className="btn bg-gray-200 rounded-circle px-4 mb-2">
                <span className="flaticon-exit font-size-10 btn-icon__inner text-primary"></span>
              </div>
              <div className="font-size-3 mb-xl-1">Đăng xuất</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
