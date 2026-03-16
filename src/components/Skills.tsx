import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Database,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C++', level: 80 }
      ]
    },
    {
      title: 'Frameworks',
      icon: Server,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Scikit-Learn', level: 75 },
        { name: 'HDBSCAN', level: 70 },
        { name: 'Django', level: 80 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Database,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Linux Commands', level: 75 },
        { name: 'Jupyter Notebook', level: 80 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: GitBranch,
      skills: [
        { name: 'Problem-Solving', level: 95 },
        { name: 'Team Player', level: 90 },
        { name: 'Quick Learner', level: 85 },
        { name: 'Time Management', level: 85 }
      ]
    }
  ];

  const additionalSkills = [
    'UI/UX Design',
    'Responsive Design',
    'Performance Optimization',
    'SEO',
    'Agile/Scrum',
    'Problem Solving',
    'Team Collaboration',
    'Code Reviews'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                          className="bg-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Additional Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.05) }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
