import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import abstractHeroImg from "../assets/images/abstract-hero.png";
import abstractProjectsImg from "../assets/images/abstract-projects.png";
import avatarPlaceholderImg from "../assets/images/avatar-placeholder.png";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Home() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I will get back to you soon.",
    });
    form.reset();
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-serif text-xl tracking-tighter">Alex Morgan.</div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
          <a href="#experience" className="hover:opacity-70 transition-opacity">Experience</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={abstractHeroImg} 
            alt="Abstract background" 
            className="absolute top-0 right-0 w-2/3 h-full object-cover opacity-60 md:w-1/2 object-right mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              Digital Craftsman
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
              Building things that <br className="hidden md:block"/>
              feel <span className="italic text-primary">human.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
              I am a full stack engineer and designer who builds software with intention. 
              Currently exploring the intersection of typography, motion, and reliable engineering.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-6 items-center">
              <a href="#projects">
                <Button className="rounded-full px-8 py-6 text-base shadow-sm hover:shadow-md transition-all">
                  View Selected Work
                </Button>
              </a>
              <a href="#about" className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 group">
                Discover more <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-card relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                <img 
                  src={avatarPlaceholderImg} 
                  alt="Portrait placeholder" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary text-primary-foreground flex items-center justify-center rounded-full p-4 text-center">
                <span className="font-serif italic text-lg leading-tight">10 years<br/>of craft</span>
              </div>
            </motion.div>
            
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-serif mb-8"
              >
                A dedication to the details.
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6 text-lg text-muted-foreground"
              >
                <p>
                  I believe that great software is indistinguishable from magic, but it takes rigorous engineering to get there. My work focuses on bridging the gap between beautiful aesthetics and robust architecture.
                </p>
                <p>
                  When I am not writing code, I am usually studying typography, reading about architectural history, or trying to perfect my pour-over coffee technique.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-12"
              >
                <h3 className="font-sans uppercase tracking-widest text-sm mb-6 text-foreground">Core Competencies</h3>
                <div className="flex flex-wrap gap-3">
                  {["TypeScript", "React", "Node.js", "PostgreSQL", "Framer Motion", "Figma", "UI/UX Design", "System Architecture"].map((skill, i) => (
                    <span key={i} className="px-4 py-2 border rounded-full text-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8"
          >
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Selected Work</p>
              <h2 className="text-4xl md:text-6xl font-serif">Artifacts of thought.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              A collection of digital products and experiments. Each project represents a specific problem solved through design and engineering.
            </p>
          </motion.div>

          <div className="space-y-32">
            {[
              {
                title: "Chronicle Journal",
                desc: "A distraction-free writing environment that uses local-first architecture to ensure your thoughts are always available, even offline. Designed with a focus on typography and reading rhythm.",
                tags: ["React", "IndexedDB", "Tailwind", "ProseMirror"],
                image: abstractProjectsImg,
                reverse: false
              },
              {
                title: "Studio CRM",
                desc: "An internal tool designed specifically for independent design studios. It strips away the complexity of enterprise CRMs in favor of a calm, focused interface for managing clients and projects.",
                tags: ["Next.js", "PostgreSQL", "Prisma", "Radix UI"],
                image: abstractHeroImg,
                reverse: true
              },
              {
                title: "Overture Motion",
                desc: "A lightweight animation library for React that prioritizes performance and spring physics over keyframes. Used in production by several high-traffic marketing sites.",
                tags: ["TypeScript", "WebGL", "Physics", "Open Source"],
                image: abstractProjectsImg,
                reverse: false
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center group`}
              >
                <div className="w-full md:w-3/5 overflow-hidden bg-card aspect-[4/3] md:aspect-video relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-2/5">
                  <h3 className="text-3xl font-serif mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-mono bg-muted px-3 py-1 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 font-medium uppercase tracking-widest text-sm hover:text-primary transition-colors">
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Professional History</h2>
            <p className="text-muted-foreground">The journey so far.</p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                role: "Senior Design Engineer",
                company: "Acme Studio",
                period: "2021 — Present",
                desc: "Leading the bridge between design and engineering. Architected the component library used across 12 products. Mentoring junior developers in design thinking."
              },
              {
                role: "Frontend Developer",
                company: "Nexus Technology",
                period: "2018 — 2021",
                desc: "Built complex financial dashboards with React and D3.js. Reduced bundle size by 40% and improved initial load times."
              },
              {
                role: "Interactive Designer",
                company: "Creative Collective",
                period: "2015 — 2018",
                desc: "Designed and developed award-winning marketing sites for international brands. Specialized in WebGL and custom scroll experiences."
              }
            ].map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 relative"
              >
                <div className="text-sm font-mono text-muted-foreground pt-1">
                  {job.period}
                </div>
                <div className="relative pb-16 md:pb-0">
                  <h3 className="text-xl font-serif mb-1">{job.role}</h3>
                  <div className="text-primary text-sm uppercase tracking-wider mb-4">{job.company}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.desc}
                  </p>
                  {i !== 2 && (
                    <div className="absolute left-[-2rem] md:left-[-3rem] top-8 bottom-0 w-px bg-border hidden md:block" />
                  )}
                  {/* Mobile separator */}
                  {i !== 2 && (
                    <div className="absolute bottom-6 left-0 w-12 h-px bg-border md:hidden" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Let's build<br/>something.</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-md">
                I am currently accepting new projects. If you have a problem that needs solving through elegant design and engineering, I'd love to hear about it.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group w-fit">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@alexmorgan.design
                </a>
                
                <div className="flex gap-4 pt-8">
                  <a href="#" className="w-12 h-12 rounded-full bg-card border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-card border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-card border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-2xl border"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" type="email" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="min-h-[150px] bg-background resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full py-6">Send Message</Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; {new Date().getFullYear()} Alex Morgan. Designed with intention.</p>
      </footer>
    </div>
  );
}
