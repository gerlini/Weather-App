import React from 'react'
import "../style/Card.css"
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
  return (<div className='contenedor-card'>
  <button onClick={onClose} className='boton-x' >x</button>
  <Link className="card-title" to={`/ciudad/${id}`} >
        <h1 >{name}</h1>
      </Link>
      <div className='imgweather'>
  {/* IMAGEN */}
  <img className='image' src={` http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found"/>
  </div>

<div className='maxmin'>
     {/* MIN */}
  <div className='MIN'>
  <h4>Min</h4>
  <h4>{min}°</h4>
  </div>
  {/* MAX */}
  <div className='MAX'>
  <h4>Max</h4>
  <h4>{max}°</h4>
  </div>
  </div>
  
</div>
);
}
