import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import { validateToken } from "../endpoints";
import { toast } from "react-toastify";

export default function Login() {
  const { user, signIn, setUser } = useContext(AuthContext);
  const previousLocation = location.state?.from?.pathname || "/";
  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = () => {
    signIn(credential.email, credential.password, () => {
      navigate(previousLocation, { replace: true });
    });
  };

  return user ? (
    <Navigate to={"/"} />
  ) : (
    <>
      <div className="page-header border-bottom">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center py-4">
            <h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">
              Đăng nhập
            </h1>
            <nav className="woocommerce-breadcrumb font-size-2">
              <Link to={"/"} className="h-primary">
                Trang chủ
              </Link>
              <span className="breadcrumb-separator mx-1">
                <i className="fas fa-angle-right"></i>
              </span>
              Đăng nhập
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <div>
            <div id="login" data-target-group="idForm">
              <div className="p-4 p-md-6">
                <div className="form-group mb-4">
                  <div className="js-form-message js-focus-state">
                    <label
                      id="signinEmailLabel"
                      className="form-label"
                      htmlFor="signinEmail"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-0 height-4 px-4"
                      name="email"
                      id="signinEmail"
                      aria-describedby="signinEmailLabel"
                      required
                      autoComplete="off"
                      onChange={(e) =>
                        setCredential((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="form-group mb-4">
                  <div className="js-form-message js-focus-state">
                    <label
                      id="signinPasswordLabel"
                      className="form-label"
                      htmlFor="signinPassword"
                    >
                      Mật khẩu *
                    </label>
                    <input
                      type="password"
                      className="form-control rounded-0 height-4 px-4"
                      name="password"
                      id="signinPassword"
                      aria-label
                      aria-describedby="signinPasswordLabel"
                      required
                      onChange={(e) =>
                        setCredential((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between mb-5 align-items-center">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      validateToken(credentialResponse.credential).then(res => res.json()).then(data => {
                        if(data.error){
                          toast.error(data.error)
                        }else{
                          setUser(data)
                        }
                      })
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  
                </div>

                <div className="mb-4d75">
                  <div
                    onClick={handleSubmit}
                    className="btn btn-block py-3 rounded-0 btn-dark"
                  >
                    Đăng nhập
                  </div>
                </div>
                <div className="mb-2">
                  <Link
                    to={"/register"}
                    className="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
                    data-target="#signup"
                    data-link-group="idForm"
                    data-animation-in="fadeIn"
                  >
                    Tạo tài khoản
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
