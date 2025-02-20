// const DataBlock = ({heading,bgColor,paraContent}) => {
//   return(
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <h2
//         className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor"
//       >
//         {heading}
//       </h2>
//       <span className={`w-[100px] h-2 ${bgColor} rounded-full block mt-[-14px]`}></span>
//       <p className="text__para">{paraContent}</p>
//     </div>
//   )
// };

import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import PropTypes from 'prop-types';

import {featureContentData} from '../constants/constants';
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from '../assets/images/feature-img.png';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import faqImg from '../assets/images/faq-img.png';

import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorsList from "../components/Doctors/DoctorsList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const CardComponent = ({ icon, title, description, link }) => {
  return (
    <div className="py-[30px] px-5">
      <div className="flex items-center justify-center">
        <img src={icon} alt={title} />
      </div>

      <div className="mt-[30px]">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
          {title}
        </h2>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
          {description}
        </p>

        <Link
          to={link}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Home = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    },1000);
    return () => clearInterval(interval);
  },[])

  return (
    // hero section
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text__para">
                  Our team of experts will guide you through the process and
                  provide personalized advice to ensure your best possible
                  outcome.
                </p>

                <button className="btn">Request An Appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfactione</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div className="">
                <img
                  src={heroImg01}
                  alt="heroImg01"
                  className="w-full mb-[30px]"
                />
              </div>

              <div className="mt-[30px]">
                <img
                  src={heroImg02}
                  alt="heroImg02"
                  className="w-full mb-[30px]"
                />
                <img src={heroImg03} alt="heroImg03" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World class care for everyone. our health systems offers unmatched
              expert health care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img
                  src={icon01}
                  alt="icon01" 
                />
              </div>

              <div className='mt-[30px]'>
                <h2
                  className='text-[26px] leading-9 text-headingColor font-[700] text-center'
                >
                  Find a Doctor
                </h2>
                <p
                  className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'
                >
                  World class care for everyone. our health systems offers unmatched expert health care
                </p>

                <Link
                  to={`/doctors`}
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight
                    className='group-hover:text-white w-6 h-5' 
                  />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img
                  src={icon02}
                  alt="icon02" 
                />
              </div>

              <div className='mt-[30px]'>
                <h2
                  className='text-[26px] leading-9 text-headingColor font-[700] text-center'
                >
                  Find our Location
                </h2>
                <p
                  className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'
                >
                  World class care for everyone. our health systems offers unmatched expert health care
                </p>

                <Link
                  to={`/doctors`}
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight
                    className='group-hover:text-white w-6 h-5' 
                  />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img
                  src={icon03}
                  alt="icon03" 
                />
              </div>

              <div className='mt-[30px]'>
                <h2
                  className='text-[26px] leading-9 text-headingColor font-[700] text-center'
                >
                  Book an Appointment
                </h2>
                <p
                  className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'
                >
                  World class care for everyone. our health systems offers unmatched expert health care
                </p>

                <Link
                  to={`/doctors`}
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight
                    className='group-hover:text-white w-6 h-5' 
                  />
                </Link>
              </div>
            </div> */}

            <CardComponent
              icon={icon01}
              title="Find a Doctor"
              description="World class care for everyone. Our health systems offer unmatched expert health care."
              link="/doctors"
            />

            <CardComponent
              icon={icon02}
              title="Find our Location"
              description="Explore our various locations for convenient access to our world-class healthcare services."
              link="/location"
            />

            <CardComponent
              icon={icon03}
              title="Book an Appointment"
              description="Effortlessly schedule appointments with our expert healthcare professionals for personalized care."
              link="/appointment"
            />
          </div>
        </div>
      </section>

      {/* about section */}
      <About />

      {/* services section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Our medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health Systems offers unmatched, expert health care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* Feature section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">

            {/* Feature content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                {featureContentData.map((each) => (
                  <li className="text__para" key={each.id}>
                    {each.content}
                  </li>
                ))}
              </ul>
              <Link
                to="/home"
              >
                  <button
                    type="button"
                    className="btn"
                  >
                    Learn More
                  </button>
              </Link>
            </div>

            {/* feature img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img
                src={featureImg}
                alt="featureImg" 
                className="w-3/4"
              />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      {new Date().toLocaleString('en-US', { weekday: 'long' })},{' '}
                      {new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      {currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]" 
                  >
                    <img
                      src={videoIcon}
                      alt="videoIcon"
                      className="cursor-pointer" 
                    />
                  </span>
                </div>

                <div className=" cursor-pointer rounded-full w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img
                    src={avatarIcon}
                    alt="avatarIcon" 
                  />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Steave Rogers</h4>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our great doctors */}
      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health Systems offers unmatched, expert health care.
            </p>
          </div>
        </div>
        <DoctorsList />
      </section>

      {/* faq section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img
                src={faqImg}
                alt="faqImg" 
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most Questions by our beloved patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients Say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health Systems offers unmatched, expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>

    </>
  );
};

export default Home;