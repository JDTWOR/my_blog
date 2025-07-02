import Link from "next/link"
import { ArrowLeft, Video, Play, ThumbsUp, ThumbsDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LikesDislikesPage() {
  const likes = [
    "Problem-solving through code",
    "Learning new programming languages",
    "Customizing my Linux environment",
    "Open source software philosophy",
    "Collaborative development",
    "Clean, efficient code",
    "Continuous learning",
  ]

  const dislikes = [
    "Poorly documented code",
    "Rushed development without testing",
    "Proprietary software limitations",
    "Repetitive, mundane tasks",
    "Lack of version control",
    "Overcomplicated solutions",
    "Ignoring user experience",
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
              <h1 className="text-4xl font-bold text-green-400">What I Like and Dislike</h1>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              A personal video sharing my preferences, opinions, and perspectives on technology and development.
            </p>
            <div className="text-sm text-gray-500">Published on February 1, 2024</div>
          </header>

          {/* Video Section */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center">
                <Play className="mr-2 h-6 w-6" />
                Video: My Likes and Dislikes
              </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Sz9iBAfl4Dw"
                title="What I Like and Dislike"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <ThumbsUp className="mr-2 h-6 w-6" />
                  What I Like
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {likes.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <ThumbsDown className="mr-2 h-6 w-6" />
                  What I Dislike
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dislikes.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">About This Video</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                In this personal video, I share my thoughts and opinions about various aspects of technology,
                programming, and software development. This content reflects my personal journey as a student and my
                evolving perspectives on the tech industry.
              </p>
              <p>
                Understanding what we like and dislike helps us make better decisions about our career paths, the tools
                we choose to use, and the kind of developer we want to become. It's important to reflect on these
                preferences as they guide our learning and professional development.
              </p>
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Key Topics Covered:</h4>
                <ul className="text-sm space-y-1">
                  <li>• My passion for problem-solving and clean code</li>
                  <li>• Why I prefer open source over proprietary solutions</li>
                  <li>• The importance of good documentation and collaboration</li>
                  <li>• My thoughts on continuous learning in tech</li>
                  <li>• What frustrates me about poor development practices</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
