"use client"

import { useState } from "react"
import { Check, Copy, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function IDEConnectionWizard() {
  const [step, setStep] = useState(1)
  const [connectionMethod, setConnectionMethod] = useState("automatic")
  const [copied, setCopied] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)

  const apiKey = "se-tool-api-key-12345-abcdef"

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleConnect = () => {
    setConnecting(true)
    // Simulate connection process
    setTimeout(() => {
      setConnecting(false)
      setConnected(true)
      setStep(3)
    }, 2000)
  }

  return (
    <Card className="book-page">
      <CardHeader>
        <CardTitle>Connect Your IDE</CardTitle>
        <CardDescription>
          Follow these steps to connect your VS Code to the Software Engineer Enhancement Tool
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className={`rounded-full p-2 ${step >= 1 ? "bg-[hsl(200,65%,90%)]" : "bg-gray-100"}`}>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium ${
                  step > 1 ? "bg-[hsl(200,65%,55%)] text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > 1 ? <Check className="h-4 w-4" /> : "1"}
              </span>
            </div>
            <div className="h-px flex-1 bg-gray-200"></div>
            <div className={`rounded-full p-2 ${step >= 2 ? "bg-[hsl(200,65%,90%)]" : "bg-gray-100"}`}>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium ${
                  step > 2 ? "bg-[hsl(200,65%,55%)] text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > 2 ? <Check className="h-4 w-4" /> : "2"}
              </span>
            </div>
            <div className="h-px flex-1 bg-gray-200"></div>
            <div className={`rounded-full p-2 ${step >= 3 ? "bg-[hsl(200,65%,90%)]" : "bg-gray-100"}`}>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium ${
                  step > 3 ? "bg-[hsl(200,65%,55%)] text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > 3 ? <Check className="h-4 w-4" /> : "3"}
              </span>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Step 1: Install the Extension</h3>
              <p className="text-sm text-muted-foreground">
                First, install the Software Engineer Enhancement Tool extension from the VS Code marketplace.
              </p>

              <div className="rounded-lg border p-4 bg-gray-50">
                <h4 className="font-medium mb-2">Option 1: Install from VS Code</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Open VS Code</li>
                  <li>Go to Extensions (Ctrl+Shift+X)</li>
                  <li>Search for "Software Engineer Enhancement Tool"</li>
                  <li>Click "Install"</li>
                </ol>
              </div>

              <div className="rounded-lg border p-4 bg-gray-50">
                <h4 className="font-medium mb-2">Option 2: Install from Command Line</h4>
                <div className="bg-black text-white p-3 rounded-md font-mono text-sm">
                  code --install-extension software-engineer-tool.vsix
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  <Download className="mr-2 h-4 w-4" />
                  Download .vsix File
                </Button>
              </div>

              <div className="flex justify-end mt-4">
                <Button onClick={() => setStep(2)}>Continue</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Step 2: Connect to Your Account</h3>
              <p className="text-sm text-muted-foreground">
                Choose how you want to connect your VS Code to your Software Engineer Enhancement Tool account.
              </p>

              <RadioGroup value={connectionMethod} onValueChange={setConnectionMethod} className="space-y-3">
                <div
                  className={`flex items-center space-x-2 rounded-md border p-3 cursor-pointer ${
                    connectionMethod === "automatic" ? "border-[hsl(200,65%,55%)] bg-[hsl(200,65%,95%)]" : ""
                  }`}
                  onClick={() => setConnectionMethod("automatic")}
                >
                  <RadioGroupItem value="automatic" id="automatic" />
                  <Label htmlFor="automatic" className="flex-1 cursor-pointer">
                    <div className="font-medium">Automatic Connection</div>
                    <div className="text-sm text-muted-foreground">
                      Open VS Code and click "Connect" in the extension sidebar
                    </div>
                  </Label>
                </div>

                <div
                  className={`flex items-center space-x-2 rounded-md border p-3 cursor-pointer ${
                    connectionMethod === "manual" ? "border-[hsl(200,65%,55%)] bg-[hsl(200,65%,95%)]" : ""
                  }`}
                  onClick={() => setConnectionMethod("manual")}
                >
                  <RadioGroupItem value="manual" id="manual" />
                  <Label htmlFor="manual" className="flex-1 cursor-pointer">
                    <div className="font-medium">Manual API Key</div>
                    <div className="text-sm text-muted-foreground">
                      Copy your API key and paste it in VS Code settings
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {connectionMethod === "manual" && (
                <div className="rounded-lg border p-4 mt-4">
                  <h4 className="font-medium mb-2">Your API Key</h4>
                  <div className="flex items-center">
                    <Input value={apiKey} readOnly className="font-mono" />
                    <Button variant="outline" size="icon" className="ml-2" onClick={handleCopyApiKey}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="mt-4 text-sm">
                    <p className="font-medium">Instructions:</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                      <li>Open VS Code</li>
                      <li>Press Ctrl+Shift+P to open the command palette</li>
                      <li>Type "SE Tool: Set API Key" and press Enter</li>
                      <li>Paste your API key and press Enter</li>
                    </ol>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button onClick={handleConnect} disabled={connecting}>
                  {connecting ? "Connecting..." : "Connect"}
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Step 3: Verify Connection</h3>

              {connected ? (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex items-start">
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Connection Successful!</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your VS Code is now connected to the Software Engineer Enhancement Tool. You can start using all
                        the features directly from your IDE.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">Waiting for connection verification...</p>
                </div>
              )}

              <div className="rounded-lg border p-4 mt-4">
                <h4 className="font-medium mb-2">Next Steps</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="rounded-full bg-[hsl(200,65%,90%)] p-1 mr-2 mt-0.5">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full text-xs font-medium bg-[hsl(200,65%,55%)] text-white">
                        1
                      </span>
                    </div>
                    <span>Open a Java project in VS Code</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-[hsl(200,65%,90%)] p-1 mr-2 mt-0.5">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full text-xs font-medium bg-[hsl(200,65%,55%)] text-white">
                        2
                      </span>
                    </div>
                    <span>Click on the SE Tool icon in the activity bar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-[hsl(200,65%,90%)] p-1 mr-2 mt-0.5">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full text-xs font-medium bg-[hsl(200,65%,55%)] text-white">
                        3
                      </span>
                    </div>
                    <span>Start using the tool's features directly in your IDE</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button onClick={() => (window.location.href = "/dashboard")}>Go to Dashboard</Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
