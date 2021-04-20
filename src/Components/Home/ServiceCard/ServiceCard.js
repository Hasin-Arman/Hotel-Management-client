import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4">
            <div class="card" style={{width:" 20rem"}}>
                <img class="card-img-top" style={{height:'250px'}} src={service.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{service.title}</h5>
                    <p class="card-text">{service.description}</p>
                    <Link to="/bookingForm" class="btn btn-primary w-100">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;