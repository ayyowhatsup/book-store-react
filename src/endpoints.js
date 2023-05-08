export const HOST = "https://web-production-004d.up.railway.app";
export const CLOUDINARY_HOST = "https://res.cloudinary.com/ddpym9h5e/"
const getHomePage = () =>
  fetch(`${HOST}/api/v1/home/`)
    .then((res) => res.json())
    .then((data) => data);

const getAuthorBySlug = (slug) =>
  fetch(`${HOST}/api/v1/author/${slug}/`)
    .then((res) => res.json())
    .then((data) => data);

const getProductBySlug = (slug) =>
  fetch(`${HOST}/api/v1/book/${slug}/`)
    .then((res) => res.json())
    .then((data) => data);

const getCategories = () =>
  fetch(`${HOST}/api/v1/category/`)
    .then((res) => res.json())
    .then((data) => data);

const getCategoryBySlug = (slug) => (
  fetch(`${HOST}/api/v1/category/${slug}/`)
    .then((res) => res.json())
    .then((data) => data)
)
const getAuthors = () =>
  fetch(`${HOST}/api/v1/author/`)
    .then((res) => res.json())
    .then((data) => data);

const getProducts = () =>
  fetch(`${HOST}/api/v1/book/`, { credentials: "include" })
    .then((res) => res.json())
    .then((data) => data);

const getCategoryProducts = (slug) =>
  fetch(`${HOST}/api/v1/category/${slug}/books/`)
    .then((res) => res.json())
    .then((data) => data);

const logInWithEmailAndPassword = (email, password) =>
  fetch(`${HOST}/api/v1/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

const signUpWithCredentials = (credentials) =>
  fetch(`${HOST}/api/v1/auth/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...credentials }),
  });
const getUserInfo = (token) =>
  fetch(`${HOST}/api/v1/auth/userinfo/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);

const getCart = () =>
  fetch(`${HOST}/api/v1/cart/`, { credentials: "include" })
    .then((res) => res.json())
    .then((data) => data);

const addToCart = (product_slug, quantity) =>
  fetch(`${HOST}/api/v1/cart/`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product_slug, quantity }),
  })

const removeFromCart = (product_slug) => 
  fetch(`${HOST}/api/v1/cart/`, {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({product_slug}),
  })

const updateCart = (body) => 
  fetch(`${HOST}/api/v1/cart/`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
const getFavorite = (token) => 
  fetch(`${HOST}/api/v1/favorite/`, {
    headers: { "Content-Type": "application/json", Authorization: `Token ${token}` },
  })
  .then(res => res.json())
  .then(data => data)

const addToFavorite = (token, product_slug) => (
  fetch(`${HOST}/api/v1/favorite/`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Token ${token}` },
    body: JSON.stringify({product_slug})
  })
)
const removeFromFavorite = (token, product_slug) => (
  fetch(`${HOST}/api/v1/favorite/`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: `Token ${token}` },
    body: JSON.stringify({product_slug})
  })
)

const getGHNShippingAddressProvince = () => 
  fetch(`${HOST}/api/v1/ghn/address/province`, {method: "POST"}).then(res => res.json()).then(data => data)

const getGHNShippingAddressDistrict = (province_id) => 
  fetch(`${HOST}/api/v1/ghn/address/district`, {method: "POST", body: JSON.stringify({province_id})}).then(res => res.json()).then(data => data)

const getGHNShippingAddressWard = (district_id) => 
  fetch(`${HOST}/api/v1/ghn/address/ward`, {method: "POST", body: JSON.stringify({district_id})}).then(res => res.json()).then(data => data)
const getGHNShippingFee = (to_district_id, to_ward_code, weight, insurance_value) => (
  fetch(`${HOST}/api/v1/ghn/fee/`, {method: "POST", headers: {'Content-Type': 'application/json'},  body: JSON.stringify({to_district_id, to_ward_code, weight, insurance_value})}).then(res => res.json()).then(data => data)
)
const generateVNPAYUrl = (orderInfo) => {
  let options = {method: "POST", credentials: "include", headers: {'Content-Type': 'application/json'},  body: JSON.stringify(orderInfo)}
  if(localStorage.getItem('token')){
    options = {...options, headers: {...options.headers, Authorization: `Token ${localStorage.getItem('token')}`}}
  }
  return fetch(`${HOST}/api/v1/vnpay/generate_payment_url/`, options).then(res => res.json()).then(data => data)
}

const getPaymentReturn = (searchParams) => (
  fetch(`${HOST}/api/v1/vnpay/payment_return/?${searchParams.toString()}`).then(res => res.json()).then(data => data)
)
const createNewProduct = (body) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/book/`, {method: "POST", headers: {Authorization: `Token ${token}`}, body: body})
}
const deleteProduct = (slug) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/book/${slug}/`, {method: "DELETE", headers: {Authorization: `Token ${token}`}})
}

const patchProduct = (slug, body) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/book/${slug}/`, {method: "PATCH", headers: {Authorization: `Token ${token}`}, body: body})
}
const createNewAuthor = (body) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/author/`, {method: "POST", headers: {Authorization: `Token ${token}`}, body: body})
}
const patchAuthor = (slug, body) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/author/${slug}/`, {method: "PATCH", headers: {Authorization: `Token ${token}`}, body: body})
}

const deleteAuthor = (slug) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/author/${slug}/`, {method: "DELETE", headers: {Authorization: `Token ${token}`}})
}

const createNewCategory = (body) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/category/`, {method: "POST", headers: {Authorization: `Token ${token}`}, body: body})
}

const deleteCategory = (slug) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/category/${slug}/`, {method: "DELETE", headers: {Authorization: `Token ${token}`}})
}

const patchCategory = (slug, body) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/category/${slug}/`, {method: "PATCH", headers: {Authorization: `Token ${token}`}, body: body})
}

const getUsers = () => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/user/`, {headers: {Authorization: `Token ${token}`}}).then(res => res.json()).then(data => data)
}

const getUserById = (id) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/user/${id}/`, {headers: {Authorization: `Token ${token}`}}).then(res => res.json()).then(data => data)
}

const deleteUserById = (id) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/user/${id}/`, {method: "DELETE", headers: {Authorization: `Token ${token}`}})
}

const createNewUser = (body) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/user/`, {method: "POST",headers: {Authorization: `Token ${token}`}, body: body})
}

const patchUser = (id, body) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/user/${id}/`, {method: "PATCH",headers: {Authorization: `Token ${token}`}, body: body})
}

const getOrders = () => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/order/admin/`, {headers: {Authorization: `Token ${token}`}}).then(res => res.json()).then(data => data)
}

const getOrdersUser = () => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/order/`, {headers: {Authorization: `Token ${token}`}}).then(res => res.json()).then(data => data)
}
const getGHNOrderInfo = (order_id, email) => (
  fetch(`${HOST}/api/v1/ghn/order_detail/`, {method: "POST",headers: {'Content-Type': 'application/json'},body: JSON.stringify({order_id, email})}).then(res => res.json()).then(data => data)
)

const getOrderById = (id) => {
  const token = localStorage.getItem('token')
  return fetch(`${HOST}/api/v1/order/${id}/`, {headers: {Authorization: `Token ${token}`}}).then(res => res.json()).then(data => data)
}

const validateToken = (token) => {
  return fetch(`${HOST}/api/v1/auth/oauth/`, {method: 'POST',headers: {Authorization: `${token}`}})
}

const search = (s) => {
  return fetch(`${HOST}/api/v1/search${s}`).then(res => res.json()).then(data => data)
}
export {
  getHomePage,
  logInWithEmailAndPassword,
  getUserInfo,
  signUpWithCredentials,
  validateToken,

  getAuthors,
  getAuthorBySlug,
  createNewAuthor,
  patchAuthor,
  deleteAuthor,

  getProducts,
  getProductBySlug,
  createNewProduct,
  deleteProduct,
  patchProduct,
  
  getCategories,
  getCategoryBySlug,
  getCategoryProducts,
  createNewCategory,
  deleteCategory,
  patchCategory,
  
  getCart,
  addToCart,
  removeFromCart,
  updateCart,

  getUsers,
  getUserById,
  deleteUserById,
  createNewUser,
  patchUser,

  getOrders,
  getOrderById,
  getOrdersUser,
  
  getFavorite,
  addToFavorite,
  removeFromFavorite,

  getGHNShippingAddressProvince,
  getGHNShippingAddressDistrict,
  getGHNShippingAddressWard,
  getGHNShippingFee,
  getGHNOrderInfo,

  generateVNPAYUrl,
  getPaymentReturn,
  search,
};
