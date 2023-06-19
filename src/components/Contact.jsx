import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {setDoc, collection, db, doc} from "../firebase"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const colRef = doc(collection(db,'mail'));
    await setDoc(colRef, {
      name: form.firstName + '' + form.secondName,
      to_name: "Victor Monderu",
      from_email: form.email,
      number: form.number,
      to_email: "victormonderu@gmail.com",
      message: form.message,
    }).then(()=>{
        console.log("Message Sent")
        setLoading(false)
    })
    .catch((error)=>{
      console.log(error.message)
      setLoading(false)
    });
    
    // emailjs.send(
    //     'service_dymetdj',
    //    'template_t0rz8fo',
    //     {
    //       from_name: form.name,
    //       to_name: "Victor Monderu",
    //       from_email: form.email,
    //       to_email: "victormonderu@gmail.com",
    //       message: form.message,
    //     },
    //     '2uTdmr0OS2UmZ0ZmU'
    
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("something went wrong. Please try again.");
    //     }
    //   );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row justify-center flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <div className="grid grid-cols-1 gap-2.5 w-full lg:grid-cols-2">
            <input
              type='text'
              name='name'
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <input
              type='text'
              name='name'
              value={form.secondName}
              onChange={handleChange}
              placeholder="Second Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </div>
          
           
             
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <div className="grid grid-cols-1 gap-2.5 w-full lg:grid-cols-2">
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
             <input
              type='number'
              name='number'
              value={form.number}
              onChange={handleChange}
              placeholder="Phone Number ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </div>
          
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
