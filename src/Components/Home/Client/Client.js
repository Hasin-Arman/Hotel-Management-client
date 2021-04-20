import React from 'react';
import './Client.css'
const Client = ({ info }) => {
    return (
            <div className="col-md-3 client ml-5 mt-5">
                <h6 className="text-secondary">{info.comment}</h6>
                <div className="mt-5 d-flex align-items-center pl-2">
                    <div>
                        <img style={{height:'80px',borderRadius:'50%'}} src={info.image} alt="" />
                    </div>
                    <div className="pl-3">
                        <h5 className="text-info">{info.name}</h5>
                    </div>
                </div>
            </div>
        
    );
};

export default Client;