import { Suspense, useContext } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import {AuthContext} from './../AuthContext'
export default function UserList() {
  const { users } = useLoaderData();
    const {user} = useContext(AuthContext);
  return (
    <Suspense>
      <Await
        resolve={users}
        children={users => (
          <div
            className="tab-pane fade show active"
            id="pills-one-example1"
            role="tabpanel"
            aria-labelledby="pills-one-example1-tab"
          >
            <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
              <div className="d-flex justify-content-between mb-lg-8">
                <h6 className="font-weight-medium font-size-7 ml-lg-1  pb-xl-1">
                  Danh sách Người dùng
                </h6>
                <Link to={'add'} className="btn font-size-2 border font-weight-bold">Thêm mới</Link>
              </div>
              {users.map(item => (
                item.email != user.email && 
                <div className="row">
                  <div className="col">
                    <Link to={`/admin/user/${item.id}`} className="d-block border p-3">{item.email}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      />
    </Suspense>
  );
}
