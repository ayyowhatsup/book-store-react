export default function ComingSoon() {
  return (
    <main id="content">
      <div className="container">
        <div className="space-2 space-md-3 space-lg-4 space-top-xl-6 space-bottom-xl-5">
          <div className="d-flex flex-column align-items-center">
            <div className="font-weight-medium font-size-15 font-size-xs-25 mb-3">
              We’re coming soon.
            </div>
            <h6 className="font-weight-medium mb-2 col-lg-7 text-center text-lh-lg mb-5">
              Our website is under construction. We’ll be here soon with our new
              awesome site, subscribe to be notified.
            </h6>
            <div className="countdown-timer">
              <div className="d-flex justify-content-between">
                <div className="py-2d75 d-md-flex align-items-center pr-3">
                  <span className="font-weight-medium font-size-3">114</span>
                  <span className="font-size-2 ml-md-2 ml-wd-2 d-xl-block d-wd-inline mr-md-1">
                    Days
                  </span>
                </div>
                <div className="border-left pr-3">&nbsp;</div>
                <div className="py-2d75 d-md-flex align-items-center pr-3">
                  <span className="font-weight-medium font-size-3">03</span>
                  <span className="font-size-2 ml-md-2 ml-wd-2 d-xl-block d-wd-inline mr-md-1">
                    Hours
                  </span>
                </div>
                <div className="border-left pr-3">&nbsp;</div>
                <div className="py-2d75 d-md-flex align-items-center pr-3">
                  <span className="font-weight-medium font-size-3">60</span>
                  <span className="font-size-2 ml-md-2 ml-wd-2 d-xl-block d-wd-inline mr-md-1">
                    Mins
                  </span>
                </div>
                <div className="border-left pr-3">&nbsp;</div>
                <div className="py-2d75 d-md-flex align-items-center pr-0">
                  <span className="font-weight-medium font-size-3">25</span>
                  <span className="font-size-2 ml-md-2 ml-wd-2 d-xl-block d-wd-inline mr-md-1">
                    Secs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
