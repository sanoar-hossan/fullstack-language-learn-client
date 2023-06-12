
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";



const MySelelectedClass = () => {
   const {user}=useAuth();
   
    const [axiosSecure] = useAxiosSecure();
   
    const { data: selectedClasses = [], refetch } = useQuery(
      ['selectedclass', user?.email],
      async () => {
        const res = await axiosSecure.get(`/selectedclass/${user?.email}`);
        return res.data;
      }
    );
    
    const handleDelete = async (classId) => {
      try {
        await axiosSecure.delete(`/selectedclass/${user?.email}`);
        refetch(); // Refetch the selected classes after successful deletion
      } catch (error) {
        console.error("Error deleting selected class:", error);
      }
    };
    // const handlePay =  (classId) => {
      
    // };
    //1.dynamic route
    //2.useparams id
    //3.const _id find opertion
    
    

    return (
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {selectedClasses.map((classItem) => (
        <div className="bg-white rounded-lg shadow-md p-4" key={classItem._id}>
          <img src={classItem.image} alt={classItem.name} className="w-full h-32 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">{classItem.name}</h2>
          <p className="text-gray-600 mb-2">Instructor: {classItem.instructorName}</p>
          <p className="text-gray-600 mb-2">Available Seats: {classItem.availableSeats}</p>
          <p className="text-gray-600 mb-4">Price: {classItem.price}</p>
          <div className="flex gap-5">
          <button
            onClick={() => handleDelete(classItem._id)}
            className="bg-red-500 hover:bg-red-600 text-white rounded  px-4 py-2"
          >
            Delete
          </button>
          {/* <button
            onClick={handlePay=`/dashboard/payment/${classItem._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 "
            disabled={classItem.availableSeats === 0}
          >
            Pay
          </button> */}
          <Link to={`/dashboard/payment/${classItem._id}`} className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Pay
            </Link>
          </div>
        </div>
      ))}
    </div>
        
    );
};

export default MySelelectedClass;