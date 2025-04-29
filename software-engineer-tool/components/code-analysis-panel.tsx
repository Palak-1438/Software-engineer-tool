"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle, Check, Upload } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CodeAnalysisPanel() {
  const [code, setCode] = useState<string>("")
  const [analyzing, setAnalyzing] = useState<boolean>(false)
  const [results, setResults] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!code.trim()) {
      setError("Please enter some code to analyze")
      return
    }

    setAnalyzing(true)
    setError(null)

    // Simulate API call to Java backend
    try {
      // In a real implementation, this would be an API call to your Spring Boot backend
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock response
      setResults({
        score: 78,
        issues: [
          {
            type: "bug",
            severity: "major",
            message: "Possible null pointer dereference",
            line: 15,
            column: 23,
            suggestion: "Add null check before accessing the object",
          },
          {
            type: "code_smell",
            severity: "minor",
            message: "Method has too many lines (35)",
            line: 10,
            column: 3,
            suggestion: "Consider breaking down this method into smaller methods",
          },
          {
            type: "vulnerability",
            severity: "critical",
            message: "SQL injection vulnerability",
            line: 27,
            column: 12,
            suggestion: "Use parameterized queries instead of string concatenation",
          },
        ],
        recommendations: [
          "Consider using dependency injection instead of direct instantiation",
          "Add more unit tests to cover edge cases",
          "Use Java 8 Stream API for collection processing",
        ],
      })
    } catch (err) {
      setError("Failed to analyze code. Please try again.")
    } finally {
      setAnalyzing(false)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        setCode(event.target.result as string)
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => document.getElementById("file-upload")?.click()}
            className="border-[hsl(30,50%,80%)] text-[hsl(30,94%,34%)]"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Java File
          </Button>
          <input id="file-upload" type="file" accept=".java" className="hidden" onChange={handleFileUpload} />
          <span className="text-sm text-muted-foreground">or paste code below</span>
        </div>
        <Textarea
          placeholder="Paste your Java code here..."
          className="min-h-[300px] font-mono"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button
        onClick={handleAnalyze}
        disabled={analyzing}
        className="bg-[hsl(200,65%,55%)] hover:bg-[hsl(200,65%,45%)]"
      >
        {analyzing ? "Analyzing..." : "Analyze Code"}
      </Button>

      {results && (
        <div className="space-y-4 mt-6">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">Score: {results.score}/100</div>
            <div
              className={`px-2 py-1 rounded text-xs ${
                results.score >= 80
                  ? "bg-green-100 text-green-800"
                  : results.score >= 60
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {results.score >= 80 ? "Good" : results.score >= 60 ? "Needs Improvement" : "Poor"}
            </div>
          </div>

          <Tabs defaultValue="issues">
            <TabsList>
              <TabsTrigger value="issues">Issues ({results.issues.length})</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            <TabsContent value="issues" className="space-y-2">
              {results.issues.map((issue: any, index: number) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex items-center">
                    <div
                      className={`px-2 py-1 rounded text-xs mr-2 ${
                        issue.severity === "critical"
                          ? "bg-red-100 text-red-800"
                          : issue.severity === "major"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {issue.severity.toUpperCase()}
                    </div>
                    <div className="font-medium">{issue.type.replace("_", " ").toUpperCase()}</div>
                  </div>
                  <div className="mt-1">{issue.message}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Line {issue.line}, Column {issue.column}
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Suggestion:</span> {issue.suggestion}
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="recommendations" className="space-y-2">
              {results.recommendations.map((recommendation: string, index: number) => (
                <div key={index} className="flex items-start space-x-2 p-2 border rounded-lg">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>{recommendation}</div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
