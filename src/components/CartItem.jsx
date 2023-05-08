import { useState } from "react";
import { Link, useSubmit } from "react-router-dom";
import { CLOUDINARY_HOST } from "../endpoints";

export default function CartItem({ cartItem }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const submit = useSubmit();
  const handleRemove = () => {
    let formData = new FormData();
    formData.append("product_slug", cartItem.product.slug);
    submit(formData, { action: "/cart", method: "DELETE" });
  };
  return (
    <tr className="woocommerce-cart-form__cart-item cart_item">
      <td className="product-name" data-title="Product">
        <div className="d-flex align-items-center">
          <Link to={`/product/${cartItem.product.slug}`}>
            <img
              style={{ height: "200px" }}
              src={`${CLOUDINARY_HOST}${cartItem.product.image}`}
              className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
            />
          </Link>
          <div className="ml-3 m-w-200-lg-down">
            <Link to={`/product/${cartItem.product.slug}`}>
              {cartItem.product.name}
            </Link>
            <div className="text-gray-700 font-size-2 d-block">
              {cartItem.product.authors.map((author, index) =>
                index != cartItem.product.authors.length - 1 ? (
                  <>
                    <Link
                      to={`/author/${author.slug}`}
                      children={author.name}
                    />
                    ,{" "}
                  </>
                ) : (
                  <Link to={`/author/${author.slug}`} children={author.name} />
                )
              )}
            </div>
          </div>
        </div>
      </td>
      <td className="product-price" data-title="Price">
        <span className="woocommerce-Price-amount amount">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(cartItem.product.price)}
        </span>
      </td>
      <td className="product-quantity" data-title="Quantity">
        <div className="quantity d-flex align-items-center">
          <div className="border px-3 width-120">
            <div className="js-quantity">
              <div className="d-flex align-items-center">
                <div
                  className="js-minus text-dark"
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="10px"
                    height="1px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(22, 22, 25)"
                      d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  className="input-text qty text js-result form-control text-center border-0"
                  step="1"
                  min="1"
                  max="100"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => {
                    const a = parseInt(e.target.value);
                    if (a > 100) {
                      setQuantity(100);
                    } else if (a < 1) {
                      setQuantity(1);
                    } else {
                      setQuantity(a);
                    }
                  }}
                  title="Quantity"
                />
                <input type="hidden" name="product_slug" value={cartItem.product.slug}/>
                <div
                  className="js-plus text-dark"
                  onClick={() =>
                    setQuantity((prev) => (prev < 100 ? prev + 1 : 100))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="10px"
                    height="10px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(22, 22, 25)"
                      d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="product-subtotal" data-title="Total">
        <span className="woocommerce-Price-amount amount">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(cartItem.total)}
        </span>
      </td>
      <td className="product-remove">
        <div
          onClick={handleRemove}
          className="remove"
          aria-label="Remove this item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="15px"
            height="15px"
          >
            <path
              fillRule="evenodd"
              fill="rgb(22, 22, 25)"
              d="M15.011,13.899 L13.899,15.012 L7.500,8.613 L1.101,15.012 L-0.012,13.899 L6.387,7.500 L-0.012,1.101 L1.101,-0.012 L7.500,6.387 L13.899,-0.012 L15.011,1.101 L8.613,7.500 L15.011,13.899 Z"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
}
