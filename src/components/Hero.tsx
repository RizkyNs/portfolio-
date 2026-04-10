import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { ArrowRight, User, Code2, Sparkles, Send } from 'lucide-react';

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

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 rounded-full gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition-all border border-border hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 rounded-full gap-2 text-muted-foreground hover:text-foreground"
            >
              <User className="w-4 h-4" />
              About
            </a>
            <a 
              href="#skills"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition-all border border-border hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 rounded-full gap-2 text-muted-foreground hover:text-foreground"
            >
              <Code2 className="w-4 h-4" />
              Skills
            </a>
            <a 
              href="#personal"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition-all border border-border hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 rounded-full gap-2 text-muted-foreground hover:text-foreground"
            >
              <Sparkles className="w-4 h-4" />
              Personal
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition-all border border-border hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 rounded-full gap-2 text-muted-foreground hover:text-foreground"
            >
              <Send className="w-4 h-4" />
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto lg:ml-auto w-full max-w-md aspect-[4/5] group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 dark:from-blue-900/20 to-background rounded-[2.5rem] border border-border/50 shadow-2xl overflow-hidden">
            {/* Subtle glow behind the subject */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_60%)]"></div>
            
            <img 
              src={portfolioData.images.hero} 
              alt={portfolioData.name} 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[115%] max-w-none object-cover object-top transition-transform duration-700 group-hover:scale-105"
              style={{ 
                filter: 'drop-shadow(0 -10px 20px rgba(0,0,0,0.5)) contrast(1.05) saturate(0.85) brightness(0.95)' 
              }}
              referrerPolicy="no-referrer"
            />
            
            {/* Blending Overlays */}
            {/* 1. Bottom fade to ground the subject and blend with the section */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 dark:via-background/20 to-transparent opacity-90"></div>
            
            {/* 2. Cool tint to neutralize warm lighting and match theme */}
            <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 mix-blend-color pointer-events-none"></div>
            
            {/* 3. Inner vignette shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.7)] rounded-[2.5rem] pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
