import React from "react";
import FoodList from "../components/FoodList";

const Home = () => {
  return (
    <>
      <div className="main_background mb-4">
        <div className="text-content text-center">
          <h2 className="thai_bold_font px-3">THAI BUDDA</h2>
          <h2 className="medium_font text-white my-4 px-4">
            Experience the Exquisite FLavors of Thailand, Right at Your Table!
          </h2>
          <a href="#menu" style={{ textDecoration: "none" }}>
            <div
              className="border_btn d-inline-block mx-auto text-white py-3 medium_font"
              style={{ borderColor: "#fff" }}
            >
              View Today's Menu
            </div>
          </a>
        </div>
      </div>
      <div className="container-fluid p-5">
        <FoodList />
      </div>
    </>
  );
};

export default Home;
