import React from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-emerald-500 to-emerald-600 text-white py-20"
    >
      <div className="max-w-2xl mx-auto px-2 -py-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-3">Contact Me</h2>
          <p className="text-emerald-100">
            Have a project or want to work together? Feel free to reach out.
          </p>
        </div>

        {/* Form */}
        <form className="bg-emerald-800 text-white rounded-xl shadow-lg p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2">
              <User className="w-4 h-4" />
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2">
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2">
              <MessageSquare className="w-4 h-4" />
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
