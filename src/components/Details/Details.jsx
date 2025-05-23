import { useNavigate } from "react-router-dom";
import arrow from "../../assets/imges/card/arrow-right.png";

export default function Details({ carId }) {
  let navigate = useNavigate();
  let goToDetailsOfCar = () => {
    navigate(`/carDetails/${carId}`, { state: { carId } });
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-3 w-100">
        <button className="btn btn-primary w-100" onClick={goToDetailsOfCar}>
          View details <img src={arrow} />
        </button>
      </div>
    </>
  );
}
