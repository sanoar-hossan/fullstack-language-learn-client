import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";


const AddClass = () => {
  const {user}=useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    data.status = 'pending';

    
      
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Class Name</label>
        <input type="text" {...register('className', { required: true })} />
        {errors.className && <span>This field is required</span>}
      </div>

      <div>
        <label>Class Image</label>
        <input type="file" {...register('classImage', { required: true })} />
        {errors.classImage && <span>This field is required</span>}
      </div>

      <div>
        <label>Instructor Name</label>
        <input type="text" value={user.displayName} readOnly />
      </div>

      <div>
        <label>Instructor Email</label>
        <input type="text" value={user.email} readOnly />
      </div>

      <div>
        <label>Available Seats</label>
        <input type="number" {...register('availableSeats', { required: true })} />
        {errors.availableSeats && <span>This field is required</span>}
      </div>

      <div>
        <label>Price</label>
        <input type="number" {...register('price', { required: true })} />
        {errors.price && <span>This field is required</span>}
      </div>

      <button type="submit">Add</button>
    </form>
    </div>
  );
};

export default AddClass;