import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: instructorData, isLoading: isInstructorLoading } = useQuery(
    ["instructor", user?.email],
    async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data;
      }
    }
  );
console.log(instructorData);
  const isInstructor = instructorData?.instructor || false;

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
