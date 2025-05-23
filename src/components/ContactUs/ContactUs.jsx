import android from "../../assets/imges/landing-page/andriod.png";
import ios from "../../assets/imges/landing-page/ios.png";
import iPhone14 from "../../assets/imges/landing-page/sec-7/iPhone-14.png";
import "../../App.css";

export default function ContactUs() {
  return (
    <>
      <div className="container pt-5">
        <div className="row justify-content-between ">
          <div className="col-12 col-md-6 pe-5">
            <div>
              <p className="fw-bold  fs-2">
                Download Rentcars App for{" "}
                <span className="text-primary">FREE</span>
              </p>
              <span>For faster, easier booking and exclusive deals.</span>
            </div>
            <div className="d-flex gap-2 my-3 justify-content-center ">
              <div>
                <img src={android} alt="" />
              </div>
              <div>
                <img src={ios} alt="" />
              </div>
            </div>

            <div>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control bg-primary-subtle rounded-pill "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="email"
                    className="form-control bg-primary-subtle rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control bg-primary-subtle rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
              </form>
            </div>

            <div className="text-center ">
              <button className="btn bg-primary text-light px-5 py-1 mt-2">
                {" "}
                Send
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 d-none d-md-block">
            <div className="ps-5">
              <img src={iPhone14} className="img-fluid " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
