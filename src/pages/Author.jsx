import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import { AuthorCard } from "../components/AuthorCard";
import ProductItem from "../components/ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Author() {
  const { author } = useLoaderData();

  return (
    <Suspense>
      <Await
        resolve={author}
        children={(author) => (
          <main id="content">
            <div className="space-bottom-2 space-bottom-lg-3">
              <div className="pb-lg-1">
                <div className="page-header border-bottom">
                  <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center py-4">
                      <h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg">
                        {author.name}
                      </h1>
                      <nav className="font-size-2">
                        <Link to={"/"} className="h-primary">
                          Trang chủ
                        </Link>
                        <span className="breadcrumb-separator mx-1">
                          <i className="fas fa-angle-right"></i>
                        </span>
                        <span>{author.name}</span>
                      </nav>
                    </div>
                  </div>
                </div>
                <AuthorCard author={author}/>
                <div className="container">
                  <header className="mb-5">
                    <h2 className="font-size-7 mb-0">Sách của tác giả</h2>
                  </header>
                  <ul
                    className="products list-unstyled my-0 border-right border-top border-left"
                  >
                    <Slider dots={true}  slidesToShow={author.books.length >= 5 ? 5 : author.books.length} slidesToScroll={1} arrows={true}>
                    {author.books.map(book => (
                      <ProductItem product={book} />
                    ))}
                    </Slider>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        )}
      />
    </Suspense>
  );
}
