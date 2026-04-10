import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              {portfolioData.nickname}
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-sm">
                {portfolioData.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              {portfolioData.role}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              "{portfolioData.tagline}"
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 rounded-full gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium transition-all border border-border hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 rounded-full"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto lg:ml-auto w-full max-w-md aspect-[4/5]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black rounded-[2.5rem] shadow-2xl shadow-blue-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3)_0%,_transparent_70%)]"></div>
            <img 
              src={portfolioData.images.hero} 
              alt={portfolioData.name} 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none object-cover object-top drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
