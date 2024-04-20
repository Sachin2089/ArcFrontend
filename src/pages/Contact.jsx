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
    <div className=" mb-40  bg-gradient-to-b from-[#32044e] via-[#000005] to-[#030005] min-h-screen xl:px-[220px] py-32 lg:px-[150px] md:px-[80px] sm:px-[10px] bg-[#0B0B0F] xl:py-40 lg:py-32  flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-[32px] mb-4 sm:text-[42px] md:text-[40px] lg:flex lg:items-center lg:justify-center lg:flex-col lg:text-[54px] xl:text-[72px] Grotesk-Black leading-tight md:leading-[72px] bg-gradient-to-r from-white to-neutral-400 text-transparent bg-clip-text">
          Get in Touch
        </h1>
        <p className="text-xl lg:text-2xl Grotesk-Normal text-center text-neutral-400 lg:mb-24 mb-12 px-8 lg:px-96">
          Contact us today to share your thoughts, questions, or ideas.{" "}
          <br></br>We're here to help and excited to hear from you!
        </p>
      </div>
      <div class="w-full lg:h-[450px] h-[320px] lg:w-[80%] px-4 gap-4 flex flex-col lg:flex-row items-start justify-between">
        <div class="p-4 h-full w-full lg:w-[60%] border border-[#333333] bg-[#1c1d22] rounded-[10px] mb-4 lg:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.264375512336!2d72.81801977405813!3d18.963928155483554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1486c8b1c1%3A0xb5e5277355a0e125!2ssiddhesh-deep%20co-op%20hsg!5e0!3m2!1sen!2sin!4v1689073368948!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="px-2 flex flex-col h-auto lg:h-[600px] items-center justify-start w-full lg:w-[40%] ">
          <div class="p-4 h-[340px] w-full border border-[#333333] bg-[#1c1d22] rounded-[10px] mb-6">
            <h1 class="ml-4 mt-4 Grotesk-Normal text-2xl text-white flex items-center justify-start">
              Address
            </h1>
            <p class="text-neutral-400 Grotesk-normal my-2 text-base ml-4 mr-4">
              Arc Educators, Mumbai.
              <br></br>
              75/D, Shree Siddhesh Deep C.H.S,
              <br /> P.B Marg, Grant Road(East) <br />
              Mumbai,Maharashtra 400008
            </p>
            <h1 class="ml-4 mt-4 Grotesk-Normal text-2xl text-white flex items-center justify-start">
              Socials
            </h1>
            <p class="text-neutral-400 Grotesk-normal my-2 text-base ml-4">
              Connect with us on social media for instant updates.
            </p>
            <div class="h-12 w-full text-3xl flex items-center justify-start ml-4 ">
              <Link to="mailto:example@example.com">
                <IoMailOutline className="mr-4" />
              </Link>
              <Link to="https://www.instagram.com/arceducators?igsh=NGY2ZTZlc3dxeHcy" target="_blank">
                <FaInstagram className="mr-4" />
              </Link>
              <Link to="https://www.youtube.com/@arceducators1154" target="_blank">
                <FaYoutube className="mr-4" />
              </Link>
              <Link to="https://www.facebook.com/p/Arc-Educators-100063624203263/" target="_blank">
                <FaFacebook className="mr-4" />
              </Link>
              <Link to="https://www.linkedin.com/company/arc-educators/" target="_blank">
                <FaLinkedin className="mr-4" />
              </Link>
              <Link to="https://wa.me/919821505273" target="_blank">
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