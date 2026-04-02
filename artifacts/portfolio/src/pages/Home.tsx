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
import techAbstractImg from "../assets/images/tech-abstract.png";
import sherrySurfingImg from "@assets/4d4adbb26bc78991d35713d42092b8_1775083276565.JPG";
import sherrySUPImg from "@assets/9EE1ACC7-4F92-4BDF-8B14-275460EDE4F5_1775087395231.JPG";
import sherryTahoeImg from "@assets/8939EF8D-E05C-44A5-924E-E1E7A7BC4668_1775153626431.JPG";
import sherryHawaiiImg from "@assets/EC7141D8-FC88-4489-B307-7DA1C6F64237_1775087395230.JPG";
import sherryKayakImg from "@assets/233EBC59-FB47-4E70-8315-7F4A92441749_1775153626431.JPG";
import sherrySnorkelImg from "@assets/IMG_7895_1775152400887.JPG";
import sherryHorseImg from "@assets/9431DB7E-45C0-498D-BE3D-9EBC3B8353A1_1775150365555.JPG";
import sherrySkiImg from "@assets/44D7F7AF-F7AA-4058-B0F1-6FF87C86ED46_1775152400887.JPG";

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

        {/* Sherry's surfing photo — floats on the right in the hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-10 w-72 xl:w-80"
        >
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20">
              <img
                src={sherrySurfingImg}
                alt="Sherry surfing"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
              Out on the water
            </div>
          </div>
        </motion.div>
        
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
                  src={sherrySUPImg} 
                  alt="Sherry paddleboarding on the ocean" 
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'center 70%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                  I have spent 20+ years transforming complex data into strategic intelligence for the world's most demanding tech and fintech companies — Microsoft, Google, Cisco, and Wells Fargo. My edge is sitting at the intersection of deep technical rigor and executive decision-making, and making both sides understand each other.
                </p>
                <p>
                  Whether I am architecting an AI-driven analytics framework for a 5,000-person organization or navigating swells on a paddleboard at dawn, I bring the same discipline: stay curious, move precisely, and find the signal in the noise.
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
                  {["Strategic Analytics", "Business Intelligence", "AI-Driven Frameworks", "Executive Advisory", "Data Governance", "GTM Strategy", "Ocean Paddling", "Snorkeling", "Skiing", "Nature Photography"].map((skill, i) => (
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
              Twenty years turning data into decisions across Microsoft, Google, Cisco, and Wells Fargo — always at the intersection of technical depth and executive impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                role: "Strategic Data & Operations Leader",
                company: "Microsoft",
                period: "2025 – Present",
                desc: "Architect the strategic operating cadence for Microsoft's 5,000+ person Bay Area engineering site, deploying AI-driven diagnostic frameworks that modernize how the organization makes decisions. Serve as primary advisor to the Site Engineering Lead — translating fragmented workforce data into a coherent regional roadmap and bridging cross-functional governance across HR, Finance, and Engineering."
              },
              {
                role: "Director, BI Analytics & Center of Excellence",
                company: "Google",
                period: "2021 – 2024",
                desc: "Built a 9-pillar 'Executive Command Center' dashboard that consolidated metrics across a multi-billion dollar global portfolio — giving CX leadership real-time visibility into performance for the first time. Founded a Global Center of Excellence (CoE) to standardize intelligence reporting worldwide, and deployed predictive models that automated capital planning and budget forecasting at scale."
              },
              {
                role: "Principal, Advanced Business Analytics",
                company: "Wells Fargo",
                period: "2019 – 2022",
                desc: "Engineered a 'Customer Trait' behavioral framework that overhauled digital banking segmentation and enabled precision Go-To-Market targeting across channels. Delivered integrated reporting structures that gave executive leadership clear visibility into digital-first product health, and managed the Customer Privacy Program (GDPR/CCPA) ensuring rigorous data governance standards."
              },
              {
                role: "Strategic Program & Data Architecture Leader",
                company: "Cisco Systems",
                period: "2004 – 2021",
                desc: "Spent 17 years building Cisco's data foundation from the ground up. Founded MODS — the Marketing Operations Database — establishing the 'Single Source of Truth' still in active use today. Architected the $1B '7x7 Strategic Growth Framework' to bridge a global revenue gap, and built an early Propensity-to-Buy scoring model years before data science became mainstream practice."
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
                  {i !== 3 && (
                    <div className="absolute left-[-2rem] md:left-[-3rem] top-10 bottom-0 w-px bg-border hidden md:block" />
                  )}
                  {i !== 3 && (
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
            className="mb-16 md:mb-20"
          >
            <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Life Outside Work</p>
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Drawn to water,<br/>wild places, and wonder.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              From icy Lake Tahoe swims in January to surfing California breaks, exploring Hawaiian reefs to kayaking through redwood canyons — the outdoors is where I go to think, reset, and feel fully alive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Lake Tahoe winter swim — hero of the gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-3"
            >
              <div className="relative h-72 md:h-[28rem] overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={sherryTahoeImg}
                  alt="Swimming in Lake Tahoe in winter with snow-capped mountains"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 52%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-7 left-7">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1 font-sans">Winter swim</p>
                  <p className="text-white font-serif italic text-2xl md:text-3xl drop-shadow-lg">Cold water. Clear mind.</p>
                  <p className="text-white/60 text-sm mt-1 font-sans">Lake Tahoe, January</p>
                </div>
              </div>
            </motion.div>

            {/* Hawaii aerial — nature photography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={sherryHawaiiImg}
                  alt="Aerial view of Hawaiian sea cliffs and ocean"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 40%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1 font-sans">Helicopter tour</p>
                  <p className="text-white font-serif italic text-xl drop-shadow-lg">Kauai from the sky</p>
                  <p className="text-white/60 text-sm mt-1 font-sans">Kauai, Hawaii</p>
                </div>
              </div>
            </motion.div>

            {/* Snorkeling Hawaii */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={sherrySnorkelImg}
                  alt="Sherry snorkeling underwater"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 45%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1 font-sans">Snorkeling</p>
                  <p className="text-white font-serif italic text-xl drop-shadow-lg">Beneath the surface</p>
                  <p className="text-white/60 text-sm mt-1 font-sans">Hawaii</p>
                </div>
              </div>
            </motion.div>

            {/* Horseback riding — equestrian */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={sherryHorseImg}
                  alt="Sherry horseback riding in California"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 52%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1 font-sans">Equestrian</p>
                  <p className="text-white font-serif italic text-xl drop-shadow-lg">In the saddle</p>
                  <p className="text-white/60 text-sm mt-1 font-sans">California</p>
                </div>
              </div>
            </motion.div>

            {/* River kayaking — 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-2"
            >
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={sherryKayakImg}
                  alt="River kayaking through a redwood canyon"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 82%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-7 left-7">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1 font-sans">River kayaking</p>
                  <p className="text-white font-serif italic text-xl drop-shadow-lg">Deeper into the green.</p>
                  <p className="text-white/60 text-sm mt-1 font-sans">Redwood canyons, California</p>
                </div>
              </div>
            </motion.div>

            {/* Skiing — 1 col */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={sherrySkiImg}
                  alt="Sherry skiing down a snowy slope"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 52%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1 font-sans">Skiing</p>
                  <p className="text-white font-serif italic text-xl drop-shadow-lg">Powder days</p>
                  <p className="text-white/60 text-sm mt-1 font-sans">Sierra Nevada, California</p>
                </div>
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
                <a href="mailto:sssherry@gmail.com" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group w-fit font-serif">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  sssherry@gmail.com
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
