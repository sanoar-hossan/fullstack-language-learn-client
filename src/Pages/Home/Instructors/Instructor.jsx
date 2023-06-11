import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Instructor = () => {
    const [axiosSecure] = useAxiosSecure();
   

    const { data: myclasses = [], refetch } = useQuery(['myclasses'], async () => {
        const res = await axiosSecure.get('/myclasses')
        return res.data;
    })

    return (
        <div>
            {myclasses.length}
        </div>
    );
};

export default Instructor;