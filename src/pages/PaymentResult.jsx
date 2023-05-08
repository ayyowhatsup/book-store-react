import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export default function PaymentResult() {
  const { result } = useLoaderData();
  return (
    <Suspense>
      <Await
        resolve={result}
        children={(result) => (
          <main id="content">
            <div class="bg-gray-200 space-bottom-3">
              <div class="container">
                <div class="py-5 py-lg-7"></div>
                <div class="max-width-890 mx-auto">
                  <div class="bg-white py-6 border">
                    <h6 class="font-size-4 font-weight-medium text-center mb-4 pb-xl-4 border-bottom">
                      Kết quả thanh toán - {result.result}
                    </h6>
                    <div>
                      <ul class="list-unstyled px-3 pl-md-5 pr-md-4 mb-0">
                        <li class="d-flex justify-content-between py-2">
                          <span class="font-weight-medium font-size-2">
                            Mã đơn hàng:
                          </span>
                          <span class="font-weight-medium font-size-2">
                            {result.order_id}
                          </span>
                        </li>
                        <li class="d-flex justify-content-between py-2">
                          <span class="font-weight-medium font-size-2">
                            Mã giao dịch:
                          </span>
                          <span class="font-weight-medium font-size-2">
                            {result.transaction_id}
                          </span>
                        </li>
                        <li class="d-flex justify-content-between py-2">
                          <span class="font-weight-medium font-size-2">
                            Mã ngân hàng:
                          </span>
                          <span class="font-weight-medium font-size-2">
                            {result.bank_code}
                          </span>
                        </li>
                        <li class="d-flex justify-content-between py-2">
                          <span class="font-weight-medium font-size-2">
                            Loại thẻ:
                          </span>
                          <span class="font-weight-medium font-size-2">
                            {result.card_type}
                          </span>
                        </li>
                        <li class="d-flex justify-content-between py-2">
                          <span class="font-weight-medium font-size-2">
                            Số tiền thanh toán:
                          </span>
                          <span class="font-weight-medium font-size-2">
                            {new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"}).format(result.amount)}
                          </span>
                        </li>
                        <li class="d-flex justify-content-between py-2">
                          <span class="font-weight-medium font-size-2">
                            Nội dung thanh toán:
                          </span>
                          <span class="font-weight-medium font-size-2">
                            {result.order_desc}
                          </span>
                        </li>
                        <li class="d-flex justify-content-between py-2">
                          <span class="font-weight-medium font-size-2">
                            Kết quả:
                          </span>
                          <span class="font-weight-medium font-size-2">
                            {result.message}
                          </span>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
      />
    </Suspense>
  );
}
