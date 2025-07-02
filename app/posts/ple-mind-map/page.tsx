import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Map, Brain, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PLEMindMapPage() {
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
              <Map className="mr-3 h-8 w-8 text-green-400" />
              <h1 className="text-4xl font-bold text-green-400">Personal Learning Environment (PLE) Mind Map</h1>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              A visual representation of my personal learning ecosystem and the tools that shape my educational journey.
            </p>
            <div className="text-sm text-gray-500">Published on January 15, 2024</div>
          </header>

          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Brain className="mr-2 h-6 w-6" />
                Understanding Personal Learning Environments
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                A Personal Learning Environment (PLE) represents the tools, communities, and practices that an
                individual uses to direct their own learning. It's not just about the technology, but about how we
                organize, connect, and make sense of information in our learning journey.
              </p>
              <p>
                My PLE encompasses various digital tools, learning platforms, communities, and methodologies that help
                me acquire new knowledge, practice skills, and connect with other learners in the software development
                field.
              </p>
            </CardContent>
          </Card>

          {/* Placeholder for the mind map image */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-green-400 mb-2">My PLE Mind Map</h3>
                <p className="text-gray-400 text-sm mb-4">Upload your PLE mind map image to replace this placeholder</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-8 text-center">
                <Image
                  src="/mapa_mental.png"
                  alt="Personal Learning Environment Mind Map"
                  width={800}
                  height={600}
                  className="mx-auto rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Lightbulb className="mr-2 h-6 w-6" />
                Key Components of My PLE
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Learning Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Anki for spaced repetition learning</li>
                    <li>• Obsidian for knowledge management</li>
                    <li>• Neovim for coding practice</li>
                    <li>• GitHub for project collaboration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Learning Sources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• SENA institutional resources</li>
                    <li>• Online documentation and tutorials</li>
                    <li>• Programming communities</li>
                    <li>• Technical blogs and articles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Practice Environments</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Local development setup</li>
                    <li>• Virtual machines for testing</li>
                    <li>• Online coding platforms</li>
                    <li>• Personal projects repository</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Social Learning</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Study groups and peer collaboration</li>
                    <li>• Online developer communities</li>
                    <li>• Mentorship relationships</li>
                    <li>• Knowledge sharing through blogging</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
