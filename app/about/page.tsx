import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code, Database, Monitor, Coffee, Book, Zap } from "lucide-react"

export default function AboutPage() {
  const skills = [
    { name: "Java", level: "Intermediate", icon: Code },
    { name: "MySQL", level: "Intermediate", icon: Database },
    { name: "AWT/GUI", level: "Learning", icon: Monitor },
    { name: "Linux/Fedora", level: "Daily User", icon: Zap },
  ]

  const tools = ["Hyprland", "Neovim", "Obsidian", "Anki", "Git", "IntelliJ IDEA"]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-green-400">About Me</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main About Section */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-3xl text-green-400 flex items-center">
                <Coffee className="mr-3 h-8 w-8" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hi! I'm <span className="text-green-400 font-semibold">Jhon Rojas</span>, a passionate Software
                Development student at SENA, currently diving deep into the world of code, design, and digital
                creativity.
              </p>

              <p>
                I'm especially curious about building real solutions with <span className="text-green-400">Java</span>,{" "}
                <span className="text-green-400">MySQL</span>, and native GUI frameworks like{" "}
                <span className="text-green-400">AWT</span>. I'm also exploring the Linux world, using{" "}
                <span className="text-green-400">Fedora KDE</span> as my daily environment, and customizing it with
                tools like
                <span className="text-green-400"> Hyprland</span>, <span className="text-green-400">Neovim</span>, and{" "}
                <span className="text-green-400">Obsidian</span> for productivity and focus.
              </p>

              <p>
                I enjoy learning through experimentation — from improving CRUD apps to organizing knowledge with smart
                workflows. I also use <span className="text-green-400">Anki</span> to reinforce English vocabulary and
                tech concepts with spaced repetition.
              </p>

              <p>
                Programming for me is more than just code — it's about{" "}
                <span className="text-green-400">solving problems</span>,
                <span className="text-green-400"> staying curious</span>, and{" "}
                <span className="text-green-400">sharing what I learn</span>. This blog is my personal space to post
                projects, resources, and lessons from my journey as a developer and tech learner.
              </p>

              <p className="text-green-400 font-medium">
                Thanks for stopping by! I hope this space inspires you, teaches you something new, or simply connects
                with your own path in tech.
              </p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Code className="mr-2 h-6 w-6" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill) => {
                    const IconComponent = skill.icon
                    return (
                      <div key={skill.name} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <IconComponent className="mr-3 h-5 w-5 text-green-400" />
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          {skill.level}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Book className="mr-2 h-6 w-6" />
                  Tools & Environment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-green-900 text-green-400">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  I believe in using the right tools for productivity and maintaining a customized, efficient
                  development environment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Current Focus */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Current Focus</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Advancing Java programming skills through practical projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Mastering database design and MySQL optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Exploring Linux system administration and customization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Building efficient learning workflows with digital tools
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
