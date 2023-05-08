import { Link } from "react-router-dom";
import Minus from "./Minus";
import Plus from "./Plus";

export default function CartNoItem() {
  return (
    <div className="site-content bg-punch-light overflow-hidden" id="content">
      <div className="container">
        <div className="row pb-8">
          <div id="primary" className="content-area">
            <main id="main" className="site-main ">
              <div className="page type-page status-publish hentry">
                <div className="entry-content">
                  <div className="woocommerce">Bạn chưa có sản phẩm nào</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
