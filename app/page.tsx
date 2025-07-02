import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, BookOpen, Video, Mic, ImageIcon, Map } from "lucide-react"

export default function HomePage() {
  const blogPosts = [
    {
      id: "ple-mind-map",
      title: "Personal Learning Environment (PLE) Mind Map",
      description: "Visual representation of my personal learning ecosystem and tools",
      date: "2024-01-15",
      type: "Mind Map",
      icon: Map,
      category: "Learning",
    },
    {
      id: "adso-glossary",
      title: "ADSO Glossary",
      description: "Comprehensive glossary of programming terms and definitions",
      date: "2024-01-20",
      type: "Glossary",
      icon: BookOpen,
      category: "Programming",
    },
    {
      id: "linus-torvalds",
      title: "Linus Torvalds Infographic",
      description: "Visual story about the creator of Linux and his impact on technology",
      date: "2024-01-25",
      type: "Infographic",
      icon: ImageIcon,
      category: "Tech History",
    },
    {
      id: "likes-dislikes",
      title: "What I Like and Dislike",
      description: "Personal video sharing my preferences and opinions",
      date: "2024-02-01",
      type: "Video",
      icon: Video,
      category: "Personal",
    },
    {
      id: "ideal-project",
      title: "My Ideal Project",
      description: "Audio discussion about my dream software development project",
      date: "2024-02-05",
      type: "Audio",
      icon: Mic,
      category: "Projects",
    },
    {
      id: "tech-debate",
      title: "Technology Debate",
      description: "Video debate discussing which technologies are superior",
      date: "2024-02-10",
      type: "Video",
      icon: Video,
      category: "Discussion",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-green-400">Jhon Rojas</h1>
              <p className="text-gray-400">Software Development Student</p>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Welcome to My Tech Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Exploring the world of software development, Linux, and digital creativity. This blog documents my learning
            journey as a SENA student passionate about code and innovation.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <User className="mr-2 h-5 w-5" />
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-green-400">Blog Entries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const IconComponent = post.icon
              return (
                <Card
                  key={post.id}
                  className="bg-gray-800 border-gray-700 hover:border-green-500 transition-colors group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-green-900 text-green-400">
                        {post.category}
                      </Badge>
                      <IconComponent className="h-5 w-5 text-green-400" />
                    </div>
                    <CardTitle className="text-green-400 group-hover:text-green-300 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        {post.date}
                      </div>
                      <Link
                        href={`/posts/${post.id}`}
                        className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Jhon Rojas. Built with passion for learning and technology.</p>
        </div>
      </footer>
    </div>
  )
}
