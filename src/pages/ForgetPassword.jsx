export default function ForgetPassword(){
    return (
        <>
        <div class="page-header border-bottom">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center py-4">
            <h1 class="page-title font-size-3 font-weight-medium m-0 text-lh-lg">
              Quên mật khẩu
            </h1>
            <nav class="woocommerce-breadcrumb font-size-2">
              <Link to={"/"} class="h-primary">
                Trang chủ
              </Link>
              <span class="breadcrumb-separator mx-1">
                <i class="fas fa-angle-right"></i>
              </span>
              Quên mật khẩu
            </nav>
          </div>
        </div>
        </div>
        <div
            id="forgotPassword"
            style={{ display: "none", opacity: 0 }}
            data-target-group="idForm"
          >
            <header className="border-bottom px-4 px-md-6 py-4">
              <h2 className="font-size-3 mb-0 d-flex align-items-center">
                <i className="flaticon-question mr-3 font-size-5"></i>Forgot
                Password?
              </h2>
            </header>

            <div className="p-4 p-md-6">
              <div className="form-group mb-4">
                <div className="js-form-message js-focus-state">
                  <label
                    id="signinEmailLabel3"
                    className="form-label"
                    htmlFor="signinEmail3"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-0 height-4 px-4"
                    name="email"
                    id="signinEmail3"
                    placeholder="creativelayers088@gmail.com"
                    aria-label="creativelayers088@gmail.com"
                    aria-describedby="signinEmailLabel3"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-block py-3 rounded-0 btn-dark"
                >
                  Recover Password
                </button>
              </div>
              <div className="text-center mb-4">
                <span className="small text-muted">
                  Remember your password?
                </span>
                <a
                  className="js-animation-link small"
                  data-target="#login"
                  data-link-group="idForm"
                  data-animation-in="fadeIn"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </>
    )
}