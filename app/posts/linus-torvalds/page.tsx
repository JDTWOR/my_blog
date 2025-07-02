import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, User, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LinusTorvaldsPage() {
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
              <User className="mr-3 h-8 w-8 text-green-400" />
              <h1 className="text-4xl font-bold text-green-400">Linus Torvalds: The Mind Behind Linux</h1>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              An infographic exploration of the life and contributions of the creator of Linux and Git.
            </p>
            <div className="text-sm text-gray-500">Published on January 25, 2024</div>
          </header>

          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-green-400">About Linus Torvalds</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and, historically,
                the lead developer of the Linux kernel. He also created the distributed version control system Git.
              </p>
              <p>
                Born in 1969 in Helsinki, Finland, Torvalds began developing Linux in 1991 as a personal project while
                studying computer science at the University of Helsinki. What started as a hobby project has become one
                of the most important pieces of software in the world.
              </p>
            </CardContent>
          </Card>

          {/* Placeholder for the Linus Torvalds infographic */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Linus Torvalds Infographic</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Upload your Linus Torvalds infographic to replace this placeholder
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg p-8 text-center">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Linus Torvalds Infographic"
                  width={600}
                  height={800}
                  className="mx-auto rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Calendar className="mr-2 h-6 w-6" />
                  Key Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="space-y-3">
                  <div className="border-l-2 border-green-400 pl-4">
                    <div className="font-semibold text-green-400">1991</div>
                    <div className="text-sm">Started developing Linux kernel</div>
                  </div>
                  <div className="border-l-2 border-green-400 pl-4">
                    <div className="font-semibold text-green-400">1996</div>
                    <div className="text-sm">Linux 2.0 released</div>
                  </div>
                  <div className="border-l-2 border-green-400 pl-4">
                    <div className="font-semibold text-green-400">2005</div>
                    <div className="text-sm">Created Git version control system</div>
                  </div>
                  <div className="border-l-2 border-green-400 pl-4">
                    <div className="font-semibold text-green-400">Present</div>
                    <div className="text-sm">Continues to maintain Linux kernel</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Award className="mr-2 h-6 w-6" />
                  Major Contributions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <div className="font-semibold">Linux Kernel</div>
                      <div className="text-sm text-gray-400">Foundation of countless operating systems</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <div className="font-semibold">Git</div>
                      <div className="text-sm text-gray-400">Revolutionary version control system</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <div className="font-semibold">Open Source Leadership</div>
                      <div className="text-sm text-gray-400">Championed collaborative development</div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Impact on Technology</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Linus Torvalds' contributions have fundamentally shaped modern computing. Linux powers everything from
                smartphones (Android) to supercomputers, web servers, and embedded systems. His philosophy of
                open-source development has influenced countless projects and developers worldwide.
              </p>
              <p>
                Git, his second major contribution, revolutionized how developers collaborate on code. It's now the
                standard version control system used by millions of developers and is the backbone of platforms like
                GitHub, GitLab, and Bitbucket.
              </p>
              <p>
                Beyond the technical contributions, Torvalds has demonstrated how individual passion projects can grow
                into global phenomena that benefit humanity. His pragmatic approach to software development and
                leadership continues to inspire new generations of programmers.
              </p>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}
