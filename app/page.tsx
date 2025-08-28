"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text3D, Center } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, GraduationCap, Code, Brain, ChevronDown, ExternalLink } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { FloatingElements, EnhancedSkillCard, EnhancedProjectCard, StatsSection } from "@/components/enhanced-ui"

// 3D Floating Cube Component
function FloatingCube() {
  const meshRef = useRef()

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#d97706" metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  )
}

// 3D AI Brain Component
function AIBrain() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#ec4899" wireframe />
      </mesh>
    </Float>
  )
}

// 3D Text Component
function Hero3DText() {
  return (
    <Center>
      <Text3D
        font="/fonts/Geist_Bold.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        HARIHARAN
        <meshStandardMaterial color="#d97706" />
      </Text3D>
    </Center>
  )
}

// 3D Scene Component
function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Suspense fallback={null}>
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Hero3DText />
        <FloatingCube />
        <AIBrain />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  )
}

// Skills data - enhanced with more relevant skills
const skills = [
  { name: "Python", level: 85, icon: "🐍", description: "Data Science & AI Development" },
  { name: "JavaScript", level: 80, icon: "⚡", description: "Web Development & React" },
  { name: "Machine Learning", level: 75, icon: "🤖", description: "Algorithms & Model Training" },
  { name: "React", level: 70, icon: "⚛️", description: "Frontend Development" },
  { name: "Data Science", level: 78, icon: "📊", description: "Analytics & Visualization" },
  { name: "AI/Deep Learning", level: 72, icon: "🧠", description: "Neural Networks & NLP" },
  { name: "Node.js", level: 68, icon: "🟢", description: "Backend Development" },
  { name: "MongoDB", level: 65, icon: "🍃", description: "Database Management" },
]

// Real project data
const projects = [
  {
    title: "Quiz and Learning Analytics",
    description:
      "An intelligent quiz platform with comprehensive learning analytics, performance tracking, and adaptive learning features. Built with modern web technologies and AI-powered insights.",
    tech: ["React", "Node.js", "MongoDB", "Analytics", "AI"],
    status: "Active",
    github: "https://github.com/Dev-hari1433/Quiz-and-Learning-Analytics",
    website: "https://quiz-and-learning-analytics.vercel.app/",
    features: ["Performance Analytics", "Adaptive Learning", "Real-time Feedback", "Progress Tracking"],
    highlights: "Featured comprehensive learning analytics dashboard",
  },
]

// Enhanced achievements data
const achievements = [
  {
    title: "AI Research Project",
    description: "Developing machine learning models for educational analytics",
    icon: "🔬",
  },
  { title: "Coding Competitions", description: "Active participant in programming contests", icon: "🏆" },
  { title: "Open Source Contributor", description: "Contributing to educational technology projects", icon: "🌟" },
]

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [activeSection, setActiveSection] = useState("hero")

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-primary"
            >
              Hariharan Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Achievements", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen relative flex items-center justify-center">
        <FloatingElements />

        <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>

        <motion.div style={{ y }} className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/images/hariharan-photo.jpg"
                  alt="Hariharan"
                  fill
                  className="rounded-full object-cover border-4 border-primary/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
              </div>
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">Hi, I'm Hariharan</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-balance">
              Computer Science Student
              <span className="block text-primary">Specializing in AI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Passionate about artificial intelligence, machine learning, and creating innovative solutions that bridge
              technology and human needs. Building the future with code and creativity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Pakkam, Thirunindravur
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <GraduationCap className="w-4 h-4 mr-1" />
                DRBCCC Hindu College
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Code className="w-4 h-4 mr-1" />
                2nd Year BSc CS with AI
              </Badge>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/Dev-hari1433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/hari-haran-0406802a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hhari64099@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
            </div>

            <Button onClick={() => scrollToSection("about")} className="bg-primary hover:bg-primary/90">
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </section>

      {/* Stats Section - NEW */}
      <StatsSection />

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm a dedicated Computer Science student with a passion for Artificial Intelligence. Currently in my 2nd
              year at DRBCCC Hindu College, I'm constantly exploring the intersection of technology and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Technical Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    My studies focus on cutting-edge technologies in artificial intelligence, machine learning, and
                    software development. I enjoy building practical applications that solve real-world problems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Python", "Data Science", "Web Development", "Analytics"].map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary" />
                    Goals & Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I aim to contribute to the advancement of AI technology while ensuring ethical and beneficial
                    applications. My goal is to create intelligent systems that enhance education and make learning more
                    accessible and effective for everyone.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Continuously developing proficiency in various technologies and methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <EnhancedSkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Featured Projects</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              A showcase of my development work focusing on educational technology and AI applications
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <EnhancedProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Achievements & Activities</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Academic and extracurricular accomplishments in technology and learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 h-full text-center transition-all duration-300 group-hover:shadow-lg">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Education</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              My academic journey in Computer Science and Artificial Intelligence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">BSc Computer Science with Artificial Intelligence</h3>
                  <p className="text-primary font-semibold mb-2">DRBCCC Hindu College</p>
                  <p className="text-muted-foreground mb-4">Currently in 2nd Year • Expected Graduation: 2026</p>
                  <p className="text-sm text-muted-foreground text-pretty mb-4">
                    Specializing in artificial intelligence, machine learning algorithms, data structures, software
                    engineering, and modern programming paradigms. Actively participating in coding competitions and AI
                    research projects.
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "Machine Learning",
                        "Database Systems",
                        "Web Development",
                        "AI Ethics",
                      ].map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Let's Connect</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              I'm always interested in discussing AI, technology, and potential collaborations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Pakkam, Thirunindravur</span>
                </div>

                <div className="flex justify-center gap-4 flex-wrap">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex items-center gap-2 bg-transparent hover:bg-primary/10 transition-all duration-300"
                  >
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=hhari64099@gmail.com&su=Hello%20Hariharan&body=Hi%20Hariharan,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="w-4 h-4" />
                      hhari64099@gmail.com
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex items-center gap-2 bg-transparent hover:bg-blue-50 transition-all duration-300"
                  >
                    <a href="https://github.com/Dev-hari1433" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex items-center gap-2 bg-transparent hover:bg-blue-50 transition-all duration-300"
                  >
                    <a
                      href="https://www.linkedin.com/in/hari-haran-0406802a8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-pretty">
                  Open to internship opportunities, research collaborations, and discussions about the future of AI
                  technology and educational innovation.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Hariharan. Built with passion for AI and technology.</p>
        </div>
      </footer>
    </div>
  )
}
