
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";



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
    
    

    return (
      
   <div>{selectedClasses.length}</div>
        
    );
};

export default MySelelectedClass;