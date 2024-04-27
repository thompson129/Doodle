import React from "react"
import { FaFacebook } from "react-icons/fa"
import logImg from "../assets/images/logo-black.png"

export const Footer = () => {
  const currentYear=new Date().getFullYear();
  return (
    <>
      <section className='app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-primary mt-16 relative z-10'>
        <div className='left w-[60%] md:w-full p-10'>
          <h1 className='text-4xl font-semibold leading-tight'>
            GET IN TOUCH
          </h1>
          <span className='text-[14px]'>Office: 2 Moonmuang Road, Lane 8, Muang, Chaing Mai 50100</span><br/>
          <span className='text-[14px]'>Email: office@doodle.tech</span><br/>
          <span className='text-[14px]'>Phone: +66(0)66-2835-1998</span><br/>
          <span className='text-[14px]'>Follow us: <br/><a href="https://www.facebook.com/ciiemyanmar" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="white"/>
          </a></span>
        </div>
        <div className='right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#FF7C54] md:bg-transparent md:p-8'>
          </div>
      </section>
      <footer className='bg-[#F3F4F8] py-10 pt-32 -mt-24'>
        <div className='container grid grid-cols-3 gap-5 md:grid-cols-2'>
          <p className="copyright">
          <img src={logImg} alt="logImg" className="h-5"/>© {currentYear} Doodle Co., All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
