import React from 'react';
import wifi from '../../../images/wifi (1).png'
import dish from '../../../images/serving-dish.png'
import pool from '../../../images/swimming.png'

const Features = () => {
    return (
        <div style={{backgroundColor:'lightGray'}} className="container mt-5">
            <div className="row">
                <div className="col-md-4 d-flex align-items-center p-3">
                    <img style={{height:'60px'}} src={wifi} alt=""/>
                    <div style={{paddingLeft:'20px'}}> 
                    <h2>Enjoy free Wi-Fi</h2>
                    <p>We believe that when a hotel advertises free WiFi, they should provide travelers with a fast and reliable connection. </p>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center p-3">
                    <img style={{height:'60px'}} src={dish} alt=""/>
                    <div style={{paddingLeft:'20px'}}> 
                    <h2>Concierge service</h2>
                    <p>Concierge service Top-tier hotels have a lot to recommend them: luxurious spas, twice-daily room service and superb on-site restaurants.</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center p-3">
                    <img style={{height:'60px'}} src={pool} alt=""/>
                    <div style={{paddingLeft:'20px'}}> 
                    <h2>Pool access</h2>
                    <p>Hotel has pool room, in particular, hotels based in big cities might require keycard access to get into the pool. Spa, and amenity access.</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Features;