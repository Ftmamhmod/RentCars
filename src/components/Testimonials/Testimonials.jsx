import "../../App.css";
import img1 from "../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png";
import img2 from "../../assets/imges/landing-page/sec-6/girl.png";

export default function Testimonials() {
  return (
    <>
      <div className=" p-5 bg-body-tertiary overflow-hidden">
        <div className="textCars text-center">
          <span className="text-uppercase">Testimonials</span>
          <p className="fw-bold mt-3 fs-1">Most popular car rental deals</p>
        </div>

        <div className="row mt-5 pe-5 ps-5">
          <div className="col-12 col-md-6 mb-4">
            <div className="card flex-row shadow-sm h-100 ms-5 me-5">
              <img src={img1} className="card-img-left" alt="Charlie Johnson" />
              <div className="card-body">
                <h5 className="card-title">
                  <span className="h1">5.5</span> stars
                </h5>
                <div className="star-rating">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
                <p className="card-text mt-2">
                  “I feel very secure when using services. Your customer care
                  team is very enthusiastic and the driver is always on time.”
                </p>
                <p className="card-text">
                  <strong>Charlie Johnson</strong>
                </p>
                <p className="card-text text-muted">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="card flex-row shadow-sm h-100 ms-5 me-5">
              <img src={img2} className="card-img-left " alt="Jane Doe" />
              <div className="card-body">
                <h5 className="card-title">
                  <span className="h1">5.5</span> stars
                </h5>
                <div className="star-rating">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
                <p className="card-text mt-2">
                  “I feel very secure when using services. Your customer care
                  team is very enthusiastic and the driver is always on time.”
                </p>
                <p className="card-text">
                  <strong>Jane Doe</strong>
                </p>
                <p className="card-text text-muted">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
