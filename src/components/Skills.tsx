import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Code2, Server, Wrench, Lightbulb } from 'lucide-react';

const iconMap = {
  programming: <Code2 className="w-6 h-6 text-primary" />,
  backendSystems: <Server className="w-6 h-6 text-primary" />,
  toolsTech: <Wrench className="w-6 h-6 text-primary" />,
  concepts: <Lightbulb className="w-6 h-6 text-primary" />
};

const titleMap = {
  programming: "Programming",
  backendSystems: "Backend & Systems",
  toolsTech: "Tools & Tech",
  concepts: "Concepts"
};

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Keahlian</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Teknologi dan konsep yang biasa gue pakai untuk ngebangun sistem yang stabil.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {(Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>).map((category) => (
            <motion.div 
              key={category} 
              variants={item}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[category]}
              </div>
              <h3 className="text-xl font-semibold mb-4">{titleMap[category]}</h3>
              <ul className="space-y-3">
                {portfolioData.skills[category].map((skill, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
