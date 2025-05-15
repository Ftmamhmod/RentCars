import "./Footer.module.css";
import logoImg from "../../assets/imges/footer/logo-footer.png";
import icon1 from "../../assets/imges/footer/location.png";
import icon2 from "../../assets/imges/footer/call.png";
import icon3 from "../../assets/imges/footer/sms.png";
import icon4 from "../../assets/imges/footer/facebook.png";
import icon5 from "../../assets/imges/footer/instagram.png";
import icon6 from "../../assets/imges/footer/youtube.png";

export const Footer = () => {
  return (
    <>
      <footer className=" text-white text-center text-lg-start ">
        <div className="container py-5 border-bottom border-dark-subtle">
          <div className="d-flex justify-content-between flex-wrap row-gap-5">
            <div className="pe-3 pe-md-5">
              <img className="mb-4" src={logoImg} alt="Logo" />
              <div className="d-flex justify-content-start align-items-center mb-2">
                <img
                  className="img-fluid d-block me-2"
                  src={icon1}
                  alt="Location"
                />
                <p className="m-0 small">
                  25566 Hc 1, Glenallen,
                  <br />
                  Alaska, 99588, USA
                </p>
              </div>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <img
                  className="img-fluid d-block me-2"
                  src={icon2}
                  alt="Call"
                />
                <p className="m-0 small">+603 4784 273 12</p>
              </div>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <img className="img-fluid d-block me-2" src={icon3} alt="SMS" />
                <p className="m-0 small">rentcars@gmail.com</p>
              </div>
            </div>
            <div className="pe-3 pe-md-5">
              <p className="mb-4">Our Products</p>
              <p className="m-0 small">Career</p>
              <p className="m-0 small">Packages</p>
              <p className="m-0 small">Features</p>
              <p className="m-0 small">Priceline</p>
            </div>
            <div className="pe-3 pe-md-5">
              <p className="mb-4">Resources</p>
              <p className="m-0 small">Download</p>
              <p className="m-0 small">Help Centre</p>
              <p className="m-0 small">Guides</p>
              <p className="m-0 small">Partner Network</p>
              <p className="m-0 small">Cruises</p>
              <p className="m-0 small">Developer</p>
            </div>
            <div className="pe-3 pe-md-5">
              <p className="mb-4">About Rentcars</p>
              <p className="m-0 small">Why choose us</p>
              <p className="m-0 small">Our Story</p>
              <p className="m-0 small">Investor Relations</p>
              <p className="m-0 small">Priceline</p>
            </div>
            <div className="pe-3 pe-md-5">
              <p className="mb-4">Follow Us</p>
              <div className="d-flex gap-2">
                <img src={icon4} alt="Facebook" />
                <img src={icon5} alt="Instagram" />
                <img src={icon6} alt="YouTube" />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3">
          <p>Copyright 2024 ・ Rentcars, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
