import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient database design and data architecture solutions'
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimizing applications for speed and user experience'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              B.Tech in Computer Science and Engineering & AI/ML Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Computer Science and Engineering student at Lovely Professional University, Phagwara, Punjab (2023-2027). 
              With a strong foundation in programming languages like Python and C++, I specialize in building modern web applications using Django and machine learning frameworks.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My technical expertise includes Python development with Pandas, NumPy, and machine learning libraries like Scikit-Learn and HDBSCAN. 
              I have experience developing AI-driven solutions, as demonstrated in my waste collection route optimization project that achieved 79% routing efficiency using Google OR-Tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm actively seeking opportunities to apply my skills in real-world projects and contribute to innovative solutions. 
              My strong problem-solving abilities, teamwork skills, and quick learning capability make me a valuable team player ready to tackle challenging development projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
