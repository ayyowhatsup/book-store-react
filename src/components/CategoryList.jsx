import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export default function CategoryList() {
  const { categories } = useLoaderData();
  return (
    <Suspense>
      <Await
        resolve={categories}
        children={(categories) => (
          <div
            className="tab-pane fade show active"
            id="pills-one-example1"
            role="tabpanel"
            aria-labelledby="pills-one-example1-tab"
          >
            <div className="pt-5 pt-lg-8 pl-md-5 pl-lg-9 mb-xl-1">
              <div className="d-flex justify-content-between mb-lg-8">
                <h6 className="font-weight-medium font-size-7 ml-lg-1  pb-xl-1">
                  Danh sách thể loại
                </h6>
                <Link to={'add'} className="btn font-size-2 border font-weight-bold">Thêm mới</Link>
              </div>

              {categories.map((category) => (
                <div className="row">
                  <div className="col">
                    <Link to={category.slug} className="d-block border p-3">{category.name}</Link>
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
