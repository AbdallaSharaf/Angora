import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { faMapMarker, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert('Form Submitted Successfully');
    },
  });

  return (
    <div id="contact" className="py-[100px] bg-gray-100 bg-opacity-20">
        <div className="relative flex flex-col group justify-center items-center">
                <div className="absolute font-['poppins'] -top-[2px] font-[900] text-[4.5rem] leading-10 text-opacity-20 text-gray-400">
                    G
                </div>
                <div className="text-[42px] font-bold mb-3">Get In Touch</div>
                <div className="w-10 bg-black h-[0.005em] group-hover:w-[60px] transition-all duration-300 ease-in-out" />
                <div className="text-[#999] mt-5 w-[90%] lg:w-[50%] text-center text-[19px] leading-tight">
                Mauris at tempus mi, ut iaculis dui. Integer laoreet mattis justo nec pretium. Ut nibh elit, fermentum vel hendrerit vel, dictum nec velit. Morbi volutpat suscipit.
                </div>
        </div>
        <div className='grid grid-col-1 lg:grid-cols-2 w-[90%] md:w-[85%] lg:w-[75%] mt-20 gap-x-8 mx-auto'>
            <div className=''>
            <h1 className='text-4xl leading-none mb-8 font-semibold'>Get answers and advices from professional consultants.</h1>
          <div className='flex group py-5 border-b-[1px] border-gray-500 border-opacity-10 gap-4'>
            <FontAwesomeIcon
              icon={faMapMarker}
              className='text-[#f25454] size-10'
            />
            <div>
              <h1 className='font-semibold text-xl leading-5 py-1'>Address</h1>
              <p className='text-sm'>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className='flex group py-5 border-b-[1px] border-gray-500 border-opacity-10 gap-4'>
            <FontAwesomeIcon
              icon={faPhone}
              className='text-[#f25454] size-10'
            />
            <div>
              <h1 className='font-semibold text-xl leading-5 py-1'>Call Us</h1>
              <p className='text-sm'>+1 5589 55488 55</p>
            </div>
          </div>
          <div className='flex group py-5  gap-4'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-[#f25454] size-10'
            />
            <div>
              <h1 className='font-semibold text-xl leading-5 py-1'>Email Us</h1>
              <p className='text-sm'>info@example.com</p>
            </div>
          </div>
          </div>
        <div className=''>
          <form onSubmit={formik.handleSubmit}>
              <div className='mb-4 w-full'>
                <input
                  className='mb-1 px-5 py-3 w-full border-[1px] text-black border-gray-200 focus:border-gray-400 focus:outline-none'
                  {...formik.getFieldProps('name')}
                  type="text"
                  placeholder="Name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className='text-red-800 w-full'>{formik.errors.name}</p>
                ) : null}
              </div>
              <div className='mb-4 w-full'>
                <input
                  className='mb-1 px-5 py-3 text-black w-full border-[1px] border-gray-200 focus:border-gray-400 focus:outline-none'
                  {...formik.getFieldProps('email')}
                  type="email"
                  placeholder="Email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className='text-red-800 w-full'>{formik.errors.email}</p>
                ) : null}
              </div>
            <div className='mb-4 w-full'>
              <input
                className='mb-1 px-5 py-3 w-full border-[1px] text-black border-gray-200 focus:border-gray-400 focus:outline-none'
                {...formik.getFieldProps('subject')}
                type="text"
                placeholder="Subject"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p className='text-red-800 w-full'>{formik.errors.subject}</p>
              ) : null}
            </div>
            <div className='w-full'>
              <textarea
                className='w-full h-[110px] px-5 py-3 text-black border-[1px] border-gray-200 focus:border-gray-400 focus:outline-none'
                {...formik.getFieldProps('message')}
                placeholder="Message"
              />
              {formik.touched.message && formik.errors.message ? (
                <p className='text-red-800'>{formik.errors.message}</p>
              ) : null}
            </div>
            <div className='w-auto'>
              <button className='px-7 py-3 mt-5 bg-[#f25454] hover:opacity-80 rounded-sm transition-all duration-300 ease-in-out text-white font-bold' type="submit"><FontAwesomeIcon className='mr-2' icon={faPaperPlane}/>Send Message</button>
            </div>
          </form>
      </div>
    </div>
    </div>
  );
};

export default ContactMe;
