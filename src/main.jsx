import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  createSearchParams,
  defer,
} from "react-router-dom";
import App from "./pages/App";
import {
  addToCart,
  addToFavorite,
  createNewAuthor,
  createNewCategory,
  createNewProduct,
  createNewUser,
  deleteAuthor,
  deleteCategory,
  deleteProduct,
  deleteUserById,
  generateVNPAYUrl,
  getAuthorBySlug,
  getAuthors,
  getCart,
  getCategories,
  getCategoryBySlug,
  getCategoryProducts,
  getFavorite,
  getGHNOrderInfo,
  getGHNShippingAddressProvince,
  getHomePage,
  getOrderById,
  getOrders,
  getOrdersUser,
  getPaymentReturn,
  getProductBySlug,
  getProducts,
  getUserById,
  getUsers,
  patchAuthor,
  patchProduct,
  patchUser,
  removeFromCart,
  removeFromFavorite,
  search,
  updateCart,
} from "./endpoints";
import Author from "./pages/Author";
import Home from "./pages/Home";
import Product from "./pages/Product";
import CategoryLayout from "./components/CategoryLayout";
import CategoryProduct from "./components/CategoryProduct";
import ComingSoon from "./pages/ComingSoon";
import Cart from "./pages/Cart";
import AccountLayout from "./components/AccountLayout";
import AccountDashboard from "./components/AccountDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import AccountDetail from "./components/AccountDetail";
import AccountOrder from "./components/AccountOrder";
import { toast } from "react-toastify";
import AccountWishlist from "./components/AccountWishlist";
import Checkout from "./pages/Checkout";
import { redirect } from "react-router-dom";
import PaymentResult from "./pages/PaymentResult";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./components/AdminLayout";
import CategoryList from "./components/CategoryList";
import CategoryEdit from "./components/CategoryEdit";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";
import AddProduct from "./components/AddProduct";
import AddCategory from "./components/AddCategory";
import ListAuthor from "./components/ListAuthor";
import AddAuthor from "./components/AddAuthor";
import EditAuthor from "./components/EditAuthor";
import OrderTracking from "./pages/OrderTracking";
import { patchCategory } from "./endpoints";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import OrderList from "./components/OrderList";
import OrderDetail from "./components/OrderDetail";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={<Home />}
        loader={() => {
          const home = getHomePage();
          return defer({ home });
        }}
      />
      <Route path="/404" element={<ComingSoon />} />
      <Route
        path="category/"
        element={<CategoryLayout />}
        loader={() => {
          return defer({ categories: getCategories(), authors: getAuthors() });
        }}
      >
        <Route
          index
          element={<CategoryProduct />}
          loader={({request}) => {
            const url = new URL(request.url);
            const searchTerm = url.searchParams.get("q");
            if(searchTerm){
              let s = `?q=${searchTerm}`
              return defer({ products: search(s) })
            }
            const order = url.searchParams.get("orderby");
            if(order){
              let s = '?orderby=' + order
              return defer({ products: search(s) })
            }
            return defer({ products: getProducts() });
          }}
        />

        <Route
          path=":slug"
          element={<CategoryProduct />}
          loader={({ params }) => {
            const slug = params.slug;
            const products = getCategoryProducts(slug);
            return defer({ products });
          }}
        />
      </Route>
      <Route
        path="author/:slug"
        element={<Author />}
        loader={({ params }) => {
          const slug = params.slug;
          const author = getAuthorBySlug(slug);
          return defer({ author });
        }}
      />
      <Route
        path="product/:slug"
        element={<Product />}
        loader={({ params }) => {
          const slug = params.slug;
          const product = getProductBySlug(slug);
          return defer({ product });
        }}
      />
      <Route
        path="cart"
        element={<Cart />}
        action={async ({ request }) => {
          switch (request.method) {
            case "POST": {
              const form = await request.formData();
              let product_slug = form.get("product_slug");
              let quantity = form.get("quantity");
              const res = await addToCart(product_slug, quantity);
              if (res.ok) {
                toast.success("Thêm vào giỏ hàng thành công!");
              } else {
                const data = await res.json();
                toast.error(data[Object.keys(data)[0]][0]);
              }
              return 1;
            }
            case "DELETE": {
              const form = await request.formData();
              let product_slug = form.get("product_slug");
              const res = await removeFromCart(product_slug);
              if (res.ok) {
                toast.success("Xóa khỏi giỏ hàng thành công!");
              }
              return 1;
            }
            case "PUT": {
              const form = await request.formData();
              let loop = 0;
              let index = 0;
              let body = [];
              for (let [key, value] of form.entries()) {
                if (loop % 2 === 0) {
                  let a = {};
                  a[key] = value;
                  body.push(a);
                } else {
                  body[index][key] = value;
                  index++;
                }
                loop++;
              }
              const res = await updateCart(body);
              if (res.ok) {
                toast.success("Cập nhật giỏ hàng thành công!");
              }
              return 1;
            }
          }
        }}
        loader={() => defer({ cart: getCart() })}
      />
      <Route
        path="checkout"
        element={<Checkout />}
        loader={() => defer({ cart: getCart() })}
        action={async ({ request }) => {
          const formData = await request.formData();
          let body = {};
          for (let [key, value] of formData.entries()) {
            body[key] = value;
          }
        generateVNPAYUrl(body).then(data => {
          if(data.error){
            toast.error(data.error)
          }else{
            window.location.href = data.url;
          }
        });
          
          return 1;
        }}
      />
      <Route path="order-tracking" element={<OrderTracking/>} action={async({request})=> {
        const formData = await request.formData()
        const res = await getGHNOrderInfo(formData.get('order_id'), formData.get('email'))
        return res
      }}/>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="payment_return"
        element={<PaymentResult />}
        loader={({ request }) => {
          return defer({
            result: getPaymentReturn(new URL(request.url).searchParams),
          });
        }}
      />
      <Route element={<ProtectedRoute />}>
        <Route path="account" element={<AccountLayout />}>
          <Route index element={<AccountDashboard />} />
          <Route path="info" element={<AccountDetail />} />
          <Route path="order" element={<AccountOrder/>} loader={() => defer({orders: getOrdersUser()})}></Route>
          <Route path="order/:id" element={<OrderDetail/>} loader={({params}) => {
            const id = params.id
            const order = getOrderById(id)
            return defer({order})
          }}/>
          <Route
            path="wishlist"
            element={<AccountWishlist />}
            loader={() => {
              const token = localStorage.getItem("token");
              const data = getFavorite(token);
              return defer({ wishlist: data });
            }}
            action={async ({ request }) => {
              switch (request.method) {
                case "POST": {
                  let formData = await request.formData();
                  let product_slug = formData.get("product_slug");
                  const res = await addToFavorite(
                    localStorage.getItem("token"),
                    product_slug
                  );
                  if (res.ok) {
                    toast.success("Thêm vào danh sách yêu thích thành công!");
                  } else if (res.status == 401) {
                    toast.error("Vui lòng đăng nhập để tiếp tục!");
                  } else {
                    const data = await res.json();
                    toast.error(data[Object.keys(data)[0]][0]);
                  }
                  return 1;
                }
                case "DELETE": {
                  let formData = await request.formData();
                  let product_slug = formData.get("product_slug");
                  const res = await removeFromFavorite(
                    localStorage.getItem("token"),
                    product_slug
                  );
                  if (res.ok) {
                    toast.success("Xóa khỏi danh sách yêu thích thành công!");
                  } else {
                    const data = await res.json();
                    toast.error(data[Object.keys(data)[0]][0]);
                  }
                  return 1;
                }
              }
            }}
          />
        </Route>
      </Route>
      <Route element={<AdminRoute />}>
        <Route path="admin" element={<AdminLayout />}>
          <Route
            path="author"
            element={<ListAuthor />}
            loader={() => defer({ authors: getAuthors() })}
          />
          <Route
            path="author/add"
            element={<AddAuthor />}
            action={async ({ request }) => {
              const formData = await request.formData();
              const res = await createNewAuthor(formData);
              if (res.ok) {
                toast.success("Thêm mới tác giả thành công!");
              }
              return redirect("/admin/author");
            }}
          />
          <Route path="author/:slug" element={<EditAuthor/>} loader={({ params }) => {
              const slug = params.slug;
              const author = getAuthorBySlug(slug);
              return defer({ author });
            }} action={async ({ request, params }) => {
              switch (request.method) {
                case "DELETE": {
                  const slug = params.slug;
                  const res = await deleteAuthor(slug);
                  toast.success("Xóa tác giả thành công!");
                  return redirect("/admin/author");
                }
                case "PATCH": {
                  const body = await request.formData()
                  for(let [key, value] of body.entries()){
                    if(!value){
                      body.delete(key)
                    }
                  }
                  const res = await patchAuthor(params.slug, body)
                  toast.success("Cập nhật tác giả thành công!");
                  return redirect("/admin/author")
                }
              }
            }}/>
          <Route
            path="category"
            element={<CategoryList />}
            loader={({params}) => defer({ categories: getCategories() })}
          />
          <Route path="category/add" element={<AddCategory />} action={async({request}) => {
            const formData = await request.formData()
            const res = await createNewCategory(formData)
            toast.success("Thêm mới sản phẩm thành công!")
            return redirect("/admin/category")
          }} />
          <Route
            path="category/:slug"
            element={<CategoryEdit />}
            loader={({ params }) => {
              const slug = params.slug;
              const category = getCategoryBySlug(slug);
              return defer({ category });
            }}
            action={async({request, params})=>{
              switch(request.method){
                case "DELETE": {
                  const slug = params.slug;
                  const res = await deleteCategory(slug);
                  toast.success("Xóa thể loại thành công!");
                  return redirect("/admin/category");
                }
                case "PATCH": {
                  const body = await request.formData()
                  for(let [key, value] of body.entries()){
                    if(!value){
                      body.delete(key)
                    }
                  }
                  const res = await patchCategory(params.slug, body)
                  toast.success("Cập nhật thể loại thành công!");
                  return redirect("/admin/category")
                }
              }
            }}
          />
          <Route
            path="book"
            element={<ProductList />}
            loader={() => defer({ products: getProducts() })}
          />
          <Route
            path="book/add"
            element={<AddProduct />}
            loader={() =>
              defer({ authors: getAuthors(), categories: getCategories() })
            }
            action={async ({ request }) => {
              switch (request.method) {
                case "POST": {
                  const formData = await request.formData();
                  const res = await createNewProduct(formData);
                  if (res.ok) {
                    toast.success("Thêm mới sản phẩm thành công!");
                  }
                  return redirect("/admin/book");
                }
              }
            }}
          />
          <Route
            path="book/:slug"
            element={<EditProduct />}
            action={async ({ request, params }) => {
              switch (request.method) {
                case "DELETE": {
                  const slug = params.slug;
                  const res = await deleteProduct(slug);
                  toast.success("Xóa sản phẩm thành công!");
                  return redirect("/admin/book");
                }
                case "PATCH":{
                  const slug = params.slug;
                  const body = await request.formData()
                  for(let [key, value] of body.entries()){
                    if(!value){
                      body.delete(key)
                    }
                  }
                  const res = await patchProduct(slug, body)
                  toast.success("Cập nhật sản phẩm thành công!")
                  return redirect("/admin/book");
                }
              }
            }}
            loader={async ({ params }) =>
              defer({
                product: getProductBySlug(params.slug),
                authors: await getAuthors(),
                categories: await getCategories(),
              })
            }
          />
          <Route path="user" element={<UserList/>} loader={() => defer({ users: getUsers()})}/>
          <Route path="user/add" element={<AddUser/>} loader={() => defer({ users: getUsers()})}
          action={async({request}) => {
            const formData = await request.formData()
            const res = createNewUser(formData)
            if((await res).status == 201){
              toast.success("Tạo mới người dùng thành công!")
            }else{
              toast.error("Thất bại!")
            }
            return redirect("/admin/user")
          }}/>
          <Route path="user/:id" element={<EditUser/>} loader={({params}) => {
            const id = params.id
            const user = getUserById(id)
            return defer({user})
          }} action={async({request, params})=> {
            switch(request.method){
              case "PATCH":{
                const formData = await request.formData()
                for(let [key, value] of formData.entries()){
                  if(!value){
                    formData.delete(key)
                  }
                }
                const id = params.id
                const res = await patchUser(id, formData)
                toast.success("Thay đổi thông tin thành công!")
                return redirect('/admin/user')
              }
              case "DELETE": {
                const id = params.id
                const res = await deleteUserById(id)
                toast.success("Xóa người dùng thành công!")
                return redirect('/admin/user')
              }
            }
          }}/>
          <Route path="order" element={<OrderList/>} loader={() => defer({orders: getOrders()})}/>
          <Route path="order/:id" element={<OrderDetail/>} loader={({params}) => {
            const id = params.id
            const order = getOrderById(id)
            return defer({order})
          }}/>
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
