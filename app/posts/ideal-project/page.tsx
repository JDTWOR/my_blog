import Link from "next/link"
import { ArrowLeft, Mic, Play, Lightbulb, Target, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function IdealProjectPage() {
  const projectFeatures = [
    {
      title: "Cross-Platform Compatibility",
      description: "Works seamlessly across different operating systems and devices",
    },
    {
      title: "Open Source Foundation",
      description: "Built with transparency and community collaboration in mind",
    },
    {
      title: "Scalable Architecture",
      description: "Designed to grow and adapt with changing requirements",
    },
    {
      title: "User-Centric Design",
      description: "Prioritizes user experience and accessibility",
    },
    {
      title: "Modern Technology Stack",
      description: "Utilizes current best practices and efficient technologies",
    },
    {
      title: "Comprehensive Documentation",
      description: "Well-documented for easy maintenance and contribution",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <Mic className="mr-3 h-8 w-8 text-green-400" />
              <h1 className="text-4xl font-bold text-green-400">My Ideal Project</h1>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              An audio discussion about my dream software development project and the vision behind it.
            </p>
            <div className="text-sm text-gray-500">Published on February 5, 2024</div>
          </header>

          {/* Audio Section */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Play className="mr-2 h-6 w-6" />
                Audio: My Ideal Project Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-700 rounded-lg p-8 text-center mb-4">
                <Mic className="mx-auto h-16 w-16 text-green-400 mb-4" />
                <p className="text-gray-300 mb-4">Replace this placeholder with your audio player or link</p>
                <div className="bg-gray-600 rounded p-4 text-left">
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Audio URL:</strong> [Your audio link here]
                  </p>
                  <p className="text-xs text-gray-400">
                    You can embed audio from various platforms or use HTML5 audio player
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-green-900 text-green-400">
                  Audio Content
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-400">
                  Project Vision
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Project Vision */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Lightbulb className="mr-2 h-6 w-6" />
                Project Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                My ideal project would be a comprehensive learning management system specifically designed for software
                development students. It would combine the best aspects of modern educational technology with practical
                coding environments and collaborative features.
              </p>
              <p>
                The system would integrate seamlessly with development tools, provide real-time feedback on coding
                exercises, and create a community where students can learn from each other. It would be built using Java
                for the backend, with a modern web interface, and would support multiple programming languages and
                frameworks.
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Target className="mr-2 h-6 w-6" />
                Key Features & Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {projectFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <h4 className="text-green-400 font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Stack */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Zap className="mr-2 h-6 w-6" />
                Proposed Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Backend</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Java with Spring Boot</li>
                    <li>• MySQL Database</li>
                    <li>• RESTful API Design</li>
                    <li>• Docker for containerization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Frontend</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Modern JavaScript framework</li>
                    <li>• Responsive design</li>
                    <li>• Real-time updates</li>
                    <li>• Accessible UI components</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">DevOps</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Git version control</li>
                    <li>• CI/CD pipelines</li>
                    <li>• Linux deployment</li>
                    <li>• Monitoring and logging</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Why This Project Matters</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                This project represents more than just a technical challenge—it's about creating something that could
                genuinely help other students in their learning journey. Having experienced the challenges of learning
                programming firsthand, I understand the importance of having the right tools and community support.
              </p>
              <p>
                The project would allow me to apply everything I'm learning at SENA while contributing to the broader
                educational community. It combines my interests in Java development, database design, user experience,
                and open-source collaboration.
              </p>
              <p>
                Most importantly, it would be a project that grows with me as I develop my skills, providing endless
                opportunities for improvement and feature additions while serving a real purpose in the educational
                technology space.
              </p>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
