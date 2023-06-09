import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";


const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useAuth();
    const onSubmit = async (data) => {
        const classData = {
          ...data,
          status: "pending",
        };
    
       
          const response = await axios.post("/classes", classData);
          console.log(response.data);
          
        
      };
    return (
        <div>
            <div>
      <h1>Create a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Class Name</label>
          <input {...register("className", { required: true })} />
          {errors.className && <span>This field is required</span>}
        </div>

        <div>
          <label>Class Image</label>
          <input {...register("classImage", { required: true })} />
          {errors.classImage && <span>This field is required</span>}
        </div>

        <div>
          <label>Instructor Name</label>
          <input value={user.displayName} readOnly />
        </div>

        <div>
          <label>Instructor Email</label>
          <input value={user.email} readOnly />
        </div>

        <div>
          <label>Available Seats</label>
          <input {...register("availableSeats", { required: true })} />
          {errors.availableSeats && <span>This field is required</span>}
        </div>

        <div>
          <label>Price</label>
          <input {...register("price", { required: true })} />
          {errors.price && <span>This field is required</span>}
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
        </div>
    );
};

export default AddClass;