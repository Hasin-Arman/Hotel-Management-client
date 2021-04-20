import React, { useState,useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
const MoreServices = () => {
    const [services,serServices]=useState([]);
    useEffect(() => {
            fetch('http://localhost:5000/addService')
            .then(res=>res.json())
            .then(data=>serServices(data))
    },[])
    return (
        <div className="container mt-5">
           <h1 style={{textAlign:'center',color:"cadetblue",marginBottom:'50px'}}>Our services</h1>
            <div className="row">
                {
                    services.map(service=><ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default MoreServices;