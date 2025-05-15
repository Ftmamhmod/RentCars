import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../App.css";
import car2 from "../../../assets/imges/landing-page/sec-5/Audi 1.png";

export default function CarDetails() {
  const [popularCar, setPopularCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  let getPopularCars = async () => {
    try {
      let response = await axios.get(`https://myfakeapi.com/api/cars/${id}`);

      setPopularCar(response.data.car || response.data);
    } catch (error) {
      console.error("Error fetching car details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPopularCars();
  }, [id]);

  let navigate = useNavigate();
  let goToHomePage = () => {
    navigate("/");
  };
  let goToDetailsPage = () => {
    navigate("/popularcars");
  };
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <div className="">
        <ul className="list-unstyled d-flex gap-3 align-items-center maxMargin mt-4 overflow-hidden ">
          <li>
            <button className="btn m-0 p-0 " onClick={goToHomePage}>
              <a href="">Home</a>
            </button>
          </li>
          <li>/</li>
          <li>
            <button className="btn m-0 p-0" onClick={goToDetailsPage}>
              <a href="">Cars</a>
            </button>
          </li>
          <li className="d-none d-md-block">/</li>
          <li className="p-0 m-0 d-none d-md-block">Car datails</li>
          <li>/</li>
          <li className="p-0 m-0 text-primary fw-bold fs-3">
            {popularCar?.car}
          </li>
        </ul>

        <div className="row mt-md-5 d-flex justify-content-between ">
          <div className="col-md-6 col-12 mt-md-5">
            <img src={car2} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6 col-12 mt-3">
            <div className="textCars ">
              <span className="text-uppercase">Car Details</span>
              <p className="fs-3 fw-bold my-3">{popularCar?.car}</p>
            </div>

            <div className="d-flex align-items-center my-4  ">
              <i className="fa-solid fa-dollar-sign text-muted me-2 fs-5"></i>
              <span>price : {popularCar?.price}</span>
            </div>

            <div className="d-flex align-items-center my-4 ">
              <i className="fa-regular fa-calendar text-muted me-2 fs-5"></i>
              <span>year : {popularCar?.year}</span>
            </div>

            <div className="d-flex align-items-center my-4 ">
              <i className="fa-solid fa-circle-info text-muted me-2 fs-5"></i>{" "}
              <span>engine : {popularCar?.engine}</span>
            </div>

            <div className="d-flex align-items-center my-4 ">
              <i className="fa-solid fa-truck-monster text-muted me-2 fs-5"></i>{" "}
              <span>transmission : {popularCar?.transmission}</span>
            </div>
            <div className="d-flex align-items-center my-4 ">
              <i className="fa-solid fa-horse-head text-muted me-2 fs-5"></i>{" "}
              <span>horsepower : {popularCar?.horsepower}</span>
            </div>

            <div className="d-flex align-items-center my-4 ">
              <i className="fa-solid fa-fan text-muted me-2 fs-5"></i>
              <span className="text-muted">Air conditioning :</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
