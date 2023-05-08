import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import FavoriteItem from "./FavoriteItem";

export default function AccountWishlist() {
  const { wishlist } = useLoaderData();

  return (
    <Suspense>
      <Await
        resolve={wishlist}
        children={(wishlist) => (
          <div
            className="tab-pane fade show active"
            id="pills-six-example1"
            role="tabpanel"
            aria-labelledby="pills-six-example1-tab"
          >
            {wishlist.length != 0 ? <div className="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-3">
              <h6 className="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
                Danh sách yêu thích
              </h6>
              <table className="table mb-0">
                <thead>
                  <tr className="border">
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium pl-3 pl-md-5"
                    >
                      Sản phẩm
                    </th>
                    <th
                      scope="col"
                      className="py-3 border-bottom-0 font-weight-medium"
                    >
                      Đơn giá
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map(item => (
                    <FavoriteItem product={item.product}/>
                  ))}
                </tbody>
              </table>
            </div> :  <div className="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-3"><h6 className="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">Danh sách yêu thích trống</h6></div>}
          </div> 
        )}
      />
    </Suspense>
  );
}
