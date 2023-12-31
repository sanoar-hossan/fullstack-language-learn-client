

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClasses = [], refetch } = useQuery(
    ['selectedclass', user?.email],
    async () => {
      const res = await axiosSecure.get(`/selectedclass/${user?.email}`);
      console.log(res);
      
      return res.data;
     
    }
  );

  console.log(selectedClasses); 

  return {
    selectedClasses,
    refetch,
  };
};

export default useClass;
