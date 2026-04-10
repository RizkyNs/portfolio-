import { motion } from 'framer-motion';
import { portfolioData } from '../data';

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary"></span>
            Tentang Saya
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground">
              {portfolioData.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
