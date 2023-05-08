import { Fragment, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { HOST } from "../endpoints";
import ProductItem from "./../components/ProductItem";
import { AuthorCard } from "../components/AuthorCard";
export default function Home() {
  const { home } = useLoaderData();

  return (
    <Fragment>
      <div className="space-bottom-2 space-bottom-lg-3">
        <div className="site-features border-bottom space-1d625">
          <div className="container">
            <ul className="list-unstyled my-0 list-features d-flex align-items-center justify-content-between overflow-auto">
              <li className="list-feature flex-shrink-0 flex-shrink-xl-1">
                <div className="media d-block d-lg-flex text-center text-lg-left pr-5 pr-xl-0">
                  <div className="feature__icon font-size-14 text-primary text-lh-xs mb-md-3 mb-lg-0">
                    <i className="glyph-icon flaticon-delivery"></i>
                  </div>
                  <div className="media-body ml-4">
                    <h4 className="feature__title font-size-3 text-dark">
                      Miễn Phí Vận Chuyển
                    </h4>
                    <p className="feature__subtitle m-0 text-dark">
                      Toàn Bộ Đơn Hàng
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="separator border-xl-left h-fixed-80"
                aria-hidden="true"
                role="presentation"
              ></li>
              <li className="list-feature flex-shrink-0 flex-shrink-xl-1">
                <div className="media  d-block d-lg-flex text-center text-lg-left pr-5 pr-xl-0">
                  <div className="feature__icon font-size-14 text-primary text-lh-xs mb-md-3 mb-lg-0">
                    <i className="glyph-icon flaticon-credit"></i>
                  </div>
                  <div className="media-body ml-4">
                    <h4 className="feature__title font-size-3 text-dark">
                      Thanh Toán An Toàn
                    </h4>
                    <p className="feature__subtitle m-0 text-dark">
                      Với Ví VNPAY
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="separator border-xl-left h-fixed-80"
                aria-hidden="true"
                role="presentation"
              ></li>
              <li className="list-feature flex-shrink-0 flex-shrink-xl-1">
                <div className="media  d-block d-lg-flex text-center text-lg-left pr-5 pr-xl-0">
                  <div className="feature__icon font-size-14 text-primary text-lh-xs mb-md-3 mb-lg-0">
                    <i className="glyph-icon flaticon-warranty"></i>
                  </div>
                  <div className="media-body ml-4">
                    <h4 className="feature__title font-size-3 text-dark">
                      Hoàn Tiền Miễn Phí
                    </h4>
                    <p className="feature__subtitle m-0 text-dark">
                      Trong Vòng 30 Ngày
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="separator border-xl-left h-fixed-80"
                aria-hidden="true"
                role="presentation"
              ></li>
              <li className="list-feature flex-shrink-0 flex-shrink-xl-1">
                <div className="media d-block d-lg-flex text-center text-lg-left pr-5 pr-xl-0">
                  <div className="feature__icon font-size-14 text-primary text-lh-xs mb-md-3 mb-lg-0">
                    <i className="glyph-icon flaticon-help"></i>
                  </div>
                  <div className="media-body ml-4">
                    <h4 className="feature__title font-size-3 text-dark">
                      Hỗ Trợ 24/7
                    </h4>
                    <p className="feature__subtitle m-0 text-dark">
                      Trong 1 Ngày Làm Việc
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Suspense>
        <Await
          resolve={home}
          children={(home) => (
            <section className="space-bottom-2 space-bottom-lg-3">
              <div className="container">
                <header className="d-md-flex justify-content-between align-items-center mb-5">
                  <h2 className="font-size-7 mb-4 mb-md-0">Sách nổi bật</h2>
                </header>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="featured"
                    aria-labelledby="featured-tab"
                  >
                    <ul className="list-unstyled products row row-cols-2 row-cols-lg-4 row-cols-wd-5 mb-0">
                      {home.books.map(book => (
                          <ProductItem product={book}/>
                      ))} 
                      </ul>           
                </div>
              </div>
              </div>
            </section>
          )}
        />
      </Suspense>
      <Suspense>
        <Await
          resolve={home}
          children={(home) => (
            <AuthorCard author={home.author}/>
          )}
        ></Await>
      </Suspense>
    </Fragment>
  );
}
