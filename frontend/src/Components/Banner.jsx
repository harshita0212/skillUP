import React from "react";
import img from '../assets/OBJECTSboys.png'
function Banner() {
  return (
    <>
      <div className="mx-auto md:px-20 px-4 flex flex-col md:flex-row banner-bg">
        <div className="order-2 md:order-1 md:w-1/2 w-full md:mt-32 mt-20">
          <div className="space-y-2">
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
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn bg-pink-500 mt-5 border-none hover:bg-pink-300 duration-300 ">Get Started</button>
        </div>
        <div className="order-1 md:w-1/2 w-full md:h-1/2 h-full md:m-20 banner-img">
          <img src={img} className="h-92 rounded-3xl md:pt-0 pt-16 " alt="" />
        </div>

      </div>

      <div>
        <h2 className="text-5xl text-center font-medium mt-52">
          Why choose skillUp
        </h2>
      </div>

      <div className=" p-10 text-white">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1 bg-[#3C2A75] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Hands-On Learning</h3>
            <p>Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.</p>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-[#3C2A75] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Real-World Skills</h3>
            <p>Equip students with practical skills that go beyond textbooks, preparing them for real-world challenges and opportunities.</p>
          </div>
          <div className="col-span-2 bg-[#3C2A75] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Vibrant Community</h3>
            <p>Join a thriving community of like-minded peers, educators, and experts, fostering collaboration and a supportive learning environment.</p>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-[#3C2A75] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Expert Mentorship</h3>
            <p>Connect with industry leaders and professionals who provide guidance, insights, and mentorship, helping students navigate their career paths.</p>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-[#3C2A75] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Customized Curriculum</h3>
            <p>Schools can integrate our tailored programs into their curriculum, enhancing the educational experience and meeting modern educational standards.</p>
          </div>
          <div className="col-span-2 bg-[#3C2A75] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Holistic Development</h3>
            <p>Focus on the overall growth of students by nurturing creativity, critical thinking, and problem-solving 21st-century skills that set them apart from the competition ensuring a bright future and a competitive edge in any field.</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Banner;
