import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { toast } from "react-toastify";

export default function AccountDetail() {
  const { user, setUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    phone_number: "",
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const handleSubmit = async () => {
    const body = {};
    for (let key in userInfo) {
      if (userInfo[key]) {
        body[key] = userInfo[key];
      }
    }
    if(!Object.keys(body).length){
      toast.info("Bạn chưa nhập thông tin!")
      return
    }
    const res = await fetch("https://web-production-004d.up.railway.app/api/v1/auth/userinfo/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${user.token}`,
      },
      body: JSON.stringify(body),
    });

    if (res.ok){
      toast.success("Thay đổi thông tin thành công!")
      const data = await res.json()
      setUser(prev => ({...prev, ...data}))
    }else{
      const data = await res.json()
      toast.error(data[Object.keys(data)[0]][0])
    }
  };
  return (
    <div
      className="tab-pane fade show active"
      id="pills-five-example1"
      role="tabpanel"
      aria-labelledby="pills-five-example1-tab"
    >
      <div className="border-bottom mb-6 pb-6 mb-lg-8 pb-lg-9">
        <div className="pt-5 pl-md-5 pt-lg-8 pl-lg-9">
          <h6 className="font-weight-medium font-size-7 ml-lg-1 mb-lg-4 pb-xl-1">
            Thông tin cá nhân
          </h6>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="js-form-message">
                <label for="exampleFormControlInput3">Họ và tên</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="name"
                  placeholder={user.name}
                  aria-label="Họ và tên"
                  id="exampleFormControlInput3"
                  autoComplete="off"
                  onChange={(e) =>
                    setUserInfo((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="js-form-message">
                <label for="exampleFormControlInput3">Số điện thoại</label>
                <input
                  type="number"
                  className="form-control rounded-0"
                  name="phone-number"
                  placeholder={user.phone_number}
                  aria-label="Jack Wayley"
                  id="exampleFormControlInput3"
                  autoComplete="off"
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      phone_number: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="col-md-12 mb-4 mb-md-0">
              <div className="js-form-message">
                <label for="exampleFormControlInput4">Địa chỉ email</label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  name="email"
                  placeholder={user.email}
                  id="exampleFormControlInput4"
                  autoComplete="off"
                  aria-label="Địa chỉ email"
                  onChange={(e) =>
                    setUserInfo((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-md-5 pl-lg-9 space-bottom-2 space-bottom-lg-3">
        <div className="font-weight-medium font-size-22 mb-4 pb-xl-1">
          Thay đổi mật khẩu
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="js-form-message">
              <label for="exampleFormControlInput5">Mật khẩu hiện tại</label>
              <input
                type="password"
                className="form-control rounded-0"
                name="name"
                id="exampleFormControlInput5"
                aria-label="Jack Wayley"
                onChange={(e) =>
                  setUserInfo((prev) => ({
                    ...prev,
                    current_password: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="js-form-message">
              <label for="exampleFormControlInput6">Mật khẩu mới</label>
              <input
                type="password"
                className="form-control rounded-0"
                name="name"
                id="exampleFormControlInput6"
                aria-label="Jack Wayley"
                onChange={(e) =>
                  setUserInfo((prev) => ({
                    ...prev,
                    new_password: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="col-md-12 mb-5">
            <div className="js-form-message">
              <label for="exampleFormControlInput7">
                Nhập lại mật khẩu mới
              </label>
              <input
                type="password"
                className="form-control rounded-0"
                name="name"
                id="exampleFormControlInput7"
                aria-label="Jack Wayley"
                onChange={(e) =>
                  setUserInfo((prev) => ({
                    ...prev,
                    confirm_new_password: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="ml-3">
            <div
              onClick={handleSubmit}
              type="submit"
              className="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390"
            >
              Lưu thay đổi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
