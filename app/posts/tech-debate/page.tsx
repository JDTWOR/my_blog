import Link from "next/link"
import { ArrowLeft, Video, Play, Zap, Code, Database, Monitor } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TechDebatePage() {
  const debateTopics = [
    {
      topic: "Java vs Python",
      javaPoints: ["Strong typing", "Enterprise reliability", "JVM ecosystem", "Performance"],
      pythonPoints: ["Simplicity", "Rapid development", "Data science libraries", "Readability"],
      icon: Code,
    },
    {
      topic: "MySQL vs PostgreSQL",
      mysqlPoints: ["Widespread adoption", "Ease of use", "Performance", "Community support"],
      postgresqlPoints: ["Advanced features", "Standards compliance", "Extensibility", "JSON support"],
      icon: Database,
    },
    {
      topic: "Native vs Web Applications",
      nativePoints: ["Better performance", "Platform integration", "Offline capabilities", "User experience"],
      webPoints: ["Cross-platform", "Easy deployment", "Lower development cost", "Accessibility"],
      icon: Monitor,
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
              <Video className="mr-3 h-8 w-8 text-green-400" />
              <h1 className="text-4xl font-bold text-green-400">Technology Debate: Which is Better?</h1>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              A video debate discussing various technologies and their merits in different contexts.
            </p>
            <div className="text-sm text-gray-500">Published on February 10, 2024</div>
          </header>

          {/* Video Section */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Play className="mr-2 h-6 w-6" />
                Video: Technology Debate Discussion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-700 rounded-lg p-8 text-center mb-4">
                <Video className="mx-auto h-16 w-16 text-green-400 mb-4" />
                <p className="text-gray-300 mb-4">Replace this placeholder with your video embed or link</p>
                <div className="bg-gray-600 rounded p-4 text-left">
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Video URL:</strong> [Your video link here]
                  </p>
                  <p className="text-xs text-gray-400">You can embed YouTube, Vimeo, or other video platforms here</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-green-900 text-green-400">
                  Debate Content
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-400">
                  Technology Comparison
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Debate Topics */}
          <div className="space-y-8 mb-8">
            {debateTopics.map((debate, index) => {
              const IconComponent = debate.icon
              return (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-green-400 flex items-center">
                      <IconComponent className="mr-2 h-6 w-6" />
                      {debate.topic}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="text-green-400 font-semibold mb-3">
                          {debate.topic.split(" vs ")[0]} Advantages
                        </h4>
                        <ul className="space-y-2">
                          {debate.javaPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-center text-gray-300 text-sm">
                              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="text-blue-400 font-semibold mb-3">{debate.topic.split(" vs ")[1]} Advantages</h4>
                        <ul className="space-y-2">
                          {debate.pythonPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-center text-gray-300 text-sm">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* My Perspective */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Zap className="mr-2 h-6 w-6" />
                My Perspective on Technology Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                In this debate video, I explore the nuanced question of which technologies are "better." The truth is,
                there's rarely a one-size-fits-all answer. The best technology depends on the specific context,
                requirements, and constraints of each project.
              </p>
              <p>
                As a student learning multiple technologies, I've come to appreciate that each tool has its strengths
                and ideal use cases. Rather than declaring absolute winners, I focus on understanding when and why to
                choose one technology over another.
              </p>
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Key Factors I Consider:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Project requirements and constraints</li>
                  <li>• Team expertise and learning curve</li>
                  <li>• Long-term maintenance and scalability</li>
                  <li>• Community support and ecosystem</li>
                  <li>• Performance requirements</li>
                  <li>• Development timeline and budget</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">The Value of Healthy Debate</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Technology debates, when conducted respectfully and with open minds, are incredibly valuable for
                learning. They force us to articulate our reasoning, consider different perspectives, and deepen our
                understanding of the tools we use.
              </p>
              <p>
                Through these discussions, I've learned that the most successful developers are those who can adapt
                their technology choices to the situation at hand, rather than being dogmatic about any particular tool
                or framework.
              </p>
              <p>
                This video represents my current thinking on these topics, but I expect my perspectives to evolve as I
                gain more experience and encounter new challenges in my development journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
