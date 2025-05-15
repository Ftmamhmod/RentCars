// import React from 'react';
import audi from "../../assets/imges/landing-page/audi.png";
import caricon from "../../assets/imges/landing-page/car-icon.png";
import jaguar from "../../assets/imges/landing-page/jaguar.png";
import location from "../../assets/imges/landing-page/location.png";
import nissan from "../../assets/imges/landing-page/nissan.png";
import volvo from "../../assets/imges/landing-page/volvo.png";
import CardOfWork from "./CardOfWork/CardOfWork";
import "../../App.css";

export default function Work() {
  return (
    <>
      <div className="container mt-5">
        <div className="textCars text-center">
          <span className="text-uppercase">How it work</span>
          <p className="fw-bold mt-3 fs-1">Most popular cars rental deals</p>
        </div>

        <div className="row">
          <CardOfWork
            icon={location}
            title="Choose location"
            description="Choose your and find your best car"
          />
          <CardOfWork
            icon={caricon}
            title="Pick-up date"
            description="Select your pick up date and time to book your car"
          />
          <CardOfWork
            icon={location}
            title="Book your car"
            description="Book your car and we will deliver it directly to you"
          />
        </div>
        <div className="text-center m-auto p-3">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src={audi} className="  h-25 px-5 " alt="Audi" />
                <img src={nissan} className=" h-25 px-5" alt="Nissan" />
                <img src={volvo} className=" h-25 px-5" alt="Volvo" />
                <img src={jaguar} className=" h-25 px-3" alt="Jaguar" />
              </div>
              <div className="carousel-item">
                <img src={nissan} className=" h-25" alt="Nissan" />
                <img src={volvo} className=" h-25 px-5" alt="Volvo" />
                <img src={jaguar} className=" h-25 px-5" alt="Jaguar" />
                <img src={audi} className="  h-25 px-5 " alt="Audi" />
              </div>
              <div className="carousel-item">
                <img src={volvo} className=" h-25 px-5" alt="Volvo" />
                <img src={jaguar} className=" h-25 px-5" alt="Jaguar" />
                <img src={audi} className="  h-25 px-5 " alt="Audi" />
                <img src={nissan} className=" h-25" alt="Nissan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
