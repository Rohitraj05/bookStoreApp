import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can send the data to your backend or display a success message here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 bg-indigo-50">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <div className='flex justify-between'>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 underline ">Contact Us</h2>
        <Link to={"/"} className='btn btn-sm btn-circle hover:bg-slate-500 hover:scale-y-110'>✕</Link>

        </div>
        

         

        <p className="text-gray-600 mb-6">We'd love to hear from you! Fill out the form below to send us a message.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your message"
              rows="4"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
