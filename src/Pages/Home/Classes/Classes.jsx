import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['class'], async () => {
 const res = await axiosSecure.get('/class')
 return res.data;
})
    return (
        <div>
          {classes.length
          
          }
        </div>
    );
};

export default Classes;