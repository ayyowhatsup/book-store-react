import { Link } from "react-router-dom";
import { CLOUDINARY_HOST, HOST } from "../endpoints";
import ProductItem from "./ProductItem";

export function AuthorCard({ author }) {
  return (
    <section className="space-bottom-2 space-bottom-lg-3">
      <div className="bg-gray-200 space-bottom-2 space-bottom-md-0">
        <div className="container space-top-2 space-top-xl-3 px-3">
          <div className="row">
            <div className="col-lg-4 col-wd-3 d-flex">
              <img
                className="img-fluid mb-5 m-auto"
                src={`${CLOUDINARY_HOST}${author.image}`}
                alt="Image-Description"
              />
            </div>
            <div className="col-lg-8 col-wd-9">
              <div className="mb-8">
                <span className="text-gray-400 font-size-2">
                  Tác giả nổi bật
                </span>
                <h6 className="font-size-7 ont-weight-medium mt-2 mb-3 pb-1">
                  <Link to={`/author/${author.slug}`} className="link-black-100" href="#">
                    {author.name}
                  </Link>
                </h6>
                <p className="mb-0">{author.description} </p>
              </div>
              <ul className="products list-unstyled row no-gutters row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-wd-4 my-0 mb-md-8 mb-wd-12">
                {author.books.slice(0, 4).map((book) => (
                  <ProductItem product={book} border={false} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
