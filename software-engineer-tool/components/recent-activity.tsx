import { Check, FileCode, GitBranch, GitPullRequest, MessageSquare } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "code-analysis",
      title: "Code Analysis Completed",
      description: "Spring Boot Controller analyzed with 3 issues found",
      time: "2 hours ago",
      icon: FileCode,
    },
    {
      id: 2,
      type: "quiz",
      title: "Quiz Completed",
      description: "Spring Boot Fundamentals - Score: 8/10",
      time: "Yesterday",
      icon: Check,
    },
    {
      id: 3,
      type: "code-review",
      title: "Code Review Requested",
      description: "Pull request #42: Add user authentication",
      time: "2 days ago",
      icon: GitPullRequest,
    },
    {
      id: 4,
      type: "commit",
      title: "Code Committed",
      description: "Refactored DAO layer for better performance",
      time: "3 days ago",
      icon: GitBranch,
    },
    {
      id: 5,
      type: "discussion",
      title: "Discussion Started",
      description: "Best practices for Spring Security implementation",
      time: "4 days ago",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4">
          <div className="rounded-full bg-gray-100 p-2">
            <activity.icon className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
