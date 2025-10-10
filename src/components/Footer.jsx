import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center flex-col bg-black text-center py-16">
        <div className="w-[1200px] mx-auto  text-[#adadad] font-medium text-[15px] max-md:flex max-md:flex-wrap max-md:w-full">
          <p className="text-start mb-10">
            Questions? Call <span>+9195-6707-XXXX</span>
          </p>
          <div className="flex justify-center gap-4 w-full max-md:flex-wrap">
            <div className="w-3/4 text-start flex flex-col gap-2 underline">
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
            </div>
            <div className="w-3/4 text-start flex flex-col gap-2 underline">
              <p>Help Centre</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
              <p>Legal Notices</p>
            </div>
            <div className="w-3/4 text-start flex flex-col gap-2 underline">
              <p>Account</p>
              <p>Ways to Watch</p>
              <p>Corporate Information</p>
              <p>Only on Netflix</p>
            </div>
            <div className="w-3/4 text-start flex flex-col gap-2 underline">
              <p>Media Centre</p>
              <p>Terms of Use</p>
              <p>Contact Us</p>
            </div>
          </div>
          <p className="text-start my-7">Netflix India</p>
          <p className="text-start text-[12px] text-[#999999]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-500 underline font-normal">
              Learn more.
            </span>
          </p>
        </div>
      </div>
  )
}

export default Footer