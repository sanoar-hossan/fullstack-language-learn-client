

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: enrolledClasses = [], refetch } = useQuery(
    ['enrolledclass', user?.email],
    async () => {
      const res = await axiosSecure.get(`/enrolledclass/${user?.email}`);
      return res.data;
    }
  );

  console.log(enrolledClasses); 

  return {
    enrolledClasses,
    refetch,
  };
};

export default useClass;
