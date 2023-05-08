import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Register() {
  const {user, signUp} = useContext(AuthContext)

  const [credentials, setCredentials] = useState({email:"", password:"", confirm_password: ""})

  const handleClick = () => {
    signUp(credentials)
  }
  return (
    <>
      <div className="page-header border-bottom">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center py-4">
            <h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">
              Đăng ký
            </h1>
            <nav className="woocommerce-breadcrumb font-size-2">
              <Link to={"/"} className="h-primary">
                Trang chủ
              </Link>
              <span className="breadcrumb-separator mx-1">
                <i className="fas fa-angle-right"></i>
              </span>
              Đăng ký
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <form>
            <div id="signup" data-target-group="idForm">
              <div className="p-4 p-md-6">
                <div className="form-group mb-4">
                  <div className="js-form-message js-focus-state">
                    <label
                      id="signinEmailLabel1"
                      className="form-label"
                      htmlFor="signinEmail1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-0 height-4 px-4"
                      name="email"
                      id="signinEmail1"
                      aria-describedby="signinEmailLabel1"
                      autoComplete="off"
                      onChange={(e) => setCredentials(prev => ({...prev, email: e.target.value}))}
                    />
                  </div>
                </div>

                <div className="form-group mb-4">
                  <div className="js-form-message js-focus-state">
                    <label
                      id="signinPasswordLabel1"
                      className="form-label"
                      htmlFor="signinPassword1"
                    >
                      Mật khẩu *
                    </label>
                    <input
                      type="password"
                      className="form-control rounded-0 height-4 px-4"
                      name="password"
                      id="signinPassword1"
                      onChange={(e) => setCredentials(prev => ({...prev, password: e.target.value}))}
                      aria-describedby="signinPasswordLabel1"
                      required
                    />
                  </div>
                </div>

                <div className="form-group mb-4">
                  <div className="js-form-message js-focus-state">
                    <label
                      id="signupConfirmPasswordLabel"
                      className="form-label"
                      htmlFor="signupConfirmPassword"
                    >
                      Nhập lại mật khẩu *
                    </label>
                    <input
                      type="password"
                      className="form-control rounded-0 height-4 px-4"
                      name="confirmPassword"
                      id="signupConfirmPassword"
                      onChange={(e) => setCredentials(prev => ({...prev, confirm_password: e.target.value}))}
                      aria-describedby="signupConfirmPasswordLabel"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div onClick={handleClick}
                    className="btn btn-block py-3 rounded-0 btn-dark"
                  >
                    Tạo tài khoản
                  </div>
                </div>
                <div className="text-center mb-4">
                  <span className="small text-muted">Đã có tài khoản?</span>
                  <Link
                    className="js-animation-link small"
                    to={"/login"}
                    data-target="#login"
                    data-link-group="idForm"
                    data-animation-in="fadeIn"
                  >
                    {" "}Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
