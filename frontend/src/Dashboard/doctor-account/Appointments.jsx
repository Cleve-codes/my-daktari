import React from "react";
import { formateDate } from "../../utils/formatDate";

const Appointments = ({ appointments }) => {



  return (
    <table className="w-full text-left text-sm text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
        <tr>

          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Gender
          </th>
          <th scope="col" className="px-6 py-3">
            Payment
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Booked On
          </th>
          <th scope="col" className="px-6 py-3">
           Make
          </th>
          <th scope="col" className="px-6 py-3">
           Status
          </th>
        </tr>
      </thead>

      <tbody>
        {appointments?.map((item) => (
          <tr key={item._id}>
            <th
              scope="row"
              className="flex-items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <img src={item.user.photo} className="w-10 h-10 rounded-full" />
              <div className="pl-3">
                <div className="text-base font-semibold">{item.user.name}</div>
                <div className="text-normal text-gray-500">
                  {item.user.email}
                </div>
              </div>
            </th>

            <td className="px-6 py-4 ">{item.user.gender} </td>
            <td className="px-6 py-4 ">
              {item.isPaid && (
                <div className="flex items-center">
                  <div
                    className="h-2.5 w-2.5
              rounded-full bg-green-500 mr-2"
                  ></div>
                  Paid
                </div>
              )}

              {!item.isPaid && (
                <div className="flex items-center">
                  <div
                    className="h-2.5 w-2.5
              rounded-full bg-red-500 mr-2"
                  ></div>
                  Unpaid
                </div>
              )}




            </td>

            <td className="px-6 py-4 ">{item.ticketPrice} </td>
            <td className="px-6 py-4 ">{formateDate(item.createdAt)} </td>
            <td className="px-6 py-4 "><button className=" bg-primaryColor w-[70px] h-[20px]  text-white font-[600]  flex items-center
      justify-center rounded-[100px] hover:bg-blue-800">Approve
      </button></td>
            <td className="px-6 py-4 ">{item.status} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments;