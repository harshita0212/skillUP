import React from "react";
import AboutUsMainImg from "./assets/AboutUsMainImg.svg";
import girlMag from "./assets/girlMag.svg";
import girlWriting from "./assets/girlWriting.svg";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-black flex text-white font-Poppins h-180">
        <div className="w-50%">
          <div className="text-5xl text-white font-Poppins font-bold ml-32 pt-56">
            ABOUT US
          </div>
          <div className="text-lg h-10 w-108 text-justify ml-32 pt-5">
            <p>
              skillUp is an ed-tech learning platform to address all your
              weaknesses for becoming industry-ready in this fast-paced world.
              Our learning platform consists of exciting opportunities to learn
              industry skills, develop them, and grow professionally and
              personally. The gamut of learning experiences includes both soft
              skills and hard skills to cover topics that are in and out of your
              syllabus!
            </p>
          </div>
        </div>
        <div className="ml-auto h-144 w-144 mt-32">
          <img src={AboutUsMainImg} alt="aboutus_Img" />
        </div>
      </div>
      
      <div className="h-360 mb-20">
        <div className="flex justify-center items-center ml-52 bg-[#A131DC] text-white mt-20 rounded-2xl t-20 h-52 w-3/4">
          <div className="flex items-center">
            <img
              src={AboutUsMainImg}
              className="h-64 ml-20 mr-10 mb-12"
              alt="sectionImage"
            />
            <div className="mr-32">
              <h3 className="text-xl font-poppins font-semibold mb-2">
                Why Us?
              </h3>
              <p className=" font-poppins">
                SkillUp's mission to revolutionize education with innovative
                technology aligns perfectly with my passion for creating
                impactful learning solutions. My experience with projects like
                SkillUp, where I utilized JavaScript to enhance user interfaces,
                has prepared me to contribute effectively to your team. I am
                eager to bring my technical skills and enthusiasm for education
                to SkillUp, helping to deliver engaging and accessible learning
                experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-20 h-44 justify-center align-items-center">
          <img className="mr-36  z-10" src={girlMag} alt="magnifying-girl" />
          <img className="ml-72 pr-16 mb-3 z-10" src={girlWriting} alt="writing-girl" />
        </div>

        <div className="flex -mt-3 font-poppins justify-center">
          <div className="pt-5 w-108 mr-6 bg-[#A4EBA4] rounded-xl">
            <h3 className="flex justify-center font-semibold text-4xl">
              Our ‎ <p className="text-[#A131DC]"> Vision</p>
            </h3>
            <p className="p-6 text-justify">
              The vision of skillUp is to inculcate self-motivation in all
              students worldwide through its courses and skill development
              sessions. Moreover, making soft skills a part of the curriculum in
              primary education is also a key driver for our motivation. After
              our sessions, every student should feel confident about themselves
              and know how to express their thought processes and emotions in
              front of everyone in the right tone with logical validation.
            </p>
          </div>
          <div className="pt-5 w-108 ml-6 bg-[#FFEFC3] rounded-xl">
            <h3 className="flex justify-center  font-semibold text-4xl">
              Our ‎ <p className="text-[#A131DC]"> Mission</p>
            </h3>
            <p className="p-6 text-justify">
              skillUp targets to include necessary soft skill education into
              students' curriculum at an early age to promote the development of
              students into bright individuals and aspirant leaders. skillUp
              aims to bridge the gap between the students and their quest to
              learn soft skills by connecting them to industry experts. It is
              achieved by conducting live events, webinars, and seminars in
              school.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
