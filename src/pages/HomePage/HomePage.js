import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Logo from "../assets/icons/wehyuhdeh-logo-home.svg"
import PlacesList from "../../components/PlacesList/PlacesList";
import "./HomePage.scss";

function HomePage() {
  const [location, setLocation] = useState(null)

  const navigate = useNavigate();

  const coordinates = {
    miami: "25.76228811240331,-80.20062164338918",
    atlanta: "33.75070291251161,-84.38580730781764",
    new_york: "40.71159440927019,-73.99070031597165",
    toronto: "43.653366007453776,-79.38346763592835",
    london: "51.50852523882869,-0.125829834899074"
  }


  function handleLocation(locationVal) {
    setLocation(coordinates[locationVal])
    console.log(location)
    navigate("/location")
  }



  return (
    <div className="homePage">
      <header className="homePage-header">
        <img className="homePage-header__logo" src={Logo} alt="WehYuhDeh logo" />
      </header>
      <div className="button-container">
        <div className={`button-container__button ${location === "25.76228811240331,-80.20062164338918" ? "button-container__button--selected" : ""}`} onClick={() => { handleLocation('miami') }}><h2 className="button-container__location">MIAMI</h2></div>
        <div className={`button-container__button ${location === "33.75070291251161,-84.38580730781764" ? "button-container__button--selected" : ""}`} onClick={() => { handleLocation('atlanta') }}><h2 className="button-container__location">ATLANTA</h2></div>
        <div className={`button-container__button ${location === "40.71159440927019,-73.99070031597165" ? "button-container__button--selected" : ""}`} onClick={() => { handleLocation('new_york') }}><h2 className="button-container__location">NEW YORK</h2></div>
        <div className={`button-container__button ${location === "43.653366007453776,-79.38346763592835" ? "button-container__button--selected" : ""}`} onClick={() => { handleLocation('toronto') }}><h2 className="button-container__location">TORONTO</h2></div>
        <div className={`button-container__button ${location === "51.50852523882869,-0.125829834899074" ? "button-container__button--selected" : ""}`} onClick={() => { handleLocation('london') }}><h2 className="button-container__location">LONDON</h2></div>

      </div>
      <section className="card-container" id="card-container">
        {/*
         have state for each button click, button click triggers state change for content 
         each click triggers an axios request is there a better way to save it in state 
         save in state after initial axios request to not trigger multiple requests therefore if state is null make an axios request if not axios request 
         if state is location render cards
         cards map function  
  */}
        <Routes>
          <Route path="/:location" element={<PlacesList location={location} />} />
        </Routes>
      </section>
    </div>
  );
}
export default HomePage;
