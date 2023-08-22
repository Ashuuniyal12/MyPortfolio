"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeadig from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast } from "react-hot-toast/headless";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact", threshold: 0.5 });
  
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeadig>Contact me</SectionHeadig>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline font-medium"
          href="mailto:ashutoshuniyal012@gmail.com "
        >
          ashutoshuniyal012@gmail.com{" "}
        </a>
        or through this form
      </p>
      <form  className="mt-10 flex flex-col  dark:text-black"
      action ={async (formData)=>{
        const {data, error }=await sendEmail(formData);
        if(error){
           toast.error(error);
            return 
        }
        toast.success("Message sent successfully");
      }}
      >
        <input
          className="h-14 borderBlack rounded-lg p-4 dark:bg-white dark:opacity-40 dark:focus:bg-opacity-100 transition-all dark:outline-none "
          type="emial"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          required
          name="message"
          maxLength={5000}
          className="my-4 p-4 h-52 borderBlack dark:bg-white dark:opacity-40 dark:focus:bg-opacity-100 transition-all dark:outline-none "
          placeholder="Your message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
