import React from "react";
import img from '../assets/OBJECTSboys.png'
import img2 from '../assets/Frame1.svg'
import img3 from '../assets/Frame7.png'
import img4 from '../assets/Frame4.png';
import img5 from '../assets/img5.svg';
function Banner() {
  return (
    <>
      <div className="mx-auto md:px-20 px-4 flex flex-col md:flex-row banner-bg">
        <div className="order-2 md:order-1 md:w-1/2 w-full md:mt-32 mt-20  ">
          <div className="space-y-2 ">
            <h1 className="text-6xl google-font">
              HERE AT skillUp
            </h1>
            <h2 className="text-4xl google-font tagline">
              Learn, Grow and Develop.
            </h2>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow " placeholder="Email" />
            </label>
          </div>
          <button className="btn bg-pink-500 mt-5 border-none hover:bg-pink-300 duration-300 ">Get Started</button>
        </div>
        <div className="order-1 md:w-1/2 w-4/5 md:h-1/2 h-full md:m-20 banner-img">
          <img src={img} className="h-92 rounded-3xl md:pt-0 pt-16 " alt="" />
        </div>
      </div>

      <div className="mx-auto md:px-20 px-4 ">
        <h2 className="text-5xl font-medium md:mt-52 mt-64 text-center">
          Why choose skillUp
        </h2>

        <div className=" p-4 sm:p-10 text-white grid grid-rows-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gradient w-80 h-108 flex-wrap justify-center rounded-lg">
              <img src={img2} className="h-44 mt-4 ml-5" alt="" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">Hands-On Learning</h3>
                <p className="text-justify pr-5">Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.</p>
              </div>
            </div>

            <div className="gap-6 flex-wrap w-162 -ml-20 items-center justify-center">
              <div className="bg-gradient flex justify-center align-items-center p-6 rounded-lg">
                <div className="">
                  <h3 className="text-xl font-semibold mb-4 ">Real-World Skills</h3>
                  <p>Equip students with practical skills that go beyond textbooks, preparing them for real-world challenges and opportunities.</p>
                </div>
                <div className="">
                  <img src={img3} className=" " alt="" />
                </div>
              </div>
              <div className="bg-gradient mt-2 flex justify-center items-center p-6 rounded-lg">
                <div className="w-1/4 pb-10 -mt-14">
                  <img src={img5} className="" alt="" />
                </div>
                <div className="w-3/4">
                <h3 className="text-xl  font-semibold text-right mb-4">Vibrant Community</h3>
                <p className="text-right">Join a thriving community of like-minded peers, educators, and experts, fostering collaboration and a supportive learning environment.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient ml-auto w-80 h-108 flex-wrap justify-center rounded-lg">
              <img src={img4} className="h-56 mt-4 ml-10" alt="" />
              <div className="p-4 -mt-5">
                <h3 className="text-xl font-bold mb-4">Expert Mentorship</h3>
                <p className="text-justify pr-5">Connect with industry leaders and professionals who provide guidance, insights, and mentorship, helping students navigate their career paths.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 sm:pt-5 text-white flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
              <div className="bg-gradient p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Customized Curriculum</h3>
                <p>Schools can integrate our tailored programs into their curriculum, enhancing the educational experience and meeting modern educational standards.</p>
              </div>
              <div className="bg-gradient p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Holistic Development</h3>
                <p>Focus on the overall growth of students by nurturing creativity, critical thinking, and problem-solving 21st-century skills that set them apart from the competition ensuring a bright future and a competitive edge in any field.</p>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default Banner;
