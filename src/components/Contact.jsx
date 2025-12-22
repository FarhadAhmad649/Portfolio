import React from "react";
import contact from '../assets/contact.jpg'

function Contact() {
  return (
    <div
      id="Contact"
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-cyan-950">Contact Me</h2>
          <p className="text-gray-700 mt-2">
            Feel free to reach out for collaborations, internships, or project
            work.
          </p>
          <div className="mt-6">
            {/* Image left empty for you to add later */}
            <img
              src={contact}
              alt="Contact placeholder"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>
          <ul className="flex gap-3 my-3 text-blue-600 ">
            <li>
              <a className="hover:underline" href="">
                Watsapp
              </a>
            </li>
            <li>
              <a className="hover:underline" href="">
                Facebook
              </a>
            </li>
            <li>
              <a className="hover:underline" href="">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <form className="space-y-4 mt-12">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Your name"
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Your email"
          />
          <textarea
            className="w-full border rounded px-3 py-2"
            placeholder="Message"
            rows="6"
          />
          <button className="bg-cyan-950 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
