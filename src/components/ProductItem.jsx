import classNames from "classnames";
import { Form, Link, useSubmit } from "react-router-dom";
import { CLOUDINARY_HOST } from "../endpoints";
export default function ProductItem({ product, border = true}) {
  const submit = useSubmit()
  const handleClick = () => {
    let formData = new FormData()
    formData.append('product_slug', product.slug)
    formData.append('quantity', 1)

    submit(formData, {action: "/cart", method: "POST"})
  }
  return (
    <li className={classNames("product mb-lg-0", {"col product__no-border border-0 mb-2": border == false, "border product__space bg-white mb-5": border})}>
      <div className={classNames("product__inner overflow-hidden p-3 p-md-4d875", {"mx-1 bg-white":border == false})}>
        <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
          <div className="woocommerce-loop-product__thumbnail">
            <Link to={`/product/${product.slug}`} className="d-block" style={{height: '270px'}}>
              <img
                src={`${CLOUDINARY_HOST}${product.image}`}
                className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image"
                alt="image-description" style={{objectFit: 'cover'}}
              />
            </Link>
          </div>
          <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
            <div className="text-uppercase font-size-1 mb-1 text-truncate">
              <Link to={`/product/${product.slug}`}>SÁCH</Link>
            </div>
            <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
              <Link to={`/product/${product.slug}`}>{product.name}</Link>
            </h2>
            <div className="font-size-2  mb-1 text-truncate">
              {product.authors.map((author, index) => (
                index != product.authors.length - 1 ? <><Link to={`/author/${author.slug}`} children={author.name}/>, </>  : <Link to={`/author/${author.slug}`} children={author.name}/> 
              ))}
            </div>
            <div className="price d-flex align-items-center font-weight-medium font-size-3">
              <span className="woocommerce-Price-amount amount">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </span>
            </div>
          </div>
          <div className="product__hover d-flex align-items-center">
            <div onClick={handleClick}
              className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
              tabIndex="0"
              style={{cursor: 'pointer'}}
            >
              <span className="product__add-to-cart">Thêm vào giỏ</span>
              <span className="product__add-to-cart-icon font-size-4">
                <i className="flaticon-icon-126515"></i>
              </span>
            </div>
            <Link
              to={`/product/${product.slug}`}
              className="mr-1 h-p-bg border-0 btn-outline-primary"
              tabIndex="0"
            >
              <i className="flaticon-switch"></i>
            </Link>
            <Link
              to={`/product/${product.slug}`}
              className="h-p-bg border-0 btn-outline-primary"
              tabIndex="0"
            >
              <i className="flaticon-heart"></i>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
