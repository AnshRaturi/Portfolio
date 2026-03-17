import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anshraturi87@gmail.com',
      href: 'mailto:anshraturi87@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9319186558',
      href: 'tel:+919319186558'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Punjab, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/AnshRaturi',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ansh-raturi-43b513226/',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out using the contact information below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-gray-900 font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-primary-600"
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Feel free to reach out using any of the contact methods above!
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-center text-gray-700 font-medium">
                  📧 Email: <a href="mailto:anshraturi87@gmail.com" className="text-primary-600 hover:underline">anshraturi87@gmail.com</a>
                </p>
                <p className="text-center text-gray-700 font-medium mt-2">
                  📱 Phone: <a href="tel:+919319186558" className="text-primary-600 hover:underline">+91-9319186558</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
