"use client"

import { useState } from "react"
import { Check, GitPullRequest, MessageSquare, ThumbsDown, ThumbsUp, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function CodeReviewDetail() {
  const [activeComment, setActiveComment] = useState<number | null>(null)
  const [newComment, setNewComment] = useState<string>("")
  const [submitting, setSubmitting] = useState<boolean>(false)

  const handleAddComment = () => {
    if (!newComment.trim()) return

    setSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setNewComment("")
      setSubmitting(false)
    }, 1000)
  }

  return (
    <Card className="book-page">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>User Authentication Service</CardTitle>
            <CardDescription>Spring Security implementation review</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ThumbsDown className="mr-2 h-4 w-4" />
              Request Changes
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <ThumbsUp className="mr-2 h-4 w-4" />
              Approve
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-[hsl(200,65%,90%)] flex items-center justify-center">
              <User className="h-6 w-6 text-[hsl(200,65%,40%)]" />
            </div>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">Requested 2 days ago</div>
            </div>
          </div>
          <div className="flex items-center">
            <GitPullRequest className="h-5 w-5 mr-2 text-[hsl(200,65%,55%)]" />
            <span className="text-sm font-medium">PR #42: Add JWT authentication</span>
          </div>
        </div>

        <Tabs defaultValue="files" className="mt-6">
          <TabsList className="bg-[hsl(30,15%,90%)] p-1">
            <TabsTrigger value="files">Files Changed</TabsTrigger>
            <TabsTrigger value="comments">Comments (5)</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="files" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="rounded-md border overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-medium flex items-center justify-between">
                  <span>src/main/java/com/example/security/JwtAuthenticationFilter.java</span>
                  <span className="text-sm text-muted-foreground">+120 -5</span>
                </div>
                <div className="p-4 bg-gray-50 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre">
                    {`package com.example.security;

import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String requestTokenHeader = request.getHeader("Authorization");

        String username = null;
        String jwtToken = null;
        
        // JWT Token is in the form "Bearer token". Remove Bearer word and get only the Token
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtTokenUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                logger.error("Unable to get JWT Token");
            } catch (ExpiredJwtException e) {
                logger.error("JWT Token has expired");
            }
        } else {
            logger.warn("JWT Token does not begin with Bearer String");
        }

        // Once we get the token validate it
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(username);

            // if token is valid configure Spring Security to manually set authentication
            if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                
                // After setting the Authentication in the context, we specify
                // that the current user is authenticated. So it passes the
                // Spring Security Configurations successfully.
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        chain.doFilter(request, response);
    }
}`}
                  </pre>
                </div>
                <div className="border-t p-2 flex justify-end">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Add Comment
                  </Button>
                </div>
              </div>

              <div className="rounded-md border overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-medium flex items-center justify-between">
                  <span>src/main/java/com/example/security/JwtTokenUtil.java</span>
                  <span className="text-sm text-muted-foreground">+85 -0</span>
                </div>
                <div className="p-4 bg-gray-50 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre">
                    {`package com.example.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtTokenUtil {

    public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;

    @Value("\${jwt.secret}")
    private String secret;

    // retrieve username from jwt token
    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    // retrieve expiration date from jwt token
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }
    
    // for retrieving any information from token we will need the secret key
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    // check if the token has expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    // generate token for user
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    // while creating the token -
    // 1. Define claims of the token, like Issuer, Expiration, Subject, and the ID
    // 2. Sign the JWT using the HS512 algorithm and secret key
    // 3. According to JWS Compact Serialization, compact the JWT to a URL-safe string
    private String doGenerateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    // validate token
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}`}
                  </pre>
                </div>
                <div className="border-t p-2 flex justify-end">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Add Comment
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comments" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[hsl(280,65%,90%)] flex items-center justify-center">
                    <User className="h-6 w-6 text-[hsl(280,65%,40%)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Sarah Johnson</span>
                        <span className="text-sm text-muted-foreground ml-2">1 day ago</span>
                      </div>
                      <div className="text-sm text-muted-foreground">JwtAuthenticationFilter.java:45</div>
                    </div>
                    <div className="mt-2">
                      <p>
                        The token validation looks good, but I would suggest adding more detailed logging for token
                        validation failures to help with debugging.
                      </p>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Reply
                      </Button>
                      <div className="text-sm text-muted-foreground">2 replies</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[hsl(280,65%,90%)] flex items-center justify-center">
                    <User className="h-6 w-6 text-[hsl(280,65%,40%)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Sarah Johnson</span>
                        <span className="text-sm text-muted-foreground ml-2">1 day ago</span>
                      </div>
                      <div className="text-sm text-muted-foreground">JwtTokenUtil.java:28</div>
                    </div>
                    <div className="mt-2">
                      <p>
                        Consider using a more secure algorithm than HS512. I would recommend using RS256 with
                        public/private key pairs for better security.
                      </p>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Reply
                      </Button>
                      <div className="text-sm text-muted-foreground">1 reply</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-[hsl(280,65%,90%)] flex items-center justify-center">
                    <User className="h-6 w-6 text-[hsl(280,65%,40%)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Sarah Johnson</span>
                        <span className="text-sm text-muted-foreground ml-2">1 day ago</span>
                      </div>
                      <div className="text-sm text-muted-foreground">JwtTokenUtil.java:60</div>
                    </div>
                    <div className="mt-2">
                      <p>
                        The token validity period is set to 5 hours. This seems too long for a JWT token. Consider
                        reducing it to 15-30 minutes and implementing a refresh token mechanism.
                      </p>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Reply
                      </Button>
                      <div className="text-sm text-muted-foreground">0 replies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Add Comment</h3>
              <Textarea
                placeholder="Type your comment here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end mt-2">
                <Button onClick={handleAddComment} disabled={!newComment.trim() || submitting}>
                  {submitting ? "Submitting..." : "Submit Comment"}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="overview" className="space-y-4 mt-4">
            <div className="prose max-w-none">
              <h3>Review Request</h3>
              <p>
                I've implemented JWT authentication for our REST API using Spring Security. The implementation includes:
              </p>
              <ul>
                <li>JWT token generation and validation</li>
                <li>Authentication filter for processing JWT tokens</li>
                <li>Integration with Spring Security</li>
              </ul>
              <p>I'm particularly looking for feedback on:</p>
              <ul>
                <li>Security best practices</li>
                <li>Token management approach</li>
                <li>Error handling</li>
              </ul>
              <h3>Files Changed</h3>
              <ul>
                <li>src/main/java/com/example/security/JwtAuthenticationFilter.java</li>
                <li>src/main/java/com/example/security/JwtTokenUtil.java</li>
                <li>src/main/java/com/example/security/JwtUserDetailsService.java</li>
                <li>src/main/java/com/example/security/WebSecurityConfig.java</li>
                <li>src/main/resources/application.properties</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <MessageSquare className="mr-2 h-4 w-4" />
          Add General Comment
        </Button>
        <div className="space-x-2">
          <Button variant="outline">
            <Check className="mr-2 h-4 w-4" />
            Mark as Resolved
          </Button>
          <Button>Complete Review</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
