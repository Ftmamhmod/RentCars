import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Car from "./Car/Car";
import styles from "./Cars.module.css";

export default function CarsList() {
  const navigate = useNavigate();

  const goToPopularCars = () => {
    navigate("/popularcars");
  };

  const [cars, setCars] = useState([]);

  const getCars = async () => {
    try {
      const response = await axios.get("https://myfakeapi.com/api/cars");
      setCars(response.data.cars);
    } catch (error) {
      console.error(error);
    }
  };
  const currentPageData = cars.slice(0, 4);

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="container mt-5">
      <div className={`${styles.textCars} text-center`}>
        <span>Popular Rental Deals</span>
        <p className="fw-bold mt-3 fs-1">Most Popular Cars Rental Deals</p>
      </div>

      <div className="row">
        {currentPageData.map((car) => (
          <div key={car.id} className="col-12 col-lg-3 col-md-6 my-3">
            <Car car={car} />
          </div>
        ))}
      </div>
      <div className={`${styles.b} text-center mt-4`}>
        <button
          className={`${styles.btnshowAll} text-muted`}
          onClick={goToPopularCars}
        >
          Show all vehicles<i className="fa-solid fa-arrow-right ms-3"></i>
        </button>
      </div>
    </div>
  );
}
