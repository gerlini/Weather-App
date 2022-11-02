import React from 'react'
import "../style/Cards.css"
import Card from "../components/Card.jsx"
import loading from "../img/loading.gif"

export default function Cards({ cities, onClose }) {
  return (
    <>
      {cities.length > 0 ? (
        <div className="cards">
          {cities.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              temp={c.temp}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
            />
          ))}
        </div>
      ) : (
        <div className="carga">
            <div className='loadingimg'>
           <img className="imgloading"src={loading} alt="loading" />
           </div>
           <div className='textoloading'>
          <h1>Ingrese una ciudad...</h1>
          </div>
        </div>
      )}
    </>
  );
}

