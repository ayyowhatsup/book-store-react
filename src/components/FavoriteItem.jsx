import { Link, useSubmit } from "react-router-dom";
import { CLOUDINARY_HOST } from "../endpoints";

export default function FavoriteItem({product}) {
    const submit = useSubmit()
    const handleClick = () => {
        let formData = new FormData()
        formData.append('product_slug', product.slug)
        formData.append('quantity', 1)
        submit(formData, {action: '/cart', method: "POST"})
    }
  return (
    <tr className="border">
      <th className="pl-3 pl-md-5 font-weight-normal align-middle py-6">
        <div className="d-flex align-items-center">
          <Link className="d-block" to={`/product/${product.slug}`}>
            <img style={{height: "270px"}}
              className="img-fluid"
              src={`${CLOUDINARY_HOST}${product.image}`}
              alt="Image-Description"
            />
          </Link>
          <div className="ml-xl-4">
            <div className="font-weight-normal">
              <Link to={`/product/${product.slug}`}>{product.name}</Link>
            </div>
            <div className="font-size-2">
            {product.authors.map((author, index) => (
                index != product.authors.length - 1 ? <><Link to={`/author/${author.slug}`} children={author.name}/>, </>  : <Link to={`/author/${author.slug}`} children={author.name}/> 
              ))}
            </div>
          </div>
        </div>
      </th>
      <td className="align-middle py-5">{new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}</td>
      <td className="align-middle py-5">
        <span onClick={handleClick} className="product__add-to-cart">Thêm vào giỏ</span>
      </td>
      <td className="align-middle py-5">
      <span onClick={() => {
        let formData = new FormData()
        formData.append('product_slug', product.slug)

        submit(formData, {action: "/account/wishlist", method: "DELETE"})
      }}
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
        </span>
      </td>
    </tr>
  );
}
