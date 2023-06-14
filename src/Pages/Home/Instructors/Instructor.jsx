import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Instructor = () => {
  const [instructorData, setInstructorData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch('https://language-server.vercel.app/instructor')
      .then(res => res.json())
      .then(data => setInstructorData(data));
     
  }, []);
  console.log(instructorData);
  if (instructorData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div >
        <h1 className='text-5xl  text-black text-center font-bold py-10 my-5'>Our Instructor</h1>
        
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {instructorData.map(instructor => (
        <div key={instructor._id} className="bg-white p-4 shadow-md rounded-lg">
          <img src={instructor.image} alt={instructor.name} className="w-full h-32 object-cover mb-4" />
          <h3 className="text-lg font-bold">{instructor.name}</h3>
          <p className="text-gray-500">{instructor.email}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Instructor;
