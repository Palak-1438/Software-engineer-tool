import type { Metadata } from "next"
import { Code, Download, GitBranch, GitPullRequest, Terminal, Check, Settings, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IDEConnectionWizard } from "@/components/ide-connection-wizard"
import { BookDivider } from "@/components/book-divider"

export const metadata: Metadata = {
  title: "IDE Integration - Software Engineer Enhancement Tool",
  description: "VS Code extension for real-time code analysis and assistance",
}

export default function IDEIntegrationPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight book-title">IDE Integration</h1>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Configure
            </Button>
            <Button className="bg-[hsl(200,65%,55%)] hover:bg-[hsl(200,65%,45%)]">
              <RefreshCw className="mr-2 h-4 w-4" />
              Check Connection
            </Button>
          </div>
        </div>

        <Tabs defaultValue="vscode" className="space-y-4">
          <TabsList className="bg-[hsl(30,15%,90%)] p-1">
            <TabsTrigger value="vscode">VS Code Extension</TabsTrigger>
            <TabsTrigger value="intellij">IntelliJ Plugin</TabsTrigger>
            <TabsTrigger value="eclipse">Eclipse Plugin</TabsTrigger>
            <TabsTrigger value="connection">Connection Status</TabsTrigger>
          </TabsList>

          <TabsContent value="vscode" className="space-y-4">
            <Card className="book-page">
              <CardHeader>
                <CardTitle>VS Code Extension</CardTitle>
                <CardDescription>
                  Integrate the Software Engineer Enhancement Tool directly into your VS Code workflow
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[hsl(200,65%,90%)] p-3">
                      <Terminal className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Real-time Code Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant feedback on your code quality as you type
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[hsl(150,65%,90%)] p-3">
                      <Code className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI-Powered Code Suggestions</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive intelligent code suggestions based on best practices
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[hsl(280,65%,90%)] p-3">
                      <GitPullRequest className="h-6 w-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Integrated Code Reviews</h3>
                      <p className="text-sm text-muted-foreground">
                        Request and manage code reviews without leaving your editor
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[hsl(30,80%,90%)] p-3">
                      <GitBranch className="h-6 w-6 text-orange-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Version Control Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Seamlessly work with Git repositories and track code quality over time
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Install VS Code Extension
                </Button>
              </CardFooter>
            </Card>

            <BookDivider />

            <IDEConnectionWizard />
          </TabsContent>

          <TabsContent value="intellij">
            <Card className="book-page">
              <CardHeader>
                <CardTitle>IntelliJ Plugin</CardTitle>
                <CardDescription>Coming soon! We're working on an IntelliJ plugin.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The IntelliJ plugin is currently in development. Sign up to be notified when it's available.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Join Waitlist</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="eclipse">
            <Card className="book-page">
              <CardHeader>
                <CardTitle>Eclipse Plugin</CardTitle>
                <CardDescription>Coming soon! We're working on an Eclipse plugin.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The Eclipse plugin is currently in development. Sign up to be notified when it's available.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Join Waitlist</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="connection" className="space-y-4">
            <Card className="book-page">
              <CardHeader>
                <CardTitle>Connection Status</CardTitle>
                <CardDescription>View and manage your IDE connections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-green-100 p-2">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">VS Code (John's MacBook Pro)</h3>
                          <p className="text-sm text-muted-foreground">Connected since April 28, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Disconnect
                      </Button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium">IP Address:</span> 192.168.1.105
                      </div>
                      <div>
                        <span className="font-medium">Last Activity:</span> 5 minutes ago
                      </div>
                      <div>
                        <span className="font-medium">Extension Version:</span> 1.2.3
                      </div>
                      <div>
                        <span className="font-medium">VS Code Version:</span> 1.76.0
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-gray-200 p-2">
                          <Terminal className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="font-medium">VS Code (Office Workstation)</h3>
                          <p className="text-sm text-muted-foreground">Disconnected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Reconnect
                      </Button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium">Last Connected:</span> April 25, 2023
                      </div>
                      <div>
                        <span className="font-medium">Extension Version:</span> 1.2.1
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh Connection Status
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
