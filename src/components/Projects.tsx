import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Solid Waste Collection Route Optimization',
      description: 'Developed an AI-driven routing system using HDBSCAN clustering and Google OR-Tools. Engineered a custom Haversine distance engine, removing dependency on external routing APIs. Achieved 79% routing efficiency and > 90% vehicle capacity utilization.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Folium', 'OR-Tools', 'HDBSCAN', 'Scikit-Learn'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      github: 'https://github.com/AnshRaturi/waste-route-optimization',
      live: 'https://waste-route-demo.vercel.app',
      featured: true,
      duration: "Oct'25– Nov'25"
    },
    {
      title: 'Library Management System',
      description: 'Built a Django-based web application to manage books, members, and borrowing workflows. Implemented CRUD operations and real-time availability tracking using Django ORM. Designed relational database models for secure and efficient data storage.',
      technologies: ['Django', 'Django ORM', 'Bootstrap', 'Python', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop',
      github: 'https://github.com/AnshRaturi/library-management',
      live: 'https://library-demo.vercel.app',
      featured: false,
      duration: "Jun'25– July'25"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in Python development, machine learning, and web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {project.featured && (
                <div className="bg-primary-600 text-white text-sm font-medium px-3 py-1 absolute top-4 right-4 z-10 rounded-full">
                  Featured
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.duration && (
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 font-medium">
                      📅 {project.duration}
                    </span>
                  </div>
                )}
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
