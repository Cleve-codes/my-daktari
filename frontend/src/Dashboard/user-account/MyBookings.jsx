
import { BASE_URL } from "../../../config";
import DoctorCard from "../../pages/Doctors/DoctorCard";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import useFetchData from "../../Hooks/useFetchData";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loader />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >
            {
              appointments.map(doctor => <DoctorCard doctor={doctor} key={doctor._id} />)
            }
        </div>
      )}

      {
        !loading && !error && appointments.length === 0 && (
          <h1 className="text-center mt-5 leading-7 text-[20px] font-semibold text-primaryColor ">You haven&apos;t booked any appointment yet 🤠!</h1>
        )
      }

    </div>
  );
};

export default MyBookings;
