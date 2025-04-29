"use client"

import { useState } from "react"
import { Info } from "lucide-react"

import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function SkillProgress() {
  const [skills] = useState([
    {
      name: "Spring Boot",
      progress: 75,
      description: "Core concepts, REST APIs, Security, Data JPA",
    },
    {
      name: "Java Concurrency",
      progress: 60,
      description: "Threads, Executors, CompletableFuture, Locks",
    },
    {
      name: "Design Patterns",
      progress: 80,
      description: "Singleton, Factory, Builder, Observer, Strategy",
    },
    {
      name: "Testing",
      progress: 65,
      description: "JUnit, Mockito, Integration Testing",
    },
    {
      name: "Microservices",
      progress: 45,
      description: "Service Discovery, API Gateway, Circuit Breaker",
    },
  ])

  return (
    <TooltipProvider>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-medium">{skill.name}</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 ml-1 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{skill.description}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <span className="text-sm text-muted-foreground">{skill.progress}%</span>
            </div>
            <Progress value={skill.progress} className="h-2 colorful-progress" />
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
