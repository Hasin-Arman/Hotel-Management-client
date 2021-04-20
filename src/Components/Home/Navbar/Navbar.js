import React from 'react';
import './Navbar.css'
import logo from '../../../images/building.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <section  className="navStyle">
            <div className="row">
            <div style={{paddingLeft:'100px'}} className="col-md-8 d-flex align-items-center">
                <img style={{height:'50px'}} src={logo} alt=""/>
                <h1 className="text-white">hotello</h1>
            </div>
            <div className="col-md-4">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                            <li class="nav-item  ">
                                <a class="nav-link text-white fs-3"  href="#">Home</a>
                            </li>
                      
                            
                            <li class="nav-item ">
                                <Link  class="nav-link text-white" to='/dashboard'>Dashboard</Link>
                            </li>
                            <li class="nav-item">
                            <Link  class="nav-link text-white" to='/login'>Login</Link>
                            </li>
                               
      </ul>
                          
                               <Link to="/bookingForm"> <button class="btn btn-outline-success">Book Now</button></Link>
                            
    </div>
                    </div>
</nav>
            </div>
</div>
        </section>
    );
};

export default Navbar;