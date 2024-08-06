import React from 'react';
import AboutUsMainImg from './assets/AboutUsMainImg.svg';

const AboutUsPage = () => {
  return (
    <> 
        <div className='bg-black flex text-white font-Poppins h-180'>
            <div className='w-50%'>
                <div className="text-5xl text-white font-Poppins font-bold ml-32 pt-56">ABOUT US</div>
                <div className='text-lg h-10 w-108 text-justify ml-32 pt-5'>
                    <p>skillUp is an ed-tech learning platform to address all your weaknesses for becoming industry-ready in this fast-paced world. Our learning platform consists of exciting opportunities to learn industry skills, develop them, and grow professionally and personally. The gamut of learning experiences includes both soft skills and hard skills to cover topics that are in and out of your syllabus!
                    </p>
                </div>
            </div>
            <div className='ml-auto h-144 w-144 mt-32' >
                <img src={AboutUsMainImg} alt="aboutus_Img" />
            </div>
        </div>
        <div className='h-32'>

        </div>
    </>
  )
}

export default AboutUsPage