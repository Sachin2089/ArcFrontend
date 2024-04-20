import React from "react";
import { useState, useEffect } from "react";
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
import axios from "axios";
import { toast } from "react-hot-toast";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workPlace: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const baseUrlemail =
    import.meta.env.VITE_REACT_APP_BASE_URL + "/contact-message";
  const handleSubmit = async (e) => {
    try {
      const contactToast = toast.loading("Loading...");
      await axios.post(baseUrlemail, formData);
      console.log(formData);
      toast.dismiss(contactToast);
      toast.success("Received");
      console.log("Email sent successfully");
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        workPlace: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const [subsFormData, setSubsFormData] = useState({ email: "" });
  const notify = () => {
    // Calling toast method by passing string
    toast.success("Subscribed", {
      className: "toast-success",
    });
  };
  const notifynew = () => {
    // Calling toast method by passing string
    toast("Error", {});
  };
  const handleSubsChange = (e) => {
    setSubsFormData({ ...subsFormData, [e.target.name]: e.target.value });
  };
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL + "/subscribe";
  const handleSubsSubmit = async (e) => {
    e.preventDefault();

    // Send Axios request to save email in the backend
    try {
      const subscriptionToast = toast.loading("Subscribing....");
      await axios.post(baseUrl, subsFormData);
      console.log("Email saved in backend successfully");
      // Reset form field
      toast.dismiss(subscriptionToast);
      toast.success("Subscription successful!");
      setSubsFormData({ email: "" });
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.");

      console.error("Error saving email in backend:", error);
    }
  };

  return (
    <div className=" bg-gradient-to-b from-[#32044e] via-[#000005] to-[#030005] min-h-screen xl:px-[220px] py-32 lg:px-[150px] md:px-[80px] sm:px-[10px] bg-[#0B0B0F] xl:py-40 lg:py-32  flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-[32px] mb-4 sm:text-[42px] md:text-[40px] lg:flex lg:items-center lg:justify-center lg:flex-col lg:text-[54px] xl:text-[72px] Grotesk-Black leading-tight md:leading-[72px] bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text">
          Get in Touch
        </h1>
        <p className="text-xl lg:text-2xl Grotesk-Normal text-center text-neutral-400 mb-24 px-8 lg:px-96">
          Contact us today to share your thoughts, questions, or ideas.{" "}
          <br></br>We're here to help and excited to hear from you!
        </p>
      </div>
      <div class="w-full lg:w-[80%] px-4 gap-4 flex flex-col lg:flex-row items-start justify-between">
        <div class="p-4 px-8 h-full w-full lg:w-[60%] border border-[#333333] bg-[#1c1d22] rounded-[10px] mb-4 lg:mb-0">
          <form
            onSubmit={handleSubmit}
            class="z-20 mt-6 text-xl Grotesk-Normal"
          >
            <label class="text-neutral-400">
              Your name:
              <br />
              <input
                type="text"
                name="name"
                value={formData.name}
                class="h-[45px] w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4"
                placeholder="John Doe"
                onChange={handleChange}
              />
            </label>
            <br />
            <label class="text-neutral-400">
              Your email:
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                class="h-[45px] w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4 "
                placeholder="johndoeabc@gmail.com"
                onChange={handleChange}
              />
            </label>
            <br />
            <label class="text-neutral-400">
              You work at:
              <br />
              <input
                type="text"
                name="workPlace"
                value={formData.workPlace}
                class="h-[45px] w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4"
                placeholder="Studio XYZ"
                onChange={handleChange}
              />
            </label>
            <br />
            <label class="text-neutral-400">
              Your Message:
              <br />
              <textarea
                name="message"
                value={formData.message}
                class="w-full rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-3 pt-4 "
                placeholder="Your Message"
                rows={4}
                onChange={handleChange}
              ></textarea>
            </label>
            <br />
            <button
              class="Grotesk-Black text-black  transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md text-base px-4 lg:px-5 py-2 lg:py-2 mr-2 mb-4 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="px-2 flex flex-col h-auto lg:h-[600px] items-center justify-start w-full lg:w-[40%] ">
          <div class="p-4 h-[300px] w-full border border-[#333333] bg-[#1c1d22] rounded-[10px] mb-6">
            <h1 class="ml-4 mt-4 Grotesk-Normal text-2xl text-white flex items-center justify-start">
              Subscribe
            </h1>
            <p class="text-neutral-400 Grotesk-normal my-2 text-base ml-4 mr-4">
              Subscribe us for exclusive updates, curated content, and insider
              access via email. Join our community to stay informed, inspired,
              and connected.
            </p>
            <form onSubmit={handleSubsSubmit}>
              <input
                type="text"
                name="email"
                value={subsFormData.email}
                onChange={handleSubsChange}
                className="h-[45px] mr-4 ml-4 w-[90%] rounded-[8px] my-2 mb-4 bg-neutral-700 focus:outline-none placeholder-neutral-500 pl-4"
                placeholder="Johndoe123@xyz.com"
              />
              <button
                className="Grotesk-Black text-black transition duration-200 ease-in-out ml-4 border-[#10162f] hover:text-black bg-yellow-400 hover:bg-yellow-500 rounded-md text-base px-4 lg:px-5 py-2 lg:py-2 mr-2 mb-4 focus:outline-none"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div class="p-4 h-[180px] w-full border border-[#333333] bg-[#1c1d22] rounded-[10px]">
            <h1 class="ml-4 mt-4 Grotesk-Normal text-2xl text-white flex items-center justify-start">
              Socials
            </h1>
            <p class="text-neutral-400 Grotesk-normal my-2 text-base ml-4">
              Connect with us on social media for instant updates.
            </p>
            <div class="h-12 w-full text-3xl flex items-center justify-start ml-4 ">
              <Link to="mailto:arceducators@gmail.com" target="_blank">
                <IoMailOutline className="mr-4" />
              </Link>
              <Link to="https://www.instagram.com/arceducators?igsh=dW55N2drbnJieWN0"  target="_blank">
                <FaInstagram className="mr-4" />
              </Link>
              <Link to="https://www.youtube.com/@arceducators1154"  target="_blank">
                <FaYoutube className="mr-4" />
              </Link>
              <Link to="https://www.facebook.com/p/Arc-Educators-100063624203263/"  target="_blank">
                <FaFacebook className="mr-4" />
              </Link>
              <Link to="https://www.linkedin.com/company/arc-educators/"  target="_blank">
                <FaLinkedin className="mr-4" />
              </Link>
              <Link to="https://wa.me/919821505273"  target="_blank">
                <FaWhatsapp className="mr-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
