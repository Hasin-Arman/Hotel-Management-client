import React from 'react';
import logo from '../../../images/building.png'
import './Footer.css'
const Footer = () => {
    return (
        <section className="footerStyle">
            <div className="row">
                <div style={{ padding: '100px' }} className="col-md-4 ">
                    <div className="d-flex align-items-center">
                        <img style={{height:'40px'}} src={logo} alt="" />
                        <h1 style={{ color: 'white' }}>hotello</h1>
                    </div>
                    <h5 className="text-secondary">We always strive for growth and development as StylemixThemes. We don’t want to have a large team, we want to have a team that works in unity. Our slogan is “Every day is the last day”.</h5>
                </div>
                <div style={{ padding: '100px' }} className="col-md-4">
                        <h4 style={{color:'white'}}>CONTACT US</h4>
                        <h5 className="text-secondary">1010 Berkler avenue, Brooklyn,New York City, NY 10018 US
                        <br/>
                        <br/>
                        Tel.: +1 998 150 3020
                        Fax.: +1 998 150 3020
                        <br/>
                        <br/>
                        info@stylemixthemes.com
                        </h5>
                </div>
                <div  style={{ padding: '100px' }} className="col-md-4">
                    <h4 style={{color:'white'}}>STAY IN TOUCH</h4>
                    <input type="text" name="email" placeholder="Your email address" id=""/><br/>
                    <button style={{marginTop:'5px'}} className="btn btn-info">Submit</button>
                    <h5 style={{paddingTop:'10px'}} className="text-secondary">Enter your email address for promotions and news.</h5>
                </div>
            </div>
            <hr style={{border:'0.1px solid gray'}}></hr>
            <footer style={{textAlign:'center'}} className="text-secondary">Copyright © 2021 hasinarman6@gmail.com</footer>
        </section>
        
    );
};

export default Footer;