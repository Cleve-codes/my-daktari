import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
// import { doctors } from "../../assets/data/doctors";
import Testimonials from "../../components/Testimonial/Testimonial";

import { BASE_URL } from "../../../config";
import useFetchData from "../../Hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const Doctors = () => {
  const [query, setQuery] = useState("");

  const [debouncequery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
    console.log("Handle Search");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctor?query=${debouncequery}`);

  // console.log(doctors)

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
              cursor-pointer placeholder:text-textColor"
              placeholder="search Doctor by name or specification  "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[700px] mx-auto">
            <h2 className="heading lg-text-center lg:ml-[60px]">
              what our Patients Says
            </h2>
            <p className="text__para text-center">
              world-class care for everyone. Our health System offers unmatched,
              experts health care.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Doctors;
