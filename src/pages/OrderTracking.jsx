import { Form, useActionData } from "react-router-dom";

export default function OrderTracking() {
  const data = useActionData()
  return (
    <main id="content">
      <div className="container">
        <Form action="." method="POST" className="space-bottom-2">
          <div className="pb-lg-2">
            <div className="py-4 pt-lg-8 pb-lg-7">
              <h6 className="font-weight-medium font-size-7 text-center">
                Tra cứu hành trình
              </h6>
            </div>
            <div className="max-width-770 mx-auto">
              <p className="font-size-2 text-center text-lh-1dot72 text-gray-600 mb-6">
                Để theo dõi đơn hàng của bạn, hãy nhập mã đơn hàng và địa chỉ email của bạn tại đây và nhấn nút tra cứu
              </p>
            </div>
            <div className="row mb-6">
              <div className="col-md-6 mb-5 mb-md-0">
                <div className="js-form-message">
                  <label for="exampleFormControlInput1">Order ID</label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    name="order_id"
                    id="exampleFormControlInput1"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="js-form-message">
                  <label for="exampleFormControlInput2">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-0 font-size pl-3 placeholder-color-3"
                    id="exampleFormControlInput2"
                    name="email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-lg-start">
              <button
                type="submit"
                className="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-250"
              >
                Tra cứu
              </button>
            </div>
          </div>
          
        </Form>
        {data?.data.to_name && <div className="mb-4">Khách hàng: {data.data.to_name}</div>}
        {data?.data.content && <div className="mb-4">Đơn hàng: {data.data.content}</div>}
        {data?.data.status && <div className="mb-4">Trạng thái: {data.data.status}</div>}
      </div>
      
    </main>
  );
}
