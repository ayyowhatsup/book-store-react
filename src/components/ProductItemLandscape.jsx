import { Link } from "react-router-dom";
import { CLOUDINARY_HOST } from "../endpoints";

export default function ProductItemLandscape({product}) {
  return (
    <li className="product product__list" >
      <div className="product__inner overflow-hidden p-3 p-md-4d875">
        <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
          <div className="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
            <Link to={`/product/${product.slug}`} className="d-block">
              <img
                src={`${CLOUDINARY_HOST}${product.image}`}
                className="d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image"
                alt="image-description" style={{maxHeight: '200px'}}
              />
            </Link>
          </div>
          <div className="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
            <div className="text-uppercase font-size-1 mb-1 text-truncate">
              <Link to={`/product/${product.slug}`}>SÁCH</Link>
            </div>
            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
              <Link to={`/product/${product.slug}`} tabIndex="0">
                {product.name}
              </Link>
            </h2>
            <div className="font-size-2  mb-2 text-truncate">
                {product.authors.map((author, index) => (
                index != product.authors.length - 1 ? <><Link to={`/author/${author.slug}`} children={author.name}/>, </>  : <Link to={`/author/${author.slug}`} children={author.name}/> 
              ))}
            </div>
            <p className="font-size-2 mb-2 crop-text-2">
              {product.description}
            </p>
            <div className="price d-flex align-items-center font-weight-medium font-size-3">
                <span className="woocommerce-Price-amount amount">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </span>
            </div>
          </div>
          <div className="col-md-auto d-flex align-items-center">
            <Link
              to={`product/${product.slug}`}
              className="text-uppercase text-dark h-dark font-weight-medium mr-4"
            >
              <span className="product__add-to-cart">Thêm vào giỏ</span>
              <span className="product__add-to-cart-icon font-size-4">
                <i className="flaticon-icon-126515"></i>
              </span>
            </Link>
            <Link
              to={`product/${product.slug}`}
              className="mr-1 h-p-bg btn btn-outline-primary border-0"
            >
              <i className="flaticon-switch"></i>
            </Link>
            <Link
              to={`product/${product.slug}`}
              className="h-p-bg btn btn-outline-primary border-0"
            >
              <i className="flaticon-heart"></i>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
