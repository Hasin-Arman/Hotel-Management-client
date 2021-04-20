import React from 'react';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './BookingForm.css'
const BookingForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const bookingData={
            name:data.name,
            email:data.email,
            occupation:data.occupation,
            address:data.address,
            checkIn:data.form,
            checkOut:data.to

        }
        fetch('http://localhost:5000/addBooking',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookingData)
        })
        .then(data=>{
           if(data){
               alert('Your Booking has confirmed')
           }
        })
    }
    return (
        <section className=" form">
            <h1 style={{ textAlign: 'center', color: 'burlywood' }} >Booking Form</h1>
            <form style={{ marginLeft: '250px' }} onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Name</h3>
                        <input className="form-control w-50" placeholder="Enter Your Name" {...register("name")} /><br />
                       
                    </div>
                    <div className="col-md-4">
                        <h3>Email</h3>
                        <input className="form-control w-50" placeholder="Enter Your Email" {...register("email")} /><br />
                    </div>
                    <div className="col-md-4">
                        <h3>Occupation</h3>
                        <input className="form-control w-50" placeholder="Enter Your Occupation" {...register("occupation")} /><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <h3>Address</h3>
                        <input className="form-control w-50" placeholder="Enter Your Address" {...register("address")} /><br />
                        <h2 className="text-primary">Please pay first</h2>
                        <ProcessPayment></ProcessPayment>
                    </div>
                    <div className="col-md-4">
                        <h3>Staying form</h3>
                        <input type="date" className="form-control w-50" placeholder="Enter Your Address" {...register("form")} /><br />
                    </div>
                    <div className="col-md-4">
                        <h3>Staying to</h3>
                        <input type="date" className="form-control w-50" placeholder="Enter Your Address" {...register("to")} /><br />
                        
                    </div>
                   
                
                </div>
                <button style={{marginLeft:'400px'}} className="btn btn-outline-info" type="submit">submit</button>
                {/* <input type="submit" /> */}
                
            </form>
            
        </section>
    );
};

export default BookingForm;