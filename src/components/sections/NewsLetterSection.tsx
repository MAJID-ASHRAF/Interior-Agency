import React from "react";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

function NewsLetterSection() {
  return (
    <div className="bg-[#DFD7F9] p-[4rem] rounded-[1.25rem] rounded-tl-extraLarge relative lg:-mt-[10rem]">
      <div className="z-20">
        <p className="text-lightGray text-[1.5rem] font-[600] text-center mb-[2.63rem]">
          Leave your contact {" "}
          <br className="hidden md:block" /> We will Reach you out
        </p>
        
<div className="flex items-center justify-center ">

  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Contact
        </label>
        <input
          type="tel"
          name="Contact"
          id="contact"
          placeholder="Enter your phone number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

        {/* <div className="flex justify-between flex-col md:flex-row items-center gap-8">
          <div className="relative flex-grow z-[10]">
            <Input
              type="text"
              placeholder="First Name"
              className="bg-white h-[3.5rem]"
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="bg-white h-[3.5rem] "
            />
            
          </div>

          <MainButton
            text="Subscribe"
            classes="w-[9.25rem] h-[3.25rem] z-[10]"
            isGradient
          />
        </div> */}
      </div>
      <div className="absolute bottom-0  left-4 z-0 opacity-25">
        <img
          src="/images/round-ring-left.png"
          alt="round ring left"
          className="w-[200px]"
        />
      </div>

      <div className="absolute -top-4 -right-4">
        <img src="/images/send-shape.png" alt="send icon" />
      </div>

      <div className="absolute top-0 right-0 opacity-25">
        <img
          src="/images/round-ring-right.png"
          alt="round ring right"
          className="w-[200px]"
        />
      </div>

      <div className="absolute -bottom-16 right-[-6rem] hidden md:block">
        <img src="/images/plus-group.png" alt="send icon" />
      </div>
    </div>
  );
}

export default NewsLetterSection;
