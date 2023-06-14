import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";
import Swal from "sweetalert2";



const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user}=useAuth();
    const [isAdmin] = useAdmin();
    const { data: classes = [], refetch } = useQuery(['class'], async () => {
 const res = await axiosSecure.get('/approveclass')
 return res.data;
})


 

  const handleSelectClass = (classId) => {
    if (!user) {
      
      Swal.fire({
        title: 'Please log in',
        text: 'Please log in to select the course.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (isAdmin) {
      Swal.fire({
        title: 'Admin/Instructor',
        text: 'You are logged in as admin/instructor.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
      return;
    }

    

    const selectedClass = classes.find((classItem) => classItem.id === classId);

  if (!selectedClass) {
    console.log("Selected class not found.");
    return;
  }
    

    if (selectedClass.availableSeats === 0) {
      Swal.fire({
        title: 'Class Not Found',
        text: 'Selected class not found.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    fetch(`https://language-server.vercel.app/selectedclass/${user?.email}`,{
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(selectedClass)
  })
  
  
    
    
   
       
    
  };
 
   



    return (
        <div className="flex flex-wrap">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className={`w-1/3 p-4 ${
              classItem.availableSeats === 0 ? "bg-red-200" : ""
            }`}
          >
            <img src={classItem.image} alt={classItem.name} className="w-full" />
            <h3 className="text-lg font-bold mt-2">{classItem.name}</h3>
            <p className="text-sm">{classItem.instructorName}</p>
            <p className="text-sm">
              Available Seats: {classItem.availableSeats}
            </p>
            <p className="text-sm">Price: ${classItem.price}</p>
            <button
  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
  onClick={() => {
    if (user) {
      Swal.fire({
        title: 'Select Class',
        text: 'Are you sure you want to select this class?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          handleSelectClass(classItem.id);
        }
      });
    } else {
      Swal.fire({
        title: 'Logged in',
        text: 'Please log in to select a class.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
  }}
  disabled={classItem.availableSeats === 0 || isAdmin}
>
              {user ? "Select Class" : "Logged in"}
            </button>
          </div>
        ))}
      </div>
    );
};

export default Classes;