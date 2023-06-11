// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// import useAuth from "../../../Hooks/useAuth";
// import useAdmin from "../../../Hooks/useAdmin";



// const Classes = () => {
//     const [axiosSecure] = useAxiosSecure();
//     const {user}=useAuth();
//     const [isAdmin] = useAdmin();
//     const { data: classes = [], refetch } = useQuery(['class'], async () => {
//  const res = await axiosSecure.get('/approveclass')
//  return res.data;
// })


 

//   const handleSelectClass = async(classId) => {
//     if (!user) {
//       // Redirect to login page or show login message
//       console.log("Please log in to select the course.");
//       return;
//     }

//     if (isAdmin) {
//       // Show message for admin/instructor
//       console.log("You are logged in as admin/instructor.");
//       return;
//     }

//    // const selectedClass = classes.find((classItem) => classItem.id === classId);

//     const selectedClass = classes.find((classItem) => classItem.id === classId);

//   if (!selectedClass) {
//     console.log("Selected class not found.");
//     return;
//   }
    

//     if (selectedClass.availableSeats === 0) {
//       // Show message for zero available seats
//       console.log("This class has no available seats.");
//       return;
//     }
    
//     console.log(classId);
       
    
    
//     console.log(`Class ${selectedClass.name} selected.`);
//   };
 
   



//     return (
//         <div className="flex flex-wrap">
//         {classes.map((classItem) => (
//           <div
//             key={classItem.id}
//             className={`w-1/3 p-4 ${
//               classItem.availableSeats === 0 ? "bg-red-200" : ""
//             }`}
//           >
//             <img src={classItem.image} alt={classItem.name} className="w-full" />
//             <h3 className="text-lg font-bold mt-2">{classItem.name}</h3>
//             <p className="text-sm">{classItem.instructorName}</p>
//             <p className="text-sm">
//               Available Seats: {classItem.availableSeats}
//             </p>
//             <p className="text-sm">Price: ${classItem.price}</p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={() => handleSelectClass(classItem.id)}
//               disabled={
//                 classItem.availableSeats === 0  || isAdmin
//               }
//             >
//               {user ? "Select Class" : "Logged in"}
//             </button>
//           </div>
//         ))}
//       </div>
//     );
// };

// export default Classes;