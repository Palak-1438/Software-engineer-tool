"use client"

import { useState } from "react"
import { Check, ChevronRight, HelpCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

type Question = {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which annotation is used to define a RESTful controller in Spring Boot?",
    options: ["@Controller", "@RestController", "@APIController", "@WebController"],
    correctAnswer: 1,
    explanation:
      "@RestController is a specialized version of the @Controller annotation that combines @Controller and @ResponseBody, making it suitable for RESTful web services.",
  },
  {
    id: 2,
    text: "What is the purpose of the @Autowired annotation in Spring?",
    options: [
      "To create a new instance of a class",
      "To mark a method as asynchronous",
      "To enable dependency injection",
      "To map HTTP requests to handler methods",
    ],
    correctAnswer: 2,
    explanation:
      "@Autowired enables dependency injection in Spring. It allows Spring to resolve and inject collaborating beans into your bean.",
  },
  {
    id: 3,
    text: "Which of the following is NOT a valid Spring Boot property file name?",
    options: ["application.properties", "application.yml", "application-dev.properties", "application.config"],
    correctAnswer: 3,
    explanation:
      "Spring Boot supports .properties and .yml file formats. application.config is not a valid Spring Boot property file name.",
  },
  {
    id: 4,
    text: "What is the default embedded server in Spring Boot?",
    options: ["Jetty", "Tomcat", "Undertow", "WebSphere"],
    correctAnswer: 1,
    explanation:
      "Tomcat is the default embedded server in Spring Boot. However, you can easily switch to Jetty or Undertow if needed.",
  },
  {
    id: 5,
    text: "Which design pattern is heavily used in Spring Framework?",
    options: ["Observer Pattern", "Singleton Pattern", "Dependency Injection Pattern", "Factory Pattern"],
    correctAnswer: 2,
    explanation:
      "Dependency Injection is a core pattern used in Spring Framework. It helps in achieving loose coupling between components.",
  },
]

export function QuizPanel() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / MOCK_QUESTIONS.length) * 100

  const handleOptionSelect = (index: number) => {
    if (!isAnswered) {
      setSelectedOption(index)
    }
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return

    setIsAnswered(true)
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
  }

  if (quizCompleted) {
    return (
      <Card className="book-page">
        <CardHeader>
          <CardTitle>Quiz Completed!</CardTitle>
          <CardDescription>
            You scored {score} out of {MOCK_QUESTIONS.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-6xl font-bold mb-4">{Math.round((score / MOCK_QUESTIONS.length) * 100)}%</div>
            <Progress value={(score / MOCK_QUESTIONS.length) * 100} className="w-full colorful-progress" />
            <p className="mt-6 text-center text-muted-foreground">
              {score === MOCK_QUESTIONS.length
                ? "Perfect score! You've mastered this topic."
                : score >= MOCK_QUESTIONS.length / 2
                  ? "Good job! You're on the right track, but there's still room for improvement."
                  : "Keep practicing! Review the topics and try again."}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRestartQuiz} className="w-full">
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {MOCK_QUESTIONS.length}
        </div>
        <div className="text-sm font-medium">
          Score: {score}/{currentQuestionIndex + (isAnswered ? 1 : 0)}
        </div>
      </div>
      <Progress value={progress} className="w-full colorful-progress" />

      <Card className="book-page">
        <CardHeader>
          <CardTitle>{currentQuestion.text}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedOption?.toString()} className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 rounded-md border p-3 cursor-pointer ${
                  isAnswered && index === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50"
                    : isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer
                      ? "border-red-500 bg-red-50"
                      : ""
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={isAnswered} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
                {isAnswered && index === currentQuestion.correctAnswer && <Check className="h-5 w-5 text-green-500" />}
                {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>

          {isAnswered && (
            <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-start">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Explanation</h4>
                  <p className="text-sm text-muted-foreground mt-1">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {!isAnswered ? (
            <Button onClick={handleCheckAnswer} disabled={selectedOption === null}>
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              {currentQuestionIndex < MOCK_QUESTIONS.length - 1 ? (
                <>
                  Next Question
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Complete Quiz"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
