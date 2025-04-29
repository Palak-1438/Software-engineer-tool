"use client"

import { useState } from "react"
import { BookOpen, CheckCircle, ChevronRight, Code, FileText, Play, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function LearningModule() {
  const [activeTab, setActiveTab] = useState("content")
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [codeRunning, setCodeRunning] = useState(false)
  const [lessonCompleted, setLessonCompleted] = useState(false)

  const handleRunCode = () => {
    setCodeRunning(true)
    setTimeout(() => {
      setCodeRunning(false)
    }, 2000)
  }

  const handleCompleteLesson = () => {
    setLessonCompleted(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(200,65%,90%)]">
            <BookOpen className="h-5 w-5 text-[hsl(200,65%,40%)]" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Spring Security Basics</h3>
            <p className="text-sm text-muted-foreground">Lesson 4 of 5 in Spring Boot Fundamentals</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleCompleteLesson} disabled={lessonCompleted}>
            {lessonCompleted ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                Completed
              </>
            ) : (
              "Mark as Complete"
            )}
          </Button>
          <Button size="sm">
            Next Lesson
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Progress value={60} className="h-2 colorful-progress" />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-[hsl(30,15%,90%)] p-1">
          <TabsTrigger value="content">
            <FileText className="mr-2 h-4 w-4" />
            Content
          </TabsTrigger>
          <TabsTrigger value="video">
            <Play className="mr-2 h-4 w-4" />
            Video
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code className="mr-2 h-4 w-4" />
            Practice
          </TabsTrigger>
          <TabsTrigger value="quiz">
            <Terminal className="mr-2 h-4 w-4" />
            Quiz
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <div className="prose max-w-none">
            <h2>Introduction to Spring Security</h2>
            <p>
              Spring Security is a powerful and highly customizable authentication and access-control framework. It is
              the de-facto standard for securing Spring-based applications.
            </p>

            <h3>Key Concepts</h3>
            <ul>
              <li>
                <strong>Authentication</strong>: The process of establishing a principal is who they claim to be (a
                "principal" generally means a user, device or some other system).
              </li>
              <li>
                <strong>Authorization</strong>: The process of deciding whether a principal is allowed to perform an
                action.
              </li>
              <li>
                <strong>Principal</strong>: A user, device or system that can authenticate.
              </li>
              <li>
                <strong>Granted Authority</strong>: An authority granted to a principal (e.g., roles, scopes, etc.).
              </li>
            </ul>

            <h3>Basic Configuration</h3>
            <p>
              To add Spring Security to your application, you need to include the Spring Security starter dependency in
              your project:
            </p>

            <pre className="bg-gray-100 p-4 rounded-md">
              <code>{`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}</code>
            </pre>

            <p>
              Once you add this dependency, your application will be secured with basic authentication for all
              endpoints. The default username is "user" and a random password is generated at startup.
            </p>

            <h3>Custom Security Configuration</h3>
            <p>
              To customize the security configuration, you can create a configuration class that extends
              WebSecurityConfigurerAdapter:
            </p>

            <pre className="bg-gray-100 p-4 rounded-md">
              <code>{`@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`}</code>
            </pre>
          </div>
        </TabsContent>

        <TabsContent value="video">
          <div className="aspect-video bg-gray-100 rounded-md overflow-hidden relative">
            {!videoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-[hsl(200,65%,55%)] hover:bg-[hsl(200,65%,45%)]"
                  onClick={() => setVideoPlaying(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Play Video
                </Button>
              </div>
            ) : (
              <div className="p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">Video Player</p>
                  <p className="text-sm text-muted-foreground">
                    (In a real implementation, this would be an embedded video player showing the Spring Security
                    tutorial)
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <h3 className="font-medium">Video Chapters</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                <div className="flex items-center">
                  <Play className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                  <span>Introduction (0:00)</span>
                </div>
                <Button variant="ghost" size="sm">
                  Play
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                <div className="flex items-center">
                  <Play className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                  <span>Authentication Basics (2:15)</span>
                </div>
                <Button variant="ghost" size="sm">
                  Play
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                <div className="flex items-center">
                  <Play className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                  <span>Authorization Rules (8:42)</span>
                </div>
                <Button variant="ghost" size="sm">
                  Play
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                <div className="flex items-center">
                  <Play className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                  <span>Custom Login Page (15:30)</span>
                </div>
                <Button variant="ghost" size="sm">
                  Play
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-medium mb-2">Exercise: Implement Basic Authentication</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete the Spring Security configuration to implement basic authentication for a REST API.
              </p>

              <div className="font-mono text-sm bg-black text-white p-4 rounded-md">
                <pre>{`@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            // TODO: Configure HTTP Basic authentication
            // TODO: Disable CSRF for REST API
            // TODO: Configure authorization rules:
            //       - /api/public/** should be accessible to all
            //       - /api/admin/** should require ADMIN role
            //       - All other /api/** endpoints should be authenticated
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // TODO: Configure in-memory authentication with two users:
        //       - A regular user with USER role
        //       - An admin with ADMIN role
    }
}`}</pre>
              </div>

              <div className="mt-4 flex justify-between">
                <Button variant="outline">Show Solution</Button>
                <Button onClick={handleRunCode} disabled={codeRunning}>
                  {codeRunning ? "Running..." : "Run Code"}
                </Button>
              </div>

              {codeRunning && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Code executed successfully!</p>
                      <p className="text-sm">Your Spring Security configuration is working correctly.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-medium">Additional Resources</h3>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                  <a href="#" className="text-sm text-[hsl(200,65%,55%)] hover:underline">
                    Spring Security Reference Documentation
                  </a>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                  <a href="#" className="text-sm text-[hsl(200,65%,55%)] hover:underline">
                    Sample Security Configurations
                  </a>
                </li>
                <li className="flex items-center">
                  <Play className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                  <a href="#" className="text-sm text-[hsl(200,65%,55%)] hover:underline">
                    Advanced Spring Security Tutorial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="quiz">
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-medium mb-2">Knowledge Check</h3>
              <p className="text-sm text-muted-foreground mb-4">Test your understanding of Spring Security concepts.</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">1. What is the default password encoder in Spring Security 5.x?</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q1-a" name="q1" />
                      <label htmlFor="q1-a">NoOpPasswordEncoder</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q1-b" name="q1" />
                      <label htmlFor="q1-b">StandardPasswordEncoder</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q1-c" name="q1" />
                      <label htmlFor="q1-c">BCryptPasswordEncoder</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q1-d" name="q1" />
                      <label htmlFor="q1-d">Pbkdf2PasswordEncoder</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">
                    2. Which of the following is NOT a valid authentication method in Spring Security?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q2-a" name="q2" />
                      <label htmlFor="q2-a">Form-based authentication</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q2-b" name="q2" />
                      <label htmlFor="q2-b">Basic authentication</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q2-c" name="q2" />
                      <label htmlFor="q2-c">JWT authentication</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q2-d" name="q2" />
                      <label htmlFor="q2-d">Simple authentication</label>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-4 w-full">Submit Answers</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
