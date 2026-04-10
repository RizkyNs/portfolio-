import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Quote, Sparkles, Target, Gamepad2 } from 'lucide-react';

export function Personal() {
  return (
    <section id="personal" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Highlight / Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-24 relative"
        >
          <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6 rotate-180" />
          <p className="text-2xl md:text-4xl font-medium leading-relaxed text-foreground/90 italic">
            "{portfolioData.personalNote}"
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-border bg-muted group">
              <img 
                src={portfolioData.images.personal} 
                alt="RNS Casual" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ filter: 'contrast(1.05) saturate(0.9) brightness(0.9)' }}
                referrerPolicy="no-referrer"
              />
              
              {/* Blending Overlays */}
              <div className="absolute inset-0 bg-blue-900/5 dark:bg-blue-900/10 mix-blend-overlay pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 dark:via-background/40 to-transparent opacity-90"></div>
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] rounded-3xl pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-sm font-medium text-foreground/90 bg-background/80 dark:bg-background/60 backdrop-blur-md py-2 px-4 rounded-full inline-block border border-border/50 dark:border-white/10 shadow-lg">
                  POV: Lagi mikirin logic yang error 💸
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Info */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            
            {/* Fun Facts */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-3xl bg-card border border-border sm:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Fun Facts</h3>
              </div>
              <ul className="space-y-4">
                {portfolioData.funFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Currently Into */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-3xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Currently Into</h3>
              </div>
              <ul className="space-y-3">
                {portfolioData.currentlyInto.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hobbies */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-3xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Hobbies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.hobbies.map((hobby, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
