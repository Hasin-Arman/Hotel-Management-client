import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
       <section className="headerStyle" style={{height:'500px'}}>
           <h1 style={{fontFamily:'cursive',color:"rgb(0, 128, 255)",textAlign:'center',paddingTop:'150px',fontSize:'80px'}}>Hotello</h1>
           <h1 style={{textAlign:'center',color:'	rgb(0, 191, 255)'}}>The most luxurious hotel in the town.</h1>
       </section>
    );
};

export default HeaderMain;