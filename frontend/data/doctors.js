import doctorImg01 from "../src/assets/images/doctor-img01.png";
import doctorImg02 from "../src/assets/images/doctor-img02.png";
import doctorImg03 from "../src/assets/images/doctor-img03.png";

export const doctors = [
  {
    _id: "01",
    name: "Dr. Goggins",
    speciality: "Surgeon",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg01,
    totalPatients: 500,
    date: "23 June, 2008",
    education: "PHD in Surgeon",
    hospital: "Kangaroo Hospital.",
    short:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias!",
  },
  {
    _id: "02",
    name: "Dr. Declan Rice",
    speciality: "Neurologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg02,
    date: "23 June, 2008",
    totalPatients: 1500,
    hospital: "Flex Hospital",
    education: "PHD in Neurologist",
    short:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias!",
  },
  {
    _id: "03",
    name: "Dr. Sven Hawking",
    speciality: "Gynaecology",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg03,
    totalPatients: 1000,
    date: "23 June, 2008",
    education: "PHD in Gynaecology",
    hospital: "Flex Hospital",
    short:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias!",
  },
];