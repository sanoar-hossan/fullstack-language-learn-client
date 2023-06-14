
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const EnrolledClass = () => {
    
    const {user}=useAuth();
   
    const [axiosSecure] = useAxiosSecure();
   
    const { data: enrolledClasses = [], refetch } = useQuery(
      ['enrolledClasses', user?.email],
      async () => {
        const res = await axiosSecure.get(`/enrolledclasses/${user?.email}`);
        console.log(res.data)
        return res.data;
        
      }
    );
   
    
    return (
        <div>
        <h1>Enrolled Classes</h1>
        {enrolledClasses.map((enrolledClass) => (
          <div key={enrolledClass.classId}>
            <h2>{enrolledClass.className}</h2>
            <h2>{enrolledClass.email}</h2>
            <p>Instructor: {enrolledClass.instructorName}</p>
            <p>Price: {enrolledClass.price}</p>
          </div>
        ))}
      </div>
    );
};

export default EnrolledClass;