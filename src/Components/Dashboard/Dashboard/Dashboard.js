import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div style={{height:'100vh'}} className="col-md-10 bg-primary">
                <h1 style={{marginLeft:'450px'}}>Welcome</h1><br/>
                <h1 style={{padding:'20px',marginLeft:'380px'}}> To The Dashboard</h1>
               
            </div>
            
            
        </div>
    );
};

export default Dashboard;