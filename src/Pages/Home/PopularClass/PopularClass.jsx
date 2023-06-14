import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PopularClass = () => {

    const [axiosSecure] = useAxiosSecure();
   

    const { data: popularclasses = [], refetch } = useQuery(['popularclasses'], async () => {
        const res = await axiosSecure.get('/popularclasses')
        return res.data;
    })
    return (
        <div>
            <h1 className="text-4xl font-bold">Our Popular Classes</h1>
        <div className="grid grid-cols-2 gap-4">
          {popularclasses.map((popularClass) => (
            <div
              key={popularClass._id}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={popularClass.image}
                alt={popularClass.name}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">{popularClass.name}</h3>
              <p className="text-gray-600">{popularClass.instructorName}</p>
              <p className="text-gray-600">{popularClass.price}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </div>
    );
};

export default PopularClass;