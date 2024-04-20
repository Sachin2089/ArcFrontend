import React from "react";
import { useState } from "react";
import "../fonts/stylesheet.css";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // contactNo: "",
    workPlace: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, sending data to backend
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      // contactNo: "",
      workPlace: "",
      message: "",
    });
  };
  return (
    <div className="flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="Grotesk-Black text-[54px] text-white">Get In Touch</h1>
        <p className="text-2xl Grotesk-Normal text-center text-neutral-400 mb-24 ">
          Contact us today to share your thoughts, questions, or ideas.{" "}
          <br></br>We're here to help and excited to hear from you!
        </p>
      </div>
      <div className="w-[80%] gap-4 flex items-start justify-between">
        <div className="p-4 px-8 h-full w-[60%] border border-[#333333] bg-[#1c1d22] rounded-[10px]">
          <form
            onSubmit={handleSubmit}
            className="z-20 mt-6 text-xl Grotesk-Normal"
          >
            <label className="text-neutral-400">
              Your name:
              <br />
              <input
                type="text"
                name="name"
                value={formData.name}
                className="h-[45px] w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4"
                placeholder="Aman Shrivastav"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="text-neutral-400">
              Your email:
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                className="h-[45px] w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4 "
                placeholder="amanshrivastavabc@gmail.com"
                onChange={handleChange}
              />
            </label>
            <br />
            {/* <label>
          Contact No:
          <br/>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            className="h-[45px] w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4"
            placeholder=""
            onChange={handleChange}
          />
        </label>
        <br /> */}
            <label className="text-neutral-400">
              You work at:
              <br />
              <input
                type="text"
                name="workPlace"
                value={formData.workPlace}
                className="h-[45px] w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4"
                placeholder="Studio XYZ"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="text-neutral-400">
              Your Message:
              <br />
              <textarea
                name="message"
                value={formData.message}
                className=" w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-3 pt-4 "
                placeholder="Your Message"
                rows={4}
                onChange={handleChange}
              />
            </label>
            <br />
            <button
              className="Grotesk-Black text-black  transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md text-base px-4 lg:px-5 py-2 lg:py-2 mr-2 mb-4 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="px-2  flex flex-col h-[600px] items-center justify-start  w-[40%] ">
          <div className="p-4 h-[300px] w-full border border-[#333333] bg-[#1c1d22] rounded-[10px] mb-6">
            <h1 className="ml-4 mt-4 Grotesk-Normal text-2xl text-white flex items-center justify-start">
              <FaRegNewspaper className="text-white mr-3" />
              Subscribe
            </h1>
            <p className="text-neutral-400 Grotesk-normal my-2 text-base ml-4 mr-4">
              Subscribe us for exclusive updates, curated content, and insider
              access via email. Join our community to stay informed, inspired,
              and connected.
            </p>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="h-[45px] mr-4 ml-4 w-[90%] rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4"
              placeholder="Johndoe123@xyz.com"
              onChange={handleChange}
            />
            <button
              className="Grotesk-Black text-black  transition duration-200 ease-in-out ml-4 border-[#10162f]  hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md text-base px-4 lg:px-5 py-2 lg:py-2 mr-2 mb-4 focus:outline-none"
              type="submit"
            >
              Subscribe
            </button>
          </div>
          <div className="p-4 h-[180px] w-full border border-[#333333] bg-[#1c1d22] rounded-[10px]">
            <h1 className="ml-4 mt-4 Grotesk-Normal text-2xl text-white flex items-center justify-start">
              <MdOutlinePeopleAlt className="text-white mr-3" />
              Socials
            </h1>
            <p className="text-neutral-400 Grotesk-normal my-2 text-base ml-4">
              Connect with us on social media for instant updates.
            </p>
            <div className="h-12 w-full text-3xl flex items-center justify-start ml-4 ">
              <Link>
                <IoMailOutline className="mr-4" />
              </Link>
              <Link>
                <FaInstagram className="mr-4" />
              </Link>
              <Link>
                <FaYoutube className="mr-4" />
              </Link>
              <Link>
                <FaFacebook className="mr-4" />
              </Link>
              <Link>
                <FaLinkedin className="mr-4" />
              </Link>
              <Link>
                <FaWhatsapp className="mr-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
