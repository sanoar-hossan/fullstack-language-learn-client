import { useState } from "react";


const MySelelectedClass = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);

  const handleDeleteClass = (classId) => {
    setSelectedClasses((prevSelectedClasses) =>
      prevSelectedClasses.filter((classItem) => classItem.id !== classId)
    );
  };

  const handlePayClass = (classId) => {
    // Handle payment logic here
    console.log(`Pay for class with ID ${classId}`);
  };
    return (
        <div>
        <h2>My Selected Classes</h2>
        {selectedClasses.length === 0 ? (
          <p>No classes selected.</p>
        ) : (
          <div>
            {selectedClasses.map((classItem) => (
              <div key={classItem.id} className="border p-4 mb-4">
                <h3 className="text-lg font-bold">{classItem.name}</h3>
                <p className="text-sm">Instructor: {classItem.instructor}</p>
                <p className="text-sm">Available Seats: {classItem.availableSeats}</p>
                <p className="text-sm">Price: ${classItem.price}</p>
                <div className="mt-4">
                  <button
                    className="mr-2 px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleDeleteClass(classItem.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => handlePayClass(classItem.id)}
                  >
                    Pay
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default MySelelectedClass;