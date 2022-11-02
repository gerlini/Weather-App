import React from 'react'
import "../style/Nav.css"
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar.jsx';
import logo from "../img/Logo.png"


const Nav = ({onSearch}) => {
  return (
    <nav className='nav-bar'>
      <div className='img'>
       <Link to="/">
          <img src={logo} width="100" height="100" alt="img-not-found" />
        </Link>
        </div>
        
        <div className='search'>
          <Searchbar onSearch={onSearch}/>
        </div>
    </nav>
  )
}

export default Nav