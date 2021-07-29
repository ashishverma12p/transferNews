import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid nav-bg" >
        <div className='row'>
          <div className="col-10 mx-auto">
         
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid ">
          <NavLink activeClassName='menu_active'
           className="navbar-brand bg-light "to="/">Football Transfer News</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 bg-light">
              <li className="nav-item ">
                <NavLink activeClassName='menu_active'
                 className="nav-link active" aria-current="page"to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu_active'
                 className="nav-link"to="/service">services</NavLink>
              </li>
              <li className="nav-item">
              <NavLink activeClassName='menu_active'
              className="nav-link"to="/about">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink activeClassName='menu_active'
            className="nav-link"to="/contact">contact us</NavLink>
          </li>
             
                
             
             
            </ul>
           
          </div>
        </div>
      </nav>
      </div>
      </div>
    </div>
    </div>

  );
};

export default Navbar;