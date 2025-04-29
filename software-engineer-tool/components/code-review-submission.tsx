"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle, Check, GitBranch, GitPullRequest, Upload } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function CodeReviewSubmission() {
  const [reviewType, setReviewType] = useState<string>("ai")
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form validation
    if (Math.random() > 0.8) {
      setError("Please provide a valid repository URL or upload a file.")
      return
    }

    // Simulate submission
    setError(null)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-medium mb-2">Review Request Submitted!</h3>
        <p className="text-center text-muted-foreground mb-6">
          Your code review request has been submitted successfully. You'll receive a notification when the review is
          complete.
        </p>
        <Button onClick={() => setSubmitted(false)}>Submit Another Request</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label>Review Type</Label>
        <RadioGroup defaultValue="ai" value={reviewType} onValueChange={setReviewType} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ai" id="ai" />
            <Label htmlFor="ai">AI Review</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="peer" id="peer" />
            <Label htmlFor="peer">Peer Review</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expert" id="expert" />
            <Label htmlFor="expert">Expert Review</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="E.g., User Authentication Implementation" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe what you're looking for feedback on..."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label>Code Source</Label>
        <div className="grid gap-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <GitPullRequest className="h-5 w-5 text-[hsl(200,65%,55%)]" />
              <Label htmlFor="pr-url" className="font-medium">
                Pull Request URL
              </Label>
            </div>
            <Input id="pr-url" placeholder="https://github.com/your-repo/pull/42" className="mt-2" />
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <GitBranch className="h-5 w-5 text-[hsl(200,65%,55%)]" />
              <Label htmlFor="repo-url" className="font-medium">
                Repository URL
              </Label>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <Input id="repo-url" placeholder="https://github.com/your-repo" className="col-span-2" />
              <Input id="branch" placeholder="Branch name" />
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <Upload className="h-5 w-5 text-[hsl(200,65%,55%)]" />
              <Label htmlFor="file-upload" className="font-medium">
                Upload Files
              </Label>
            </div>
            <div className="mt-2">
              <Input id="file-upload" type="file" multiple />
            </div>
          </div>
        </div>
      </div>

      {reviewType === "peer" || reviewType === "expert" ? (
        <div className="space-y-2">
          <Label htmlFor="reviewer">Assign Reviewer</Label>
          <Select>
            <SelectTrigger id="reviewer">
              <SelectValue placeholder="Select a reviewer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Auto-assign</SelectItem>
              <SelectItem value="sarah">Sarah Johnson (Expert)</SelectItem>
              <SelectItem value="michael">Michael Chen (Expert)</SelectItem>
              <SelectItem value="david">David Kim (Peer)</SelectItem>
              <SelectItem value="lisa">Lisa Wong (Peer)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ) : null}

      <div className="space-y-2">
        <Label>Review Focus</Label>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="code-quality" />
            <Label htmlFor="code-quality">Code Quality</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="performance" />
            <Label htmlFor="performance">Performance</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="security" />
            <Label htmlFor="security">Security</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="architecture" />
            <Label htmlFor="architecture">Architecture</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="best-practices" />
            <Label htmlFor="best-practices">Best Practices</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="documentation" />
            <Label htmlFor="documentation">Documentation</Label>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Submit Review Request
      </Button>
    </form>
  )
}
