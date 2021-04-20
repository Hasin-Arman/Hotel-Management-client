import React, { useEffect, useState } from 'react';
import user1 from '../../../images/Ellipse 1.png'
import user2 from '../../../images/Ellipse 2.png'
import user3 from '../../../images/Ellipse 3.png'
import Client from '../Client/Client';


const Testimonials = () => {
  const [comments,setComments]=useState([]);
  useEffect(()=>{
        fetch('http://localhost:5000/addComment')
        .then(res=>res.json())
        .then(data=>setComments(data))
  },[])
    return (
        <section className="mt-5">
            <div style={{ marginLeft: '200px' }}>
                <h4 style={{textAlign:'center'}} className="text-info">Testimonials</h4>
                <h1 style={{ color: '#3A4256',textAlign:'center' }}>What They Say</h1>
                <div className="row">
                    {
                        comments.map(info => <Client info={info}></Client>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;