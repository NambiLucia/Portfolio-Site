import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form =useRef();
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0bhkr2d',       
        'template_5304v9x',      
        form.current,
        'xgDDHe3Y3s06C3Rqa'       
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };


  return (
    <section className="bg-gray-900 text-white py-18 pb- item-" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-teal-400">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              name="from_email" 
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <textarea
          name="message" 
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
