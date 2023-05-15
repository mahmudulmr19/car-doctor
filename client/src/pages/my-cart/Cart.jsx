import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { Container } from "@/components/Shared";
import checkout from "@/assets/images/checkout/checkout.png";
import { useTitle } from "@/hooks";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Cart Details");

  const handleDelete = (itemId) => {
    const updatedData = data.filter((item) => item._id !== itemId);
    const deleteData = async () => {};
  };

  useEffect(() => {
    fetch(
      `https://api-car-doctor.vercel.app/api/v1/orders?email=${currentUser?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  return (
    <Container className="my-10">
      <div className="relative">
        <img
          src={checkout}
          alt="checkout"
          className="h-full w-full object-cover"
        />
        <div className="bg-gradient-to-r from-gray-900 to-transparent absolute top-0 h-full w-full rounded-lg">
          <div className="flex flex-col justify-center h-full pl-14">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              Cart Details
            </h1>
            <p className="text-orange-500">Home - Product Details</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        {loading ? (
          "loading"
        ) : data.length === 0 ? (
          <h1>No Cart yet</h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Image</th>
                  <th className="py-3 px-6 text-left">Service</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </td>
                    <td className="py-3 px-6">{item.service}</td>
                    <td className="py-3 px-6">${item.price}</td>
                    <td className="py-3 px-6">{item.date}</td>
                    <td className="py-3 px-6">
                      <span className="px-2 py-1 text-sm font-semibold rounded-full bg-red-500 text-white">
                        Pending
                      </span>

                      <button
                        className="ml-5"
                        onClick={() => handleDelete(item._id)}
                      >
                        <RiDeleteBinLine className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
