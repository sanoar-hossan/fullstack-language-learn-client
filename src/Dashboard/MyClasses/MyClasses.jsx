import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
   

    const { data: classes = [], refetch } = useQuery(['myclasses'], async () => {
        const res = await axiosSecure.get('/myclasses')
        return res.data;
    })

    return (

            <div>
      <h2>My Classes</h2>
      {classes.length === 0 ? (
        <p>No classes added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
                <th>Total Enrolled Students</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, index) => (
                <tr key={classItem._id}>
                  <th>{index + 1}</th>
                  <td>{classItem.name}</td>
                  <td>{classItem.status}</td>
                  <td>{classItem.totalEnrolledStudents}</td>
                  <td>
                    {classItem.status === "denied" && (
                      <p>Feedback: {classItem.feedback}</p>
                    )}
                  </td>
                  <td>
                    <button>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

 
        
    );
};

export default MyClasses;