

import { useForm } from "react-hook-form";


import Swal from 'sweetalert2'
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const AddClass = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { user } = useAuth();
 
  const onSubmit = async (data) => {
    const classData = {
      name: data.className,
      image: data.classImage,
      instructorimage: data.instructorimage,
      instructorName: user.displayName,
      instructorEmail: user.email,
      availableSeats: parseInt(data.availableSeats),
      price: parseInt(data.price),
      status: "pending",
    };

    try {
      const response = await axios.post("https://language-server.vercel.app/addclass", classData);
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


 

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-9 bg-base-100">
          <h1 className="text-5xl font-bold">Add A Class</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10" encType="multipart/form-data">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input type="text" {...register('className', { required: true })} placeholder="Class Name" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input type="text" {...register('classImage', { required: true })} placeholder="class image" className="input input-bordered" />
              </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input className="border border-black-100" type="text" value={user?.displayName} readOnly />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input className="border border-black-100" type="text" value={user.email} readOnly />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">instructor Image</span>
              </label>
              <input type="text" {...register('instructorImage', { required: true })} placeholder="instructor image" className="input input-bordered" />
              </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="number"
                className="border border-black-100"
                {...register('availableSeats', { required: true, min: 0 })}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input className="border border-black-100" type="number" {...register('price', { required: true, min: 0 })} />
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Add" />
            </div>
          </form>

         
        </div>
      </div>
    </div>
  

  );
};

export default AddClass;
