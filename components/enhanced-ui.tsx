"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Target, Rocket, Code2, Globe, ArrowRight, Calendar, Clock } from "lucide-react"

// Enhanced floating animation component
export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

// Enhanced skill card with animations
export function EnhancedSkillCard({ skill, index }: { skill: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Card className="p-6 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 border-2 group-hover:border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="text-3xl">
              {skill.icon}
            </motion.div>
            <div>
              <h3 className="font-bold text-lg">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-sm font-bold">
            {skill.level}%
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-gradient-to-r from-primary via-secondary to-primary h-3 rounded-full relative"
            >
              <motion.div
                animate={{ x: [0, 100, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Beginner</span>
            <span>Expert</span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// Enhanced project showcase
export function EnhancedProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 border-2 group-hover:border-primary/30 overflow-hidden">
        {/* Project header with gradient */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-6 border-b">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                  <Rocket className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <Badge variant="default" className="animate-pulse">
                  {project.status}
                </Badge>
              </div>
              <p className="text-muted-foreground text-pretty mb-4">{project.description}</p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <Sparkles className="w-4 h-4" />
                {project.highlights}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, techIndex: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project features */}
        <div className="p-6">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-secondary" />
            Key Features
          </h4>
          <div className="grid md:grid-cols-2 gap-2 mb-6">
            {project.features.map((feature: string, featureIndex: number) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: featureIndex * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <motion.div whileHover={{ scale: 1.2 }} className="w-2 h-2 bg-primary rounded-full" />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <Button asChild className="flex items-center gap-2 group/btn">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Code2 className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                View Code
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" asChild className="flex items-center gap-2 group/btn bg-transparent">
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                Live Demo
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// Enhanced stats section
export function StatsSection() {
  const stats = [
    { label: "Years of Study", value: "2+", icon: Calendar },
    { label: "Projects Built", value: "5+", icon: Rocket },
    { label: "Technologies", value: "10+", icon: Code2 },
    { label: "Learning Hours", value: "500+", icon: Clock },
  ]

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <Card className="p-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3"
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="text-2xl font-bold text-primary mb-1"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
