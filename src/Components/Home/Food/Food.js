import React from 'react';
import './Food.css'
import { Link } from 'react-router-dom';
const Food = () => {
    return (
        <section className="food mt-5" style={{height:'500px',padding:'150px'}}>
            <h1 style={{textAlign:'right',color:'red'}}>Good Time,Great<br/>Taste</h1>
            <p style={{textAlign:'right',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eius voluptate minus labore repellendus facilis expedita!</p>
            {/* <button  className="btn btn-secondary">Book Now</button> */}
            <Link to="/bookingForm"> <button style={{marginLeft:'900px'}} class="btn btn-info">Book Now</button></Link>
        </section>
    );
};

export default Food;