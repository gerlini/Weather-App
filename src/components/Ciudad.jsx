import React from 'react'
import  "../style/Ciudad.css"

export default function Ciudad({city}) {
  return (
      <div>
              <div className="container">
                  <h1>{city.name}</h1>
                  <div className="info">
                      <div>Temperatura: {city.temp} ºC</div>
                      <div>Clima: {city.weather}</div>
                      <div>Viento: {city.wind} km/h</div>
                      <div>Cantidad de nubes: {city.clouds}</div>
                      <div>Latitud: {city.latitud}º</div>
                      <div>Longitud: {city.longitud}º</div>
                  </div>
          </div>
      </div>
  )
}