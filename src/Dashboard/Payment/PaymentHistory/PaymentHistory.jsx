import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/payment-history/${user?.email}`)
        .then(res => {
          setPaymentHistory(res.data);
          console.log(res.data);
        })
        .catch(error => {
          console.error('Error retrieving payment history:', error);
        });
    }
  }, [axiosSecure, user]);

  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-5">Payment History</h1>
      <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {paymentHistory.map((payment) => (
        <tr key={payment._id}>
          <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
          <td className="px-6 py-4 whitespace-nowrap">{payment.email}</td>
          <td className="px-6 py-4 whitespace-nowrap">{payment.transactionId}</td>
          <td className="px-6 py-4 whitespace-nowrap">{payment.price}</td>
          <td className="px-6 py-4 whitespace-nowrap">{payment.quantity}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




    </div>
  );
};

export default PaymentHistory;
