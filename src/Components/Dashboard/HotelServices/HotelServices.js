import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
const HotelServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const onSubmit = data =>{
        const commentData={
            title:data.title,
            count:data.count,
            description:data.description,
            image:imageURL
        }
       fetch('http://localhost:5000/addService',{
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(commentData)
       })
       .then(data=>{
           if(data){
               alert('successfully posted')
           }
       })
    };

    

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'fbbf1388b4563f23ffce756136098599');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
            console.log(response.data.data.display_url)
          setIMageURL(response.data.data.display_url);
          
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }
    return (
        <div className="row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
      <h1 style={{textAlign:'center',paddingBottom:'20px',color:'turquoise'}}>Add a service</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
           <h2>Title</h2>   
           <input className="form-control w-25" placeholder="Enter title"  {...register("title")} />
        </div>
        <div className="form-group">
            <h2>Number of people</h2>
            <input type="number" placeholder="how many person" className="form-control w-25" {...register("count")} />
        </div>
        <div className="form-group">
            <h2>Upload your image</h2>
        <input type="file" name="image" onChange={handleImageUpload}/><br/>
        </div>
        <div className="form-group">
            <h2>Description</h2>
            <textarea className="form-control" id="" cols="20" rows="5" placeholder="service description"  {...register("description")}></textarea>
        </div>
      <br/>
      <input className="btn btn-primary" type="submit" />
      
    </form>
            </div>
        </div>

    );
};

export default HotelServices;