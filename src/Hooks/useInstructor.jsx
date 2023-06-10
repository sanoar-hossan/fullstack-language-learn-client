import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: instructorData, isLoading: isInstructorLoading } = useQuery(
    ["instructor", user?.email],
    async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data;
    }
  );

  const isInstructor = instructorData?.isInstructor || false;

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
