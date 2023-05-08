import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import "./../assets/css/theme.css";
import "./../assets/css/flaticon.css";
import "./../assets/css/fontawesome-all.min.css";
import "./../assets/css/custom.css";
import AuthProvider, { AuthContext } from "../AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import classNames from "classnames";
export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AuthContext.Consumer>
          {({isLoading}) => (<div className={classNames({"bg-loading": isLoading})}>{isLoading && <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>}</div>)}
        </AuthContext.Consumer>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      <GoogleOAuthProvider clientId="389152527052-uqcfa7p4igcl8tgc4tcf5ou5n98ibkqt.apps.googleusercontent.com">
        <Header />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </GoogleOAuthProvider>
      </AuthProvider>
    </div>
  );
}
