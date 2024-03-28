import aboutImg from "../assets/images/about.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:2-1/2 xl:w-[700px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h1 className="heading">Proud to be one of the nations best</h1>
            <p className="text_para">
              At Healthy Living Clinic, we are dedicated to promoting holistic
              wellness and empowering individuals to take control of their
              health journey. Our team of experienced healthcare professionals
              is committed to providing personalized care and support to help
              you achieve your wellness goals.
            </p>
            <p className="text_para mt-[30px]">
              Whether you're seeking preventive care, managing chronic
              conditions, or striving for overall well-being, we're here to
              guide you every step of the way. With a focus on evidence-based
              practices and compassionate care, we strive to create a supportive
              and nurturing environment where you feel valued and understood.
            </p>

            <Link to="/services">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
