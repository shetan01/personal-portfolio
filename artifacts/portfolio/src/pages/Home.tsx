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

import heroBgImg from "../assets/images/hero-bg.png";
import natureAbstractImg from "../assets/images/nature-abstract.png";
import waterSportsImg from "../assets/images/water-sports.png";
import techAbstractImg from "../assets/images/tech-abstract.png";

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
      description: "Thank you for reaching out. I'll get back to you soon.",
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
    <div className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-serif text-2xl tracking-tighter italic">Sherry.</div>
        <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#passions" className="hover:text-primary transition-colors">Passions</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgImg} 
            alt="Ocean waves abstract" 
            className="w-full h-full object-cover opacity-90 md:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              Tech Leader & Ocean Explorer
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
              Where the ocean <br className="hidden md:block"/>
              meets the <span className="italic text-primary">boardroom.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/80 max-w-xl mb-12 leading-relaxed font-sans">
              I build enterprise-grade software systems by day and paddle into the ocean at dawn. 
              Bringing warmth, creativity, and relentless precision to everything I do.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-6 items-center flex-wrap">
              <a href="#experience">
                <Button className="rounded-full px-8 py-6 text-base shadow-sm hover:shadow-md transition-all border-none bg-primary text-primary-foreground hover:bg-primary/90">
                  Professional Journey
                </Button>
              </a>
              <a href="#about" className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 group">
                Dive Deeper <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
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
              <div className="aspect-[4/5] relative overflow-hidden bg-muted rounded-xl shadow-2xl">
                <img 
                  src={natureAbstractImg} 
                  alt="Nature and photography inspired abstract" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 backdrop-blur-md border border-primary/20 text-foreground flex items-center justify-center rounded-full p-4 text-center shadow-xl">
                <span className="font-serif italic text-xl leading-tight">Vivid,<br/>Adventurous,<br/>Warm</span>
              </div>
            </motion.div>
            
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-foreground"
              >
                Rooted in logic. <br />Driven by wonder.
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed"
              >
                <p>
                  I have spent my career leading technical initiatives at some of the world's most demanding tech and fintech companies. But my leadership style isn't born in a boardroom—it's shaped by the outdoors.
                </p>
                <p>
                  Whether I am architecting complex software or navigating coastal swells on a paddleboard, I believe in fluid adaptability, clear vision, and finding joy in the challenge.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-12"
              >
                <h3 className="font-sans uppercase tracking-widest text-sm mb-6 text-foreground font-medium">Multifaceted Skillset</h3>
                <div className="flex flex-wrap gap-3">
                  {["Enterprise Software", "FinTech Architecture", "Cloud Infrastructure", "Product Leadership", "Ocean Paddling", "Snorkeling", "Water Skiing", "Nature Photography"].map((skill, i) => (
                    <span key={i} className="px-4 py-2 border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors cursor-default bg-background/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-luminosity">
          <img src={techAbstractImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Professional History</p>
            <h2 className="text-5xl md:text-6xl font-serif mb-4">Building at scale.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Delivering high-impact solutions across the tech ecosystem, from search algorithms to enterprise networking and financial infrastructure.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                role: "Principal Product Manager",
                company: "Microsoft",
                period: "Recent",
                desc: "Led cross-functional engineering teams in developing enterprise cloud solutions. Bridged the gap between deeply technical infrastructure and intuitive user experiences, driving adoption across Fortune 500 clients."
              },
              {
                role: "Senior Engineering Leader",
                company: "Google",
                period: "Previous",
                desc: "Directed initiatives within core infrastructure. Championed scalable, resilient systems while maintaining a culture of psychological safety and creative problem-solving within the team."
              },
              {
                role: "Systems Architect",
                company: "Cisco",
                period: "Earlier",
                desc: "Architected networking software solutions. Focused on reliability, performance, and security in high-stakes environments where downtime is not an option."
              }
            ].map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12 relative group"
              >
                <div className="text-sm font-mono text-muted-foreground pt-2">
                  {job.period}
                </div>
                <div className="relative pb-16 md:pb-0">
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-primary transition-colors">{job.role}</h3>
                  <div className="text-primary text-sm uppercase tracking-wider mb-4 font-medium">{job.company}</div>
                  <p className="text-muted-foreground leading-relaxed text-lg font-sans">
                    {job.desc}
                  </p>
                  {i !== 2 && (
                    <div className="absolute left-[-2rem] md:left-[-3rem] top-10 bottom-0 w-px bg-border hidden md:block" />
                  )}
                  {i !== 2 && (
                    <div className="absolute bottom-8 left-0 w-12 h-px bg-border md:hidden" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section id="passions" className="py-32 px-6 md:px-12 lg:px-24 bg-card border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8"
          >
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Life Outside Work</p>
              <h2 className="text-5xl md:text-6xl font-serif">Drawn to the water.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg">
              When I close my laptop, you will find me outdoors. The ocean is my ultimate reset button.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-foreground">Ocean Paddling & Swimming</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  There is a unique clarity that comes from being on the open water at dawn. The rhythm of the stroke, the vastness of the horizon, and the sheer power of the ocean remind me to stay grounded and present.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-foreground">Nature Photography</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I love capturing the interplay of light and texture in nature. It forces me to slow down, observe closely, and appreciate the fleeting beauty of a single moment in time.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-foreground">Snorkeling & Skiing</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether exploring vibrant coral reefs beneath the surface or gliding across a glassy lake, I am continually inspired by the dynamic energy of water.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={waterSportsImg} 
                  alt="Vibrant water sports abstract" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Say Hello</p>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Let's connect.</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-md font-sans">
                Whether you want to discuss enterprise architecture, talk about the best snorkeling spots, or explore a potential collaboration, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group w-fit font-serif">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@sherry.design
                </a>
                
                <div className="flex gap-4 pt-8">
                  <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-background border-border/50 focus-visible:ring-primary" />
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
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" type="email" {...field} className="bg-background border-border/50 focus-visible:ring-primary" />
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
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What's on your mind?" 
                            className="min-h-[150px] bg-background border-border/50 focus-visible:ring-primary resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full py-6 text-base rounded-full mt-4">Send Message</Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 text-center text-sm text-muted-foreground border-t border-border bg-background">
        <p>&copy; {new Date().getFullYear()} Sherry. Designed with intention and crafted with code.</p>
      </footer>
    </div>
  );
}
