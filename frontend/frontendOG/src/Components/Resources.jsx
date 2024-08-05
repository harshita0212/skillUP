import React from 'react';
import Group from '../assets/Group.png';
import Tech from '../assets/Tech.svg';
import CC from '../assets/CC.svg';
import PD from '../assets/PD.svg';
import TextBoxWImg from './TextBoxWImg';
import Bussiness from '../assets/Bussiness.svg';

const Resources = () => {
  return (
    <div className='flex'>
      
      <div className='w-1/3'>
        <img src= {Group} className='w-96 h-96 mt-64 ml-auto object-contain'/>
      </div>

      <div className='ml-auto'>
      <div className='text-5xl font-semibold mt-5 mb-10 ml-72'>
       <h3> Resources </h3>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 text-white ml-auto mr-16">
        <TextBoxWImg 
          title="Technology" 
          content="Stay updated on the latest tech trends, innovations, and advancements in software, AI, cybersecurity, and emerging technologies." 
          image={Tech} 
          bgcolor= "bg-[#F7365B]"
        />
        <TextBoxWImg 
          title="Content Creation" 
          content="Enhance your skills in blogging, vlogging, social media, and more with tips, tools, and best practices for impactful content creation." 
          image={CC} 
          bgcolor= "bg-[#8238F3]"
        />
        <TextBoxWImg 
          title="Bussiness" 
          content="Explore market analysis, financial strategies, and insights into entrepreneurship, management, and global business trends." 
          image={Bussiness} 
          bgcolor= "bg-[#3260DA]"
        />
        <TextBoxWImg 
          title="Personality Development" 
          content="Explore strategies for personal growth, communication, confidence, and achieving your goals." 
          image={PD} 
          bgcolor= "bg-[#1CBF98]"
        />
      </div>
      </div>
    </div>
  )
}

export default Resources