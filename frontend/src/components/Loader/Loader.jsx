// import React from 'react'
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full" >
      <HashLoader color="#0067FF" size={50} />
    </div>
  )
}

export default Loader