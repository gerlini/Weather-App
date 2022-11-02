import React , { useState} from 'react'
import "../style/Searchbar.css"


export default function Searchbar({onSearch}) {
  const [city, setCity] = useState("");
  
  return (
    <form className="search-bar"onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input className="imputext"
        type="text"
        placeholder="Ciudad..."
        value = {city}
        onChange = {e => setCity(e.target.value)}
      />
      <input className="boton-add" type="submit" value="Agregar" />
    </form>
  );
}