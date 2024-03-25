// import React from 'react'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

import { authContext } from "../context/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {dispatch} = useContext(authContext)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log(formData)

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if(!res.ok){
        console.log(result)
        throw new Error(result.message)
      }

      dispatch({type: "LOGIN_SUCCESS",
      payload: {
        user: result.data,
        token: result.token,
        role: result.role
      }
    })

    console.log(result, "Login data")

      setLoading(false);
      toast.success(result.message)
      navigate("/");
    } catch (err) {
      console.log(err)
        toast.error(err.message)
        setLoading(false);
    }

  };


  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-5 md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form className="py-4 md:py-0" onSubmit={submitHandler} >
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
            >
              {loading ? <HashLoader size={25} color="#ffffff" /> : "Login"}
            </button>
          </div>
        </form>
        <p className="mt-5 text-textColor text-center">
          Don&apos;t have an account{" "}
          <Link to="/signup" className="text-primaryColor font-medium ">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;