import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <div style={{ marginTop: "50px" }} className="container">
            <div style={{ height: '500px' }} className="row">
                <div className="col-md-3 service-1 ">
                    <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>24H Room Service</h1>
                    <p style={{ color: 'white', textAlign: 'center' }}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                <div className="col-md-3  service-2">
                    <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>Restaurant And Bars</h1>
                    <p style={{ color: 'white', textAlign: 'center' }}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                <div className="col-md-3  service-3">
                    <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>Events And Meetings</h1>
                    <p style={{ color: 'white', textAlign: 'center' }}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                <div className="col-md-3  service-4">
                    <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '200px' }}>Fitness And Spa</h1>
                    <p style={{ color: 'white', textAlign: 'center' }}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
            </div>
            </div>
        </div>
    );
};

export default Services;