import { NavBar } from "./../NavBar/NavBar";
import homeImg from "../../assets/imges/landing-page/car 2 1.png";
import frame from "../../assets/imges/landing-page/frame";
import android from "../../assets/imges/landing-page/andriod.png";
import ios from "../../assets/imges/landing-page/ios.png";
import "../../App.css";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="mt-3 mb-4 mb-md-0">
        <div>
          <div className="d-flex justify-content-between align-items-center ">
            <div className={`${styles.text}`}>
              <h1 className="fw-bold">
                Find, book and rent a car{" "}
                <span className="text-primary">Easily</span>
              </h1>
              <p>
                Get a car wherever and whenever you need it with your IOS and
                Android device.
              </p>
              <div>
                <img className="img-fluid pe-2" src={android} alt="Android" />
                <img className="img-fluid " src={ios} alt="iOS" />
              </div>
            </div>
            <div>
              <div className=" position-relative">
                <img
                  src={homeImg}
                  className="img-fluid car-animation"
                  alt="Car "
                />
              </div>
              <div className={`${styles.positionImg}`}>
                <img src={frame} className="img-fluid" alt="frame" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
