import { Link } from "react-router-dom";
// import React from "react";
import greenTick from "../../assets/images/greenTick.png"

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
      <div className="flex items-center justify-center h-full">
      <img className="mx-auto w-15 h-15 my-4" src={greenTick} alt="" />

</div>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-700 font-semibold">Thank You!</h3>
          <p className="text-gray-600 my-5">Thanks for completing your checkout.</p>
          <p className="text-gray-600 my-2">Have a great day!</p>
          <div className="py-10">
            <Link to='/home' className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md">
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;