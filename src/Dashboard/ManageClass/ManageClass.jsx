import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const [feedback, setFeedback] = useState("");
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false); // State for managing feedback modal visibility
  
    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
      const res = await axiosSecure.get("/class");
      return res.data;
    });
  
    const approveClass = async (classId) => {
      await axiosSecure.patch(`/class/${classId}/approve`);
      refetch(); 
    };
  
    const denyClass = async (classId) => {
      await axiosSecure.patch(`/class/${classId}/deny`);
      refetch(); // Manually trigger a refetch of the "classes" query
    };
  
    const sendFeedback = async (classId) => {
      await axiosSecure.patch(`/class/${classId}/feedback`, { feedback });
      setFeedback("");
      setFeedbackModalOpen(false); // Close the feedback modal
      refetch(); 
    };


    return (
        <div>
      <h2>Manage Classes</h2>
      {classes.length === 0 ? (
        <p>No classes available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem) => (
                <tr key={classItem._id}>
                  <td>{/* Display class image here */}</td>
                  <td>{classItem.name}</td>
                  <td>{classItem.instructorName}</td>
                  <td>{classItem.instructorEmail}</td>
                  <td>{classItem.availableSeats}</td>
                  <td>{classItem.price}</td>
                  <td>{classItem.status}</td>
                  <td>
                    {classItem.status === "pending" && (
                      <>
                        <button onClick={() => approveClass(classItem._id)}>
                          Approve
                        </button>
                        <button onClick={() => denyClass(classItem._id)}>
                          Deny
                        </button>
                      </>
                    )}
                    {classItem.status === "approved" && (
                      <button
                        onClick={() => setFeedbackModalOpen(true)}
                      >
                        Send Feedback
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Feedback Modal */}
      {feedbackModalOpen && (
        <div>
          <h3>Send Feedback</h3>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button
            onClick={() => sendFeedback(classes[0]._id)} // Use a specific class ID or modify to select the appropriate class
          >
            Send Feedback
          </button>
          <button onClick={() => setFeedbackModalOpen(false)}>Close</button>
        </div>
      )}
    </div>
    );
};

export default ManageClass;