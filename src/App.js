import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import Ciudad from "./components/Ciudad.jsx";
import Swal from "sweetalert2";
import axios from "axios";


const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  async function onSearch(imputcity) {
    try {
      let jsonCity = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${imputcity}&units=metric&appid=${apiKey}`
      );
      let cityData = jsonCity.data;

      const city = {
        id: cityData.id,
        min: Math.round(cityData.main.temp_min),
        max: Math.round(cityData.main.temp_max),
        img: cityData.weather[0].icon,
        wind: cityData.wind.speed,
        temp: Math.round(cityData.main.temp),
        name: cityData.name,
        weather: cityData.weather[0].main,
        clouds: cityData.clouds.all,
        latitud: cityData.coord.lat,
        longitud: cityData.coord.lon,
      };

      cities.some((e) => e.name === city.name)
        ? Swal.fire({

            position:"top",
            title: "Esta ciudad ya esta en la lista ",
            width: 600,
            padding: "3em",
            color: "white",
            background: "transparent",
            imageUrl:"https://cdn-icons-png.flaticon.com/512/463/463612.png",
            backdrop: `
                      
                      rgba(0, 0, 0, 0.790)
                      no-repeat 
                      `,
                      imageWidth:"150px",
            confirmButtonColor:"#e04f5f"
          })
        : setCities((oldCities) => [...oldCities, city]);
    } catch (error) {
      Swal.fire({
        position:"top",
        title: "Ciudad no encontrada",
        width: 600,
        padding: "3em",
        color: "white",
        background: "transparent",
        imageUrl:"https://cdn-icons-png.flaticon.com/512/463/463612.png",
        backdrop: `
                  
                  rgba(0, 0, 0, 0.790)
                  no-repeat 
                  `,
                  imageWidth:"150px",
        confirmButtonColor:"#e04f5f"
      });
    }
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />

      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
    </div>
  );
}

export default App;
