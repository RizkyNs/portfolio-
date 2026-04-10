import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { FolderGit2 } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project & Pengalaman</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Beberapa hal yang pernah gue kerjain dan pelajarin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-background border border-border shadow-sm hover:border-primary/30 dark:hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-500">
                <FolderGit2 className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
