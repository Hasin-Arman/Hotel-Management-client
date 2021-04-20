import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../../../images/plus.png'
const Sidebar = () => {
    return (
        <div style={{ backgroundColor: ' #001a4d', height: '100vh',position:'fixed' }} className="sidebar d-flex flex-column  col-md-2">

            <Link style={{paddingTop:'200px',textDecoration:'none'}} className="text-white" to='/addService'>
                <img style={{ height: '20px',marginRight:'5px' }} src={plus} alt="" />
                <span>Add service</span>
            </Link>
            <Link style={{paddingTop:'20px',textDecoration:'none'}} className="text-white" to='/addReview'>
                <img style={{ height: '20px',marginRight:'5px' }} src={plus} alt="" />
                <span>Add Review</span>
            </Link>

        </div>
    );
};

export default Sidebar;