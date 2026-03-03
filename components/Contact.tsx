import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-black">Let's Connect</h3>
            <p className="text-blue-800">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-4 text-blue-800 hover:text-blue-600 transition-colors">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail size={24} />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center space-x-4 text-blue-800 hover:text-blue-600 transition-colors">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone size={24} />
                </div>
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <div className="flex space-x-4 pt-4">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 rounded-lg text-blue-900 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 rounded-lg text-blue-900 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-blue-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 text-blue-900 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 text-blue-900 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 text-blue-900 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 text-blue-900 transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;