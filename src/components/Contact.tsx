import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Instagram, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12">
            {portfolioData.closing}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`https://instagram.com/${portfolioData.contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] rounded-full gap-3 hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5" />
              DM on Instagram
            </a>
            <span className="text-sm text-muted-foreground">
              (Fastest response via {portfolioData.contact.instagram})
            </span>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 border-t border-border pt-8 pb-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind CSS & Framer Motion.</p>
      </footer>
    </section>
  );
}
